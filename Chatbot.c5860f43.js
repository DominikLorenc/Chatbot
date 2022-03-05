// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"vw78":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ChatbotStore = function () {
  function ChatbotStore(questions) {
    this.rootElement = window.document.body;
    this.questions = questions;
    this.isChatCreated = false;
  }

  return ChatbotStore;
}();

exports.default = ChatbotStore;
},{}],"DySJ":[function(require,module,exports) {
"use strict";

var _a;

var _this = this;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var chatbotUtils = (_a = function () {
  function ChatbotUtils() {}

  return ChatbotUtils;
}(), _a.createElmentWithClass = function (className, typeElement) {
  if (typeElement === void 0) {
    typeElement = 'div';
  }

  var element = document.createElement(typeElement);
  element.className = className;
  return element;
}, _a.addElement = function (parentElement, childElement) {
  parentElement.appendChild(childElement);
}, _a.setdivWithImg = function (classNameDiv, src) {
  var div = _a.createElmentWithClass(classNameDiv);

  var img = _a.createElmentWithClass("".concat(classNameDiv, "-icon"), 'img');

  img.setAttribute('src', src);

  _a.addElement(div, img);

  return div;
}, _a.createDivWithElements = function (parent) {
  var childElement = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    childElement[_i - 1] = arguments[_i];
  }

  childElement.forEach(function (child) {
    return _a.addElement(parent, child);
  });
}, _a.addAttributes = function (element, attributes) {
  attributes.forEach(function (attribut) {
    element.setAttribute(attribut[0], attribut[1]);
  });
}, _a.getElement = function (elementClassName) {
  if (document.querySelector(elementClassName) === null) {
    throw new Error("Element ".concat(elementClassName, " is not exist"));
  }

  return document.querySelector(elementClassName);
}, _a.delay = function (time, callback) {
  setTimeout(function () {
    return callback();
  }, time);
}, _a.getArrayElementById = function (array, id) {
  var doesElementExist = array.filter(function (el) {
    return el.id === id;
  });

  if (doesElementExist.length === 0) {
    throw new Error('not found element');
  }

  return doesElementExist[0];
}, _a.setAnimation = function (elementToAnimation, animationName) {
  elementToAnimation.style.animation = animationName;
}, _a);
exports.default = chatbotUtils;
},{}],"inJZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var icons = {
  luncherIcon: "https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/45/000000/external-chatbot-online-shopping-vitaliy-gorbachev-blue-vitaly-gorbachev.png",
  topAvatarIcon: "https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/25/000000/external-robot-support-vitaliy-gorbachev-blue-vitaly-gorbachev.png",
  closeIcon: "https://img.icons8.com/material-outlined/24/000000/delete-sign.png",
  sendIcon: "https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-send-user-interface-kmg-design-flat-kmg-design.png",
  offIcon: "https://img.icons8.com/external-kmg-design-glyph-kmg-design/28/000000/external-send-user-interface-kmg-design-glyph-kmg-design.png"
};
exports.default = icons;
},{}],"PR4I":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ChatbotUtils_1 = __importDefault(require("./ChatbotUtils"));

var icons_1 = __importDefault(require("./assets/icons"));

var ChatbotElementCreator = function () {
  function ChatbotElementCreator(store, logic) {
    var _this = this;

    this.createLuncher = function () {
      var rootElement = _this.store.rootElement;
      var chatbot = ChatbotUtils_1.default.createElmentWithClass('chatbot');
      var chatbotLuncher = ChatbotUtils_1.default.setdivWithImg('chatbot__luncher', icons_1.default.luncherIcon);
      ChatbotUtils_1.default.addElement(rootElement, chatbot);
      ChatbotUtils_1.default.addElement(chatbot, chatbotLuncher);
      chatbotLuncher.addEventListener('click', function () {
        _this.logicChatbot.openChat(_this.createChat);
      });
    };

    this.createTopBarChat = function () {
      var chatTop = ChatbotUtils_1.default.createElmentWithClass('chat__top');
      var chatTopAvatar = ChatbotUtils_1.default.setdivWithImg('chat__top-avatar', icons_1.default.topAvatarIcon);
      var chatTopName = ChatbotUtils_1.default.createElmentWithClass('chat__top-name');
      var chatClose = ChatbotUtils_1.default.setdivWithImg('chat__top-closeBtn', icons_1.default.closeIcon);
      chatTopName.textContent = 'ChatBot';
      ChatbotUtils_1.default.createDivWithElements(chatTop, chatTopAvatar, chatTopName, chatClose);
      chatClose.addEventListener('click', function () {
        return _this.logicChatbot.closeChat();
      });
      return chatTop;
    };

    this.createChat = function () {
      var rootChatElement = ChatbotUtils_1.default.createElmentWithClass('chat');
      var chatbot = ChatbotUtils_1.default.getElement('.chatbot');

      var chatTop = _this.createTopBarChat();

      var chatConversation = _this.createConersation();

      var chatTyping = _this.createTyping();

      ChatbotUtils_1.default.addElement(chatbot, rootChatElement);
      ChatbotUtils_1.default.createDivWithElements(rootChatElement, chatTop, chatConversation, chatTyping);
      ChatbotUtils_1.default.delay(1000, _this.logicChatbot.createQuestionsMessage);
    };

    this.createConersation = function () {
      var conversation = ChatbotUtils_1.default.createElmentWithClass('chat__conversation');
      return conversation;
    };

    this.createTyping = function () {
      var typing = ChatbotUtils_1.default.createElmentWithClass('chat__typing', 'form');
      var input = ChatbotUtils_1.default.createElmentWithClass('chat__typing-input', 'input');
      var submitButton = ChatbotUtils_1.default.createElmentWithClass('chat__typing__submit-btn', 'button');
      var submitButtonIcon = ChatbotUtils_1.default.createElmentWithClass('chat__typing__submit-icon', 'img');
      var attributesInput = [['type', 'text'], ['placeholder', 'Twoja Wiadomość'], ['value', ''], ['required', 'true']];
      var atributesSubmitButtonIcon = [['src', icons_1.default.offIcon]];
      ChatbotUtils_1.default.addAttributes(submitButtonIcon, atributesSubmitButtonIcon);
      ChatbotUtils_1.default.addAttributes(input, attributesInput);
      ChatbotUtils_1.default.addElement(submitButton, submitButtonIcon);
      ChatbotUtils_1.default.createDivWithElements(typing, input, submitButton);
      typing.addEventListener('submit', function (e) {
        return _this.logicChatbot.handleForm(e, input);
      });
      input.addEventListener('input', function (e) {
        return _this.logicChatbot.switchButton(e);
      });
      return typing;
    };

    this.store = store;
    this.logicChatbot = logic;
  }

  return ChatbotElementCreator;
}();

exports.default = ChatbotElementCreator;
},{"./ChatbotUtils":"DySJ","./assets/icons":"inJZ"}],"rUKC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_ANIMATION = exports.SHOW_ANIMATION = void 0;
var SHOW_ANIMATION = 'show .4s forwards';
exports.SHOW_ANIMATION = SHOW_ANIMATION;
var HIDE_ANIMATION = 'hide .4s forwards';
exports.HIDE_ANIMATION = HIDE_ANIMATION;
},{}],"aydE":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ChatbotUtils_1 = __importDefault(require("./ChatbotUtils"));

var constans_1 = require("./constans");

var icons_1 = __importDefault(require("./assets/icons"));

var ChatbotLogic = function () {
  function ChatbotLogic(store) {
    var _this = this;

    this.openChat = function (createChatFn) {
      var chatbotLuncherWrapper = ChatbotUtils_1.default.getElement('.chatbot__luncher');

      if (_this.store.isChatCreated) {
        var chat = ChatbotUtils_1.default.getElement('.chat');

        _this.toggleAnimation('open', chatbotLuncherWrapper, chat);
      } else {
        _this.store.isChatCreated = true;
        createChatFn();
        ChatbotUtils_1.default.setAnimation(chatbotLuncherWrapper, constans_1.HIDE_ANIMATION);
      }
    };

    this.closeChat = function () {
      var chatbotLuncherWrapper = ChatbotUtils_1.default.getElement('.chatbot__luncher');
      var chat = ChatbotUtils_1.default.getElement('.chat');

      _this.toggleAnimation('close', chatbotLuncherWrapper, chat);
    };

    this.toggleAnimation = function (typeAction, chatbotLuncherWrapper, chatWrapper) {
      switch (typeAction) {
        case 'open':
          ChatbotUtils_1.default.setAnimation(chatWrapper, constans_1.SHOW_ANIMATION);
          ChatbotUtils_1.default.setAnimation(chatbotLuncherWrapper, constans_1.HIDE_ANIMATION);
          break;

        case 'close':
          ChatbotUtils_1.default.setAnimation(chatWrapper, constans_1.HIDE_ANIMATION);
          ChatbotUtils_1.default.setAnimation(chatbotLuncherWrapper, constans_1.SHOW_ANIMATION);
          break;

        default:
          throw new Error('Unknown action');
      }
    };

    this.switchButton = function (e) {
      var icon = ChatbotUtils_1.default.getElement('.chat__typing__submit-icon');
      var target = e.target;

      if (target.value.length > 0) {
        ChatbotUtils_1.default.addAttributes(icon, [['src', icons_1.default.sendIcon]]);
      } else {
        ChatbotUtils_1.default.addAttributes(icon, [['src', icons_1.default.offIcon]]);
      }
    };

    this.handleForm = function (e, input) {
      e.preventDefault();
      var value = input.value;

      var filterKeyWordResult = _this.filterInputValue(value);

      _this.removeQuestionMessage();

      _this.addMessageToConversation(_this.createMassage('user', value));

      _this.addMessageToConversation(_this.createMassage('chatbot', filterKeyWordResult));

      ChatbotUtils_1.default.delay(1000, _this.createQuestionsMessage);
      input.value = '';
      var icon = ChatbotUtils_1.default.getElement('.chat__typing__submit-icon');
      ChatbotUtils_1.default.addAttributes(icon, [['src', icons_1.default.offIcon]]);
    };

    this.filterInputValue = function (value) {
      var filterInputValue = _this.store.questions.filter(function (el) {
        return el.question.toLowerCase() === value.toLowerCase();
      });

      return filterInputValue.length === 0 ? 'Not found fraze' : filterInputValue[0].answer;
    };

    this.createMassage = function (typeUser, textMessage) {
      var messageWrapper = ChatbotUtils_1.default.createElmentWithClass('chat__conversation__message');
      var messageContent = ChatbotUtils_1.default.createElmentWithClass('message', 'p');
      messageContent.textContent = textMessage;
      ChatbotUtils_1.default.createDivWithElements(messageWrapper, messageContent);

      switch (typeUser) {
        case 'user':
          messageWrapper.classList.add('chat__conversation__message--user');
          return messageWrapper;

        case 'chatbot':
          messageWrapper.classList.add('chat__conversation__message--chatbot');
          return messageWrapper;

        default:
          throw new Error("This ".concat(typeUser, " is not exsit."));
      }
    };

    this.addMessageToConversation = function (message) {
      var conversation = ChatbotUtils_1.default.getElement('.chat__conversation'); // getElement

      ChatbotUtils_1.default.addElement(conversation, message);
    };

    this.createQuestionsMessage = function () {
      var questionsWrapper = ChatbotUtils_1.default.createElmentWithClass('questions');

      var selectMessage = _this.createMassage('chatbot', 'Select Question:');

      ChatbotUtils_1.default.addElement(questionsWrapper, selectMessage);

      _this.createQuestions(questionsWrapper);

      _this.addMessageToConversation(questionsWrapper);
    };

    this.createQuestions = function (questionsWrapper) {
      _this.store.questions.forEach(function (_a) {
        var id = _a.id,
            question = _a.question;
        var questionElement = ChatbotUtils_1.default.createElmentWithClass('question');
        questionElement.textContent = question;
        questionElement.addEventListener('click', function () {
          return _this.selectQuestion(id);
        });
        ChatbotUtils_1.default.addElement(questionsWrapper, questionElement);
      });
    };

    this.selectQuestion = function (id) {
      var _a = ChatbotUtils_1.default.getArrayElementById(_this.store.questions, id),
          question = _a.question,
          answer = _a.answer;

      _this.addMessageToConversation(_this.createMassage('user', question));

      _this.addMessageToConversation(_this.createMassage('chatbot', answer));

      _this.removeQuestionMessage();

      ChatbotUtils_1.default.delay(1000, _this.createQuestionsMessage);
    };

    this.removeQuestionMessage = function () {
      var questions = ChatbotUtils_1.default.getElement('.questions');
      questions.remove();
    };

    this.store = store;
  }

  return ChatbotLogic;
}();

exports.default = ChatbotLogic;
},{"./ChatbotUtils":"DySJ","./constans":"rUKC","./assets/icons":"inJZ"}],"yFeO":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ChatbotElementCreator_1 = __importDefault(require("./ChatbotElementCreator"));

var ChatbotLogic_1 = __importDefault(require("./ChatbotLogic"));

var ChatbotController = function () {
  function ChatbotController(store) {
    this.store = store;
    var chatbotLogic = new ChatbotLogic_1.default(this.store);
    var elementCreator = new ChatbotElementCreator_1.default(this.store, chatbotLogic);
    elementCreator.createLuncher();
  }

  return ChatbotController;
}();

exports.default = ChatbotController;
},{"./ChatbotElementCreator":"PR4I","./ChatbotLogic":"aydE"}],"saRr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
},{}],"Kfyb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;
},{}],"dh4g":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = _interopRequireDefault(require("./regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;
},{"./regex.js":"Kfyb"}],"Okf7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;
},{"./validate.js":"dh4g"}],"ds1e":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports.default = _default;
},{"./rng.js":"saRr","./stringify.js":"Okf7"}],"i9qQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports.default = _default;
},{"./validate.js":"dh4g"}],"jljL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
},{"./stringify.js":"Okf7","./parse.js":"i9qQ"}],"z990":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports.default = _default;
},{}],"Nc2A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _md = _interopRequireDefault(require("./md5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports.default = _default;
},{"./v35.js":"jljL","./md5.js":"z990"}],"HQTZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  var rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports.default = _default;
},{"./rng.js":"saRr","./stringify.js":"Okf7"}],"F2vf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports.default = _default;
},{}],"oZbo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _sha = _interopRequireDefault(require("./sha1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports.default = _default;
},{"./v35.js":"jljL","./sha1.js":"F2vf"}],"Bkgj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;
},{}],"kmp0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports.default = _default;
},{"./validate.js":"dh4g"}],"D6fo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "v1", {
  enumerable: true,
  get: function () {
    return _v.default;
  }
});
Object.defineProperty(exports, "v3", {
  enumerable: true,
  get: function () {
    return _v2.default;
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function () {
    return _v3.default;
  }
});
Object.defineProperty(exports, "v5", {
  enumerable: true,
  get: function () {
    return _v4.default;
  }
});
Object.defineProperty(exports, "NIL", {
  enumerable: true,
  get: function () {
    return _nil.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.default;
  }
});

var _v = _interopRequireDefault(require("./v1.js"));

var _v2 = _interopRequireDefault(require("./v3.js"));

var _v3 = _interopRequireDefault(require("./v4.js"));

var _v4 = _interopRequireDefault(require("./v5.js"));

var _nil = _interopRequireDefault(require("./nil.js"));

var _version = _interopRequireDefault(require("./version.js"));

var _validate = _interopRequireDefault(require("./validate.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./v1.js":"ds1e","./v3.js":"Nc2A","./v4.js":"HQTZ","./v5.js":"oZbo","./nil.js":"Bkgj","./version.js":"kmp0","./validate.js":"dh4g","./stringify.js":"Okf7","./parse.js":"i9qQ"}],"UnXq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var uuid_1 = require("uuid");

var questions = [{
  id: (0, uuid_1.v4)(),
  question: 'Contact',
  answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore repellendus ipsa ipsum ducimus id explicabo? Quaerat est accusantium praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo?'
}, {
  id: (0, uuid_1.v4)(),
  question: 'Company Info',
  answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore repellendus ipsa ipsum ducimus id'
}, {
  id: (0, uuid_1.v4)(),
  question: 'Feature',
  answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore repellendus ipsa ipsum ducimus id explicabo? Quaerat est  sit amet consectetur adipisicing elit. Dicta, nemo?'
}, {
  id: (0, uuid_1.v4)(),
  question: 'Sales',
  answer: 'Lorem ipsusentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo?'
}];
exports.default = questions;
},{"uuid":"D6fo"}],"XGDT":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ChatbotStore_1 = __importDefault(require("./ChatbotStore"));

var ChatbotController_1 = __importDefault(require("./ChatbotController"));

var utils_1 = __importDefault(require("./utils"));

var Chatbot = function () {
  function Chatbot(questions) {
    if (questions.length === 0) throw new Error('Array with questions is empty');
    var store = new ChatbotStore_1.default(questions);
    var controller = new ChatbotController_1.default(store);
  }

  return Chatbot;
}();

var chat = new Chatbot(utils_1.default);
},{"./ChatbotStore":"vw78","./ChatbotController":"yFeO","./utils":"UnXq"}]},{},["XGDT"], null)
//# sourceMappingURL=Chatbot.c5860f43.js.map