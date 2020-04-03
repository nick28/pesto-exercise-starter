const privateProps = (obj, isPrivate) => {
  const wrapFunctionProperties = (property, target) => () => property.call(target);
  const throwErrorIfNeededOnAccessing = property => {
    if (isPrivate(property)) {
      throw TypeError(`Access Denied for property ${property}`);
    }
  };

  const handler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);

      if (typeof value === 'function') {
        return wrapFunctionProperties(value, target);
      } else {
        throwErrorIfNeededOnAccessing(property);
      }

      return value;
    },

    defineProperty(target, property, descriptor) {
      throwErrorIfNeededOnAccessing(property);
      return Reflect.defineProperty(target, property, descriptor);
    },

    deleteProperty(target, property) {
      throwErrorIfNeededOnAccessing(property);

      if (Object.prototype.hasOwnProperty.call(target, property)) {
        Reflect.deleteProperty(target, property);
        return true;
      }

      return false;
    },

    ownKeys(target) {
      return Object.keys(target).filter(key => !isPrivate(key));
    },

    has(target, property) {
      if (isPrivate(property)) {
        return false;
      }
      return Reflect.has(target, property);
    }
  };
  return new Proxy(obj, handler);
};

export { privateProps };
