System.config({
    defaultJSExtensions: true,
    transpiler: "babel",
    babelOptions: {
        "stage": 0,
        "optional": [
            "runtime",
            "optimisation.modules.system"
        ]
    },
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },

    map: {
        "babel": "npm:babel-core@5.8.35",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "bootstrap": "npm:bootstrap@3.3.6",
        "classnames": "npm:classnames@2.2.3",
        "core-js": "npm:core-js@1.2.6",
        "css": "github:systemjs/plugin-css@0.1.20",
        "express": "npm:express@4.13.4",
        "font-awesome": "npm:font-awesome@4.5.0",
        "history": "npm:history@2.0.0",
        "immutable": "npm:immutable@3.7.6",
        "jquery": "npm:jquery@2.2.0",
        "jspm-loader-jsx": "npm:jspm-loader-jsx@0.0.7",
        "react": "npm:react@0.14.7",
        "react-dom": "npm:react-dom@0.14.7",
        "react-redux": "npm:react-redux@4.3.0",
        "react-router": "npm:react-router@2.0.0-rc5",
        "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.2",
        "redux": "npm:redux@3.2.1",
        "redux-async": "npm:redux-async@2.0.1",
        "redux-logger": "npm:redux-logger@2.5.0",
        "redux-thunk": "npm:redux-thunk@1.0.3",
        "reselect": "npm:reselect@2.0.3",
        "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.20",
        "twbs/bootstrap": "github:twbs/bootstrap@3.3.6",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.6.0"
        },
        "github:jspm/nodelibs-constants@0.1.0": {
            "constants-browserify": "npm:constants-browserify@0.0.1"
        },
        "github:jspm/nodelibs-crypto@0.1.0": {
            "crypto-browserify": "npm:crypto-browserify@3.11.0"
        },
        "github:jspm/nodelibs-domain@0.1.0": {
            "domain-browser": "npm:domain-browser@1.1.7"
        },
        "github:jspm/nodelibs-events@0.1.1": {
            "events": "npm:events@1.0.2"
        },
        "github:jspm/nodelibs-http@1.7.1": {
            "Base64": "npm:Base64@0.2.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-net@0.1.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "timers": "github:jspm/nodelibs-timers@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.2"
        },
        "github:jspm/nodelibs-querystring@0.1.0": {
            "querystring": "npm:querystring@0.2.0"
        },
        "github:jspm/nodelibs-stream@0.1.0": {
            "stream-browserify": "npm:stream-browserify@1.0.0"
        },
        "github:jspm/nodelibs-string_decoder@0.1.0": {
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "github:jspm/nodelibs-timers@0.1.0": {
            "timers-browserify": "npm:timers-browserify@1.4.2"
        },
        "github:jspm/nodelibs-tty@0.1.0": {
            "tty-browserify": "npm:tty-browserify@0.0.0"
        },
        "github:jspm/nodelibs-url@0.1.0": {
            "url": "npm:url@0.10.3"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:jspm/nodelibs-vm@0.1.0": {
            "vm-browserify": "npm:vm-browserify@0.0.4"
        },
        "github:twbs/bootstrap@3.3.6": {
            "jquery": "github:components/jquery@2.2.0"
        },
        "npm:accepts@1.2.13": {
            "mime-types": "npm:mime-types@2.1.9",
            "negotiator": "npm:negotiator@0.5.3"
        },
        "npm:amdefine@1.0.0": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "module": "github:jspm/nodelibs-module@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:asap@2.0.3": {
            "domain": "github:jspm/nodelibs-domain@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:asn1.js@4.3.1": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "bn.js": "npm:bn.js@4.10.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:babel-runtime@5.8.35": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:bn.js@4.10.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:bootstrap@3.3.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:browserify-aes@1.0.6": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "buffer-xor": "npm:buffer-xor@1.0.3",
            "cipher-base": "npm:cipher-base@1.0.2",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:browserify-cipher@1.0.0": {
            "browserify-aes": "npm:browserify-aes@1.0.6",
            "browserify-des": "npm:browserify-des@1.0.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        },
        "npm:browserify-des@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "cipher-base": "npm:cipher-base@1.0.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "des.js": "npm:des.js@1.0.0",
            "inherits": "npm:inherits@2.0.1"
        },
        "npm:browserify-rsa@4.0.0": {
            "bn.js": "npm:bn.js@4.10.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "constants": "github:jspm/nodelibs-constants@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "randombytes": "npm:randombytes@2.0.2"
        },
        "npm:browserify-sign@4.0.0": {
            "bn.js": "npm:bn.js@4.10.0",
            "browserify-rsa": "npm:browserify-rsa@4.0.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "create-hmac": "npm:create-hmac@1.1.4",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "elliptic": "npm:elliptic@6.2.3",
            "inherits": "npm:inherits@2.0.1",
            "parse-asn1": "npm:parse-asn1@5.0.0",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:buffer-xor@1.0.3": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:buffer@3.6.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:camel-case@1.2.2": {
            "sentence-case": "npm:sentence-case@1.1.3",
            "upper-case": "npm:upper-case@1.1.3"
        },
        "npm:cipher-base@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
        },
        "npm:constants-browserify@0.0.1": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:content-disposition@0.5.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:cookie-signature@1.0.6": {
            "crypto": "github:jspm/nodelibs-crypto@0.1.0"
        },
        "npm:core-js@1.2.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:core-util-is@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:create-ecdh@4.0.0": {
            "bn.js": "npm:bn.js@4.10.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "elliptic": "npm:elliptic@6.2.3"
        },
        "npm:create-hash@1.1.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "cipher-base": "npm:cipher-base@1.0.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "ripemd160": "npm:ripemd160@1.0.1",
            "sha.js": "npm:sha.js@2.4.4"
        },
        "npm:create-hmac@1.1.4": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:crypto-browserify@3.11.0": {
            "browserify-cipher": "npm:browserify-cipher@1.0.0",
            "browserify-sign": "npm:browserify-sign@4.0.0",
            "create-ecdh": "npm:create-ecdh@4.0.0",
            "create-hash": "npm:create-hash@1.1.2",
            "create-hmac": "npm:create-hmac@1.1.4",
            "diffie-hellman": "npm:diffie-hellman@5.0.2",
            "inherits": "npm:inherits@2.0.1",
            "pbkdf2": "npm:pbkdf2@3.0.4",
            "public-encrypt": "npm:public-encrypt@4.0.0",
            "randombytes": "npm:randombytes@2.0.2"
        },
        "npm:debug@2.2.0": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ms": "npm:ms@0.7.1",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "tty": "github:jspm/nodelibs-tty@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:depd@1.1.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:des.js@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        },
        "npm:destroy@1.0.4": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:diffie-hellman@5.0.2": {
            "bn.js": "npm:bn.js@4.10.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "miller-rabin": "npm:miller-rabin@4.0.0",
            "randombytes": "npm:randombytes@2.0.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:domain-browser@1.1.7": {
            "events": "github:jspm/nodelibs-events@0.1.1"
        },
        "npm:elliptic@6.2.3": {
            "bn.js": "npm:bn.js@4.10.0",
            "brorand": "npm:brorand@1.0.5",
            "hash.js": "npm:hash.js@1.0.3",
            "inherits": "npm:inherits@2.0.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:envify@3.4.0": {
            "jstransform": "npm:jstransform@10.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "through": "npm:through@2.3.8"
        },
        "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:etag@1.7.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:evp_bytestokey@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0"
        },
        "npm:express@4.13.4": {
            "accepts": "npm:accepts@1.2.13",
            "array-flatten": "npm:array-flatten@1.1.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "content-disposition": "npm:content-disposition@0.5.1",
            "content-type": "npm:content-type@1.0.1",
            "cookie": "npm:cookie@0.1.5",
            "cookie-signature": "npm:cookie-signature@1.0.6",
            "debug": "npm:debug@2.2.0",
            "depd": "npm:depd@1.1.0",
            "escape-html": "npm:escape-html@1.0.3",
            "etag": "npm:etag@1.7.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "finalhandler": "npm:finalhandler@0.4.1",
            "fresh": "npm:fresh@0.3.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "merge-descriptors": "npm:merge-descriptors@1.0.1",
            "methods": "npm:methods@1.1.2",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "on-finished": "npm:on-finished@2.3.0",
            "parseurl": "npm:parseurl@1.3.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "path-to-regexp": "npm:path-to-regexp@0.1.7",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "proxy-addr": "npm:proxy-addr@1.0.10",
            "qs": "npm:qs@4.0.0",
            "querystring": "github:jspm/nodelibs-querystring@0.1.0",
            "range-parser": "npm:range-parser@1.0.3",
            "send": "npm:send@0.13.1",
            "serve-static": "npm:serve-static@1.10.2",
            "type-is": "npm:type-is@1.6.11",
            "utils-merge": "npm:utils-merge@1.0.0",
            "vary": "npm:vary@1.0.1"
        },
        "npm:fbjs@0.2.1": {
            "core-js": "npm:core-js@1.2.6",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "promise": "npm:promise@7.1.1",
            "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
        },
        "npm:fbjs@0.6.1": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:finalhandler@0.4.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "debug": "npm:debug@2.2.0",
            "escape-html": "npm:escape-html@1.0.3",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "on-finished": "npm:on-finished@2.3.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "unpipe": "npm:unpipe@1.0.0"
        },
        "npm:font-awesome@4.5.0": {
            "css": "github:systemjs/plugin-css@0.1.20"
        },
        "npm:hash.js@1.0.3": {
            "inherits": "npm:inherits@2.0.1"
        },
        "npm:history@2.0.0": {
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "deep-equal": "npm:deep-equal@1.0.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "invariant": "npm:invariant@2.2.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "query-string": "npm:query-string@3.0.0",
            "warning": "npm:warning@2.1.0"
        },
        "npm:http-errors@1.3.1": {
            "inherits": "npm:inherits@2.0.1",
            "statuses": "npm:statuses@1.2.1"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:invariant@2.2.0": {
            "loose-envify": "npm:loose-envify@1.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:jspm-loader-jsx@0.0.7": {
            "pascal-case": "npm:pascal-case@1.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "react": "npm:react@0.13.3",
            "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
        },
        "npm:jstransform@10.1.0": {
            "base62": "npm:base62@0.1.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "source-map": "npm:source-map@0.1.31"
        },
        "npm:lodash@4.2.1": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:loose-envify@1.1.0": {
            "js-tokens": "npm:js-tokens@1.0.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:miller-rabin@4.0.0": {
            "bn.js": "npm:bn.js@4.10.0",
            "brorand": "npm:brorand@1.0.5"
        },
        "npm:mime-db@1.21.0": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:mime-types@2.1.9": {
            "mime-db": "npm:mime-db@1.21.0",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:mime@1.3.4": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:on-finished@2.3.0": {
            "ee-first": "npm:ee-first@1.1.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:parse-asn1@5.0.0": {
            "asn1.js": "npm:asn1.js@4.3.1",
            "browserify-aes": "npm:browserify-aes@1.0.6",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
            "pbkdf2": "npm:pbkdf2@3.0.4",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:parseurl@1.3.1": {
            "url": "github:jspm/nodelibs-url@0.1.0"
        },
        "npm:pascal-case@1.1.2": {
            "camel-case": "npm:camel-case@1.2.2",
            "upper-case-first": "npm:upper-case-first@1.1.2"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:pbkdf2@3.0.4": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "create-hmac": "npm:create-hmac@1.1.4",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:process@0.11.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:promise@7.1.1": {
            "asap": "npm:asap@2.0.3",
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:proxy-addr@1.0.10": {
            "forwarded": "npm:forwarded@0.1.0",
            "ipaddr.js": "npm:ipaddr.js@1.0.5"
        },
        "npm:public-encrypt@4.0.0": {
            "bn.js": "npm:bn.js@4.10.0",
            "browserify-rsa": "npm:browserify-rsa@4.0.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "parse-asn1": "npm:parse-asn1@5.0.0",
            "randombytes": "npm:randombytes@2.0.2"
        },
        "npm:punycode@1.3.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:query-string@3.0.0": {
            "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
        },
        "npm:randombytes@2.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:react-dom@0.14.7": {
            "react": "npm:react@0.14.7"
        },
        "npm:react-redux@4.3.0": {
            "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
            "invariant": "npm:invariant@2.2.0",
            "lodash": "npm:lodash@4.2.1",
            "loose-envify": "npm:loose-envify@1.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "react": "npm:react@0.14.7",
            "redux": "npm:redux@3.2.1"
        },
        "npm:react-router@2.0.0-rc5": {
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "history": "npm:history@2.0.0",
            "invariant": "npm:invariant@2.2.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "warning": "npm:warning@2.1.0"
        },
        "npm:react-tap-event-plugin@0.2.2": {
            "fbjs": "npm:fbjs@0.2.1",
            "react": "npm:react@0.14.7"
        },
        "npm:react@0.13.3": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "envify": "npm:envify@3.4.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:react@0.14.7": {
            "fbjs": "npm:fbjs@0.6.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:readable-stream@1.1.13": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.2",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream-browserify": "npm:stream-browserify@1.0.0",
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "npm:redux@3.2.1": {
            "lodash": "npm:lodash@4.2.1",
            "loose-envify": "npm:loose-envify@1.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:ripemd160@1.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:send@0.13.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "debug": "npm:debug@2.2.0",
            "depd": "npm:depd@1.1.0",
            "destroy": "npm:destroy@1.0.4",
            "escape-html": "npm:escape-html@1.0.3",
            "etag": "npm:etag@1.7.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fresh": "npm:fresh@0.3.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "http-errors": "npm:http-errors@1.3.1",
            "mime": "npm:mime@1.3.4",
            "ms": "npm:ms@0.7.1",
            "on-finished": "npm:on-finished@2.3.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "range-parser": "npm:range-parser@1.0.3",
            "statuses": "npm:statuses@1.2.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:sentence-case@1.1.3": {
            "lower-case": "npm:lower-case@1.1.3"
        },
        "npm:serve-static@1.10.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "escape-html": "npm:escape-html@1.0.3",
            "parseurl": "npm:parseurl@1.3.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "send": "npm:send@0.13.1",
            "url": "github:jspm/nodelibs-url@0.1.0"
        },
        "npm:sha.js@2.4.4": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:source-map@0.1.31": {
            "amdefine": "npm:amdefine@1.0.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:statuses@1.2.1": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:stream-browserify@1.0.0": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "readable-stream": "npm:readable-stream@1.1.13"
        },
        "npm:string_decoder@0.10.31": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:through@2.3.8": {
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:timers-browserify@1.4.2": {
            "process": "npm:process@0.11.2"
        },
        "npm:type-is@1.6.11": {
            "media-typer": "npm:media-typer@0.3.0",
            "mime-types": "npm:mime-types@2.1.9"
        },
        "npm:upper-case-first@1.1.2": {
            "upper-case": "npm:upper-case@1.1.3"
        },
        "npm:url@0.10.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "punycode": "npm:punycode@1.3.2",
            "querystring": "npm:querystring@0.2.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:vm-browserify@0.0.4": {
            "indexof": "npm:indexof@0.0.1"
        },
        "npm:warning@2.1.0": {
            "loose-envify": "npm:loose-envify@1.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        }
    }
});