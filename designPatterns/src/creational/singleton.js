const singleton = (function(){
  let instance = null;
  
  return {
    getInstance: function(){
      if(!instance)
        instance = {text: "hello"};
      return instance;
    }
  };
})();

export default singleton;