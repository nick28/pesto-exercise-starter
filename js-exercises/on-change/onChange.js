function isObject(target) {
  return target !== null && typeof target === "object";
}

const onChange = (obj, onChangeFn) => {
  const handler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);

      if (isObject(value)) {
        return new Proxy(value, handler);
      }

      return value;
    },

    defineProperty(target, property, descriptor) {
      const { value } = descriptor;
      onChangeFn();
      if (isObject(value)) {
        onChangeFn();
        return Reflect.defineProperty(target, property, {
          value: new Proxy(value, handler)
        });
      }

      return Reflect.defineProperty(target, property, descriptor);
    },

    deleteProperty(target, property) {
      if (Object.prototype.hasOwnProperty.call(target, property)) {
        Reflect.deleteProperty(target, property);
        onChangeFn();
        return true;
      }
      return false;
    }
  };
  return new Proxy(obj, handler);
};

export { onChange };
