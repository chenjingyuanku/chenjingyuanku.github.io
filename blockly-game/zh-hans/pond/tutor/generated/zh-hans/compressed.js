// Automatically generated file.  Do not edit!
var g, h = this;

function aa() {}

function ba(a) {
    a.nc = function() {
        return a.ij ? a.ij : a.ij = new a
    }
}

function ca(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function da(a) {
    return "array" == ca(a)
}

function ea(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function m(a) {
    return "string" == typeof a
}

function q(a) {
    return "number" == typeof a
}

function fa(a) {
    return "function" == ca(a)
}

function ga(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ha(a) {
    return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ja = 0;

function ka(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function la(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function ma(a, b, c) {
    ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
    return ma.apply(null, arguments)
}

function na(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var oa = Date.now || function() {
    return +new Date
};

function t(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.w = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Hr = function(a, c, f) {
        for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++) k[l - 2] = arguments[l];
        return b.prototype[c].apply(a, k)
    }
};
var pa;

function qa(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var ra = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function sa(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}

function ta(a) {
    if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ya, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(za, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Aa, "&#0;"));
    return a
}
var va = /&/g,
    wa = /</g,
    xa = />/g,
    ya = /"/g,
    za = /'/g,
    Aa = /\x00/g,
    ua = /[\x00&<>"']/;

function Ba(a) {
    return -1 != a.indexOf("&") ? "document" in h ? Ca(a) : Da(a) : a
}

function Ca(a) {
    var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        },
        c;
    c = h.document.createElement("div");
    return a.replace(Ea, function(a, e) {
        var f = b[a];
        if (f) return f;
        if ("#" == e.charAt(0)) {
            var k = Number("0" + e.substr(1));
            isNaN(k) || (f = String.fromCharCode(k))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}

function Da(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d)) return String.fromCharCode(d)
                }
                return a
        }
    })
}
var Ea = /&([^;\s<&]+);?/g;

function Fa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Ga() {
    return "background-color".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}

function Ha(a) {
    var b = m(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};

function Ia(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}
var Ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ka(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Ja.length; f++) c = Ja[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var La;
a: {
    var Ma = h.navigator;
    if (Ma) {
        var Na = Ma.userAgent;
        if (Na) {
            La = Na;
            break a
        }
    }
    La = ""
}

function Oa(a) {
    return -1 != La.indexOf(a)
};
var Pa = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Qa = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Ra = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a,
            b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, k = m(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in k) {
                var p = k[l];
                b.call(c, p, l, a) && (e[f++] = p)
            }
        return e
    },
    Sa = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, k = 0; k < d; k++) k in f && (e[k] = b.call(c, f[k], k, a));
        return e
    },
    Ta = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in
                e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function Ua(a, b) {
    return 0 <= Pa(a, b)
}

function Va(a, b) {
    var c = Pa(a, b),
        d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d
}

function Wa(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
}

function Xa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function Ya(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (ea(d)) {
            var e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (var k = 0; k < f; k++) a[e + k] = d[k]
        } else a.push(d)
    }
}

function Za(a, b, c, d) {
    Array.prototype.splice.apply(a, $a(arguments, 1))
}

function $a(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function ab() {
    0 != bb && (cb[ha(this)] = this);
    this.L = this.L;
    this.J = this.J
}
var bb = 0,
    cb = {};
ab.prototype.L = !1;
ab.prototype.D = function() {
    if (!this.L && (this.L = !0, this.Ba(), 0 != bb)) {
        var a = ha(this);
        delete cb[a]
    }
};

function db(a, b) {
    a.L ? b.call(void 0) : (a.J || (a.J = []), a.J.push(b))
}
ab.prototype.Ba = function() {
    if (this.J)
        for (; this.J.length;) this.J.shift()()
};

function eb(a) {
    a && "function" == typeof a.D && a.D()
};
var fb = "closure_listenable_" + (1E6 * Math.random() | 0),
    gb = 0;

function hb(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.Se = !!d;
    this.pf = e;
    this.aj = ++gb;
    this.Ud = this.Re = !1
}

function ib(a) {
    a.Ud = !0;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.pf = null
};

function jb(a) {
    this.src = a;
    this.g = {};
    this.h = 0
}
jb.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var k = kb(a, b, d, e); - 1 < k ? (b = a[k], c || (b.Re = !1)) : (b = new hb(b, this.src, f, !!d, e), b.Re = c, a.push(b));
    return b
};

function lb(a, b) {
    var c = b.type;
    c in a.g && Va(a.g[c], b) && (ib(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
}

function mb(a, b, c, d, e) {
    a = a.g[b.toString()];
    b = -1;
    a && (b = kb(a, c, d, e));
    return -1 < b ? a[b] : null
}

function kb(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Ud && f.listener == b && f.Se == !!c && f.pf == d) return e
    }
    return -1
};

function nb(a, b) {
    this.type = a;
    this.i = this.target = b;
    this.j = !1;
    this.tj = !0
}
nb.prototype.stopPropagation = function() {
    this.j = !0
};
nb.prototype.preventDefault = function() {
    this.tj = !1
};
var ob = Oa("Opera"),
    u = Oa("Trident") || Oa("MSIE"),
    pb = Oa("Edge"),
    qb = Oa("Gecko") && !(-1 != La.toLowerCase().indexOf("webkit") && !Oa("Edge")) && !(Oa("Trident") || Oa("MSIE")) && !Oa("Edge"),
    rb = -1 != La.toLowerCase().indexOf("webkit") && !Oa("Edge"),
    sb = rb && Oa("Mobile"),
    tb = Oa("Macintosh"),
    ub = Oa("Android"),
    vb = Oa("iPhone") && !Oa("iPod") && !Oa("iPad"),
    wb = Oa("iPad");

function xb() {
    var a = h.document;
    return a ? a.documentMode : void 0
}
var yb;
a: {
    var zb = "",
        Ab = function() {
            var a = La;
            if (qb) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (pb) return /Edge\/([\d\.]+)/.exec(a);
            if (u) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (rb) return /WebKit\/(\S+)/.exec(a);
            if (ob) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();Ab && (zb = Ab ? Ab[1] : "");
    if (u) {
        var Bb = xb();
        if (null != Bb && Bb > parseFloat(zb)) {
            yb = String(Bb);
            break a
        }
    }
    yb = zb
}
var Cb = {};

function Db(a) {
    var b;
    if (!(b = Cb[a])) {
        b = 0;
        for (var c = ra(String(yb)).split("."), d = ra(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var k = c[f] || "",
                l = d[f] || "",
                p = RegExp("(\\d*)(\\D*)", "g"),
                n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = p.exec(k) || ["", "", ""],
                    v = n.exec(l) || ["", "", ""];
                if (0 == r[0].length && 0 == v[0].length) break;
                b = Fa(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == v[1].length ? 0 : parseInt(v[1], 10)) || Fa(0 == r[2].length, 0 == v[2].length) || Fa(r[2], v[2])
            } while (0 == b)
        }
        b = Cb[a] = 0 <= b
    }
    return b
}
var Eb = h.document,
    Fb = Eb && u ? xb() || ("CSS1Compat" == Eb.compatMode ? parseInt(yb, 10) : 5) : void 0;
var Gb = !u || 9 <= Number(Fb),
    Hb = !u || 9 <= Number(Fb),
    Ib = u && !Db("9");
!rb || Db("528");
qb && Db("1.9b") || u && Db("8") || ob && Db("9.5") || rb && Db("528");
qb && !Db("8") || u && Db("9");
var Jb = "ontouchstart" in h || !!(h.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!h.navigator || !h.navigator.msMaxTouchPoints);

function Kb(a) {
    Kb[" "](a);
    return a
}
Kb[" "] = aa;

function Lb(a, b) {
    nb.call(this, a ? a.type : "");
    this.s = this.i = this.target = null;
    this.B = this.g = this.clientY = this.clientX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.G = !1;
    this.h = null;
    a && this.C(a, b)
}
t(Lb, nb);
var Mb = [1, 4, 2];
Lb.prototype.C = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.i = b;
    var e = a.relatedTarget;
    if (e) {
        if (qb) {
            var f;
            a: {
                try {
                    Kb(e.nodeName);
                    f = !0;
                    break a
                } catch (k) {}
                f = !1
            }
            f || (e = null)
        }
    } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.s = e;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !==
        d.clientY ? d.clientY : d.pageY);
    this.g = a.keyCode || 0;
    this.B = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.G = tb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.h = a;
    a.defaultPrevented && this.preventDefault()
};

function Nb(a) {
    return Gb ? 0 == a.h.button : "click" == a.type ? !0 : !!(a.h.button & Mb[0])
}
Lb.prototype.stopPropagation = function() {
    Lb.w.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
};
Lb.prototype.preventDefault = function() {
    Lb.w.preventDefault.call(this);
    var a = this.h;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Ib) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Ob = "closure_lm_" + (1E6 * Math.random() | 0),
    Pb = {},
    Qb = 0;

function Rb(a, b, c, d, e) {
    if (da(b)) {
        for (var f = 0; f < b.length; f++) Rb(a, b[f], c, d, e);
        return null
    }
    c = Sb(c);
    if (a && a[fb]) a = a.aa(b, c, d, e);
    else {
        if (!b) throw Error("Invalid event type");
        var f = !!d,
            k = Tb(a);
        k || (a[Ob] = k = new jb(a));
        c = k.add(b, c, !1, d, e);
        if (!c.g) {
            d = Ub();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, f);
            else if (a.attachEvent) a.attachEvent(Vb(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Qb++
        }
        a = c
    }
    return a
}

function Ub() {
    var a = Wb,
        b = Hb ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function Xb(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) Xb(a, b[f], c, d, e);
    else c = Sb(c), a && a[fb] ? a.Rb(b, c, d, e) : a && (a = Tb(a)) && (b = mb(a, b, c, !!d, e)) && Yb(b)
}

function Yb(a) {
    if (!q(a) && a && !a.Ud) {
        var b = a.src;
        if (b && b[fb]) lb(b.Oc, a);
        else {
            var c = a.type,
                d = a.g;
            b.removeEventListener ? b.removeEventListener(c, d, a.Se) : b.detachEvent && b.detachEvent(Vb(c), d);
            Qb--;
            (c = Tb(b)) ? (lb(c, a), 0 == c.h && (c.src = null, b[Ob] = null)) : ib(a)
        }
    }
}

function Vb(a) {
    return a in Pb ? Pb[a] : Pb[a] = "on" + a
}

function Zb(a, b, c, d) {
    var e = !0;
    if (a = Tb(a))
        if (b = a.g[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Se == c && !f.Ud && (f = $b(f, d), e = e && !1 !== f)
            }
        return e
}

function $b(a, b) {
    var c = a.listener,
        d = a.pf || a.src;
    a.Re && Yb(a);
    return c.call(d, b)
}

function Wb(a, b) {
    if (a.Ud) return !0;
    if (!Hb) {
        var c;
        if (!(c = b)) a: {
            c = ["window", "event"];
            for (var d = h, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else {
                    c = null;
                    break a
                }
            c = d
        }
        e = c;
        c = new Lb(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (p) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = c.i; f; f = f.parentNode) e.push(f);
            for (var f = a.type, k = e.length - 1; !c.j && 0 <= k; k--) {
                c.i = e[k];
                var l = Zb(e[k], f, !0, c),
                    d = d && l
            }
            for (k = 0; !c.j && k < e.length; k++) c.i = e[k],
            l = Zb(e[k],
                f, !1, c),
            d = d && l
        }
        return d
    }
    return $b(a, new Lb(b, this))
}

function Tb(a) {
    a = a[Ob];
    return a instanceof jb ? a : null
}
var ac = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Sb(a) {
    if (fa(a)) return a;
    a[ac] || (a[ac] = function(b) {
        return a.handleEvent(b)
    });
    return a[ac]
};

function bc() {
    ab.call(this);
    this.Oc = new jb(this);
    this.Ad = this;
    this.ec = null
}
t(bc, ab);
bc.prototype[fb] = !0;
g = bc.prototype;
g.jf = function() {
    return this.ec
};
g.Cf = function(a) {
    this.ec = a
};
g.removeEventListener = function(a, b, c, d) {
    Xb(this, a, b, c, d)
};

function cc(a, b) {
    var c, d = a.jf();
    if (d)
        for (c = []; d; d = d.jf()) c.push(d);
    var d = a.Ad,
        e = b,
        f = e.type || e;
    if (m(e)) e = new nb(e, d);
    else if (e instanceof nb) e.target = e.target || d;
    else {
        var k = e,
            e = new nb(f, d);
        Ka(e, k)
    }
    var k = !0,
        l;
    if (c)
        for (var p = c.length - 1; !e.j && 0 <= p; p--) l = e.i = c[p], k = dc(l, f, !0, e) && k;
    e.j || (l = e.i = d, k = dc(l, f, !0, e) && k, e.j || (k = dc(l, f, !1, e) && k));
    if (c)
        for (p = 0; !e.j && p < c.length; p++) l = e.i = c[p], k = dc(l, f, !1, e) && k;
    return k
}
g.Ba = function() {
    bc.w.Ba.call(this);
    if (this.Oc) {
        var a = this.Oc,
            b = 0,
            c;
        for (c in a.g) {
            for (var d = a.g[c], e = 0; e < d.length; e++) ++b, ib(d[e]);
            delete a.g[c];
            a.h--
        }
    }
    this.ec = null
};
g.aa = function(a, b, c, d) {
    return this.Oc.add(String(a), b, !1, c, d)
};
g.Rb = function(a, b, c, d) {
    var e;
    e = this.Oc;
    a = String(a).toString();
    if (a in e.g) {
        var f = e.g[a];
        b = kb(f, b, c, d); - 1 < b ? (ib(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
    } else e = !1;
    return e
};

function dc(a, b, c, d) {
    b = a.Oc.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var k = b[f];
        if (k && !k.Ud && k.Se == c) {
            var l = k.listener,
                p = k.pf || k.src;
            k.Re && lb(a.Oc, k);
            e = !1 !== l.call(p, d) && e
        }
    }
    return e && 0 != d.tj
};

function ec(a, b, c) {
    if (fa(a)) c && (a = ma(a, c));
    else if (a && "function" == typeof a.handleEvent) a = ma(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0)
};

function fc() {
    this.g = gc
}
fc.prototype.nd = !0;
fc.prototype.Pc = function() {
    return ""
};
fc.prototype.toString = function() {
    return "Const{}"
};

function hc(a) {
    return a instanceof fc && a.constructor === fc && a.g === gc ? "" : "type_error:Const"
}
var gc = {};

function ic() {
    this.g = "";
    this.h = jc
}
ic.prototype.nd = !0;
ic.prototype.Pc = function() {
    return this.g
};
ic.prototype.Cg = !0;
ic.prototype.Hd = function() {
    return 1
};
var kc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
    jc = {};

function lc(a) {
    var b = new ic;
    b.g = a;
    return b
}
lc("about:blank");

function nc() {
    this.g = "";
    this.h = oc
}
nc.prototype.nd = !0;
var oc = {};
nc.prototype.Pc = function() {
    return this.g
};

function pc(a) {
    var b = new nc;
    b.g = a;
    return b
}
var qc = pc("");

function rc(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        if (null != d) {
            if (d instanceof fc) d = hc(d);
            else if (sc.test(d)) {
                for (var e = !0, f = !0, k = 0; k < d.length; k++) {
                    var l = d.charAt(k);
                    "'" == l && f ? e = !e : '"' == l && e && (f = !f)
                }
                e && f || (d = "zClosurez")
            } else d = "zClosurez";
            b += c + ":" + d + ";"
        }
    }
    return b ? pc(b) : qc
}
var sc = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;

function tc() {
    this.g = uc
}
tc.prototype.nd = !0;
tc.prototype.Pc = function() {
    return ""
};
tc.prototype.Cg = !0;
tc.prototype.Hd = function() {
    return 1
};
var uc = {};
var vc = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};

function wc() {
    this.g = "";
    this.i = xc;
    this.h = null
}
wc.prototype.Cg = !0;
wc.prototype.Hd = function() {
    return this.h
};
wc.prototype.nd = !0;
wc.prototype.Pc = function() {
    return this.g
};

function yc(a) {
    if (a instanceof wc && a.constructor === wc && a.i === xc) return a.g;
    ca(a);
    return "type_error:SafeHtml"
}

function zc(a) {
    if (a instanceof wc) return a;
    var b = null;
    a.Cg && (b = a.Hd());
    a = ta(a.nd ? a.Pc() : String(a));
    return Ac(a, b)
}
var Bc = /^[a-zA-Z0-9-]+$/,
    Cc = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    Dc = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function Ec(a, b, c) {
    if (!Bc.test(a)) throw Error("Invalid tag name <" + a + ">.");
    if (a.toUpperCase() in Dc) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    var d = null,
        e, f = "";
    if (b)
        for (e in b) {
            if (!Bc.test(e)) throw Error('Invalid attribute name "' + e + '".');
            var k = b[e];
            if (null != k) {
                var l, p = a;
                l = e;
                if (k instanceof fc) k = hc(k);
                else if ("style" == l.toLowerCase()) {
                    if (!ga(k)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k + " given: " + k);
                    k instanceof nc || (k =
                        rc(k));
                    k instanceof nc && k.constructor === nc && k.h === oc ? k = k.g : (ca(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + k + '" given.');
                    if (l.toLowerCase() in Cc)
                        if (k instanceof tc) k instanceof tc && k.constructor === tc && k.g === uc ? k = "" : (ca(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof ic) k instanceof ic && k.constructor === ic && k.h === jc ? k = k.g : (ca(k), k = "type_error:SafeUrl");
                    else if (m(k)) k instanceof ic || (k = k.nd ? k.Pc() : String(k), kc.test(k) ||
                        (k = "about:invalid#zClosurez"), k = lc(k)), k = k.Pc();
                    else throw Error('Attribute "' + l + '" on tag "' + p + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + k + '" given.');
                }
                k.nd && (k = k.Pc());
                l = l + '="' + ta(String(k)) + '"';
                f += " " + l
            }
        }
    e = "<" + a + f;
    null != c ? da(c) || (c = [c]) : c = [];
    !0 === vc[a.toLowerCase()] ? e += ">" : (d = Fc(c), e += ">" + yc(d) + "</" + a + ">", d = d.Hd());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
    return Ac(e, d)
}

function Fc(a) {
    function b(a) {
        da(a) ? Qa(a, b) : (a = zc(a), d += yc(a), a = a.Hd(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        d = "";
    Qa(arguments, b);
    return Ac(d, c)
}
var xc = {};

function Ac(a, b) {
    var c = new wc;
    c.g = a;
    c.h = b;
    return c
}
Ac("<!DOCTYPE html>", 0);
var Gc = Ac("", 0),
    Hc = Ac("<br>", 0);

function Ic(a, b) {
    this.width = a;
    this.height = b
}
g = Ic.prototype;
g.clone = function() {
    return new Ic(this.width, this.height)
};
g.qm = function() {
    return this.width * this.height
};
g.jj = function() {
    return !this.qm()
};
g.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function(a, b) {
    var c = q(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};

function Kc(a, b) {
    a.innerHTML = yc(b)
};
var Lc = !u || 9 <= Number(Fb),
    Mc = !qb && !u || u && 9 <= Number(Fb) || qb && Db("1.9.1"),
    Nc = u && !Db("9");

function Oc(a, b, c) {
    return Math.min(Math.max(a, b), c)
}

function Pc(a) {
    a %= 360;
    return 0 > 360 * a ? a + 360 : a
}

function Qc(a) {
    return a * Math.PI / 180
};

function w(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
g = w.prototype;
g.clone = function() {
    return new w(this.x, this.y)
};

function Rc(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function Sc(a, b) {
    var c = a.x - b.x,
        d = a.y - b.y;
    return Math.sqrt(c * c + d * d)
}

function Tc(a, b) {
    return new w(a.x - b.x, a.y - b.y)
}
g.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), q(b) && (this.y += b));
    return this
};
g.scale = function(a, b) {
    var c = q(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};

function Uc(a) {
    return a ? new Vc(Wc(a)) : pa || (pa = new Vc)
}

function Xc(a, b) {
    var c = document,
        c = b || c;
    if (c.querySelectorAll && c.querySelector) return c.querySelectorAll("TBODY" + (a ? "." + a : ""));
    if (a && c.getElementsByClassName) {
        for (var c = c.getElementsByClassName(a), d = {}, e = 0, f = 0, k; k = c[f]; f++) "TBODY" == k.nodeName && (d[e++] = k);
        d.length = e;
        return d
    }
    c = c.getElementsByTagName("TBODY");
    if (a) {
        d = {};
        for (f = e = 0; k = c[f]; f++) {
            var l = k.className;
            "function" == typeof l.split && Ua(l.split(/\s+/), a) && (d[e++] = k)
        }
        d.length = e;
        return d
    }
    return c
}

function Yc(a, b) {
    Ia(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Zc.hasOwnProperty(d) ? a.setAttribute(Zc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var Zc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function $c() {
    var a = window.document,
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Ic(a.clientWidth, a.clientHeight)
}

function ad(a) {
    return a.scrollingElement ? a.scrollingElement : rb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function x(a, b, c) {
    return bd(document, arguments)
}

function bd(a, b) {
    var c = b[0],
        d = b[1];
    if (!Lc && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', ta(d.name), '"');
        if (d.type) {
            c.push(' type="', ta(d.type), '"');
            var e = {};
            Ka(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (m(d) ? c.className = d : da(d) ? c.className = d.join(" ") : Yc(c, d));
    2 < b.length && cd(a, c, b);
    return c
}

function cd(a, b, c) {
    function d(c) {
        c && b.appendChild(m(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ea(f) || ga(f) && 0 < f.nodeType ? d(f) : Qa(dd(f) ? Xa(f) : f, d)
    }
}

function ed(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function fd(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function y(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function gd(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function Wc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function hd(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else ed(a), a.appendChild(Wc(a).createTextNode(String(b)))
}
var id = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    jd = {
        IMG: " ",
        BR: "\n"
    };

function kd(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}

function ld(a) {
    a = a.tabIndex;
    return q(a) && 0 <= a && 32768 > a
}

function md(a) {
    if (Nc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        nd(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    Nc || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}

function od(a) {
    var b = [];
    nd(a, b, !1);
    return b.join("")
}

function nd(a, b, c) {
    if (!(a.nodeName in id))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in jd) b.push(jd[a.nodeName]);
    else
        for (a = a.firstChild; a;) nd(a, b, c), a = a.nextSibling
}

function dd(a) {
    if (a && "number" == typeof a.length) {
        if (ga(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (fa(a)) return "function" == typeof a.item
    }
    return !1
}

function Vc(a) {
    this.g = a || h.document || document
}
g = Vc.prototype;
g.F = function(a) {
    return m(a) ? this.g.getElementById(a) : a
};
g.Jb = function(a, b, c) {
    return bd(this.g, arguments)
};
g.appendChild = function(a, b) {
    a.appendChild(b)
};
g.sj = ed;
g.hd = function(a) {
    return Mc && void 0 != a.children ? a.children : Ra(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
g.contains = gd;
// Copyright 2011 Google Inc.  Apache License 2.0
var pd = {},
    qd, rd;

function sd(a, b) {
    this.u = a;
    this.type = b;
    a.A.O && (this.Gb = a.A.O[b], this.je = a.A.O[td[b]], this.Ag = !this.Gb)
}
g = sd.prototype;
g.N = null;
g.zc = null;
g.qc = null;
g.tb = 0;
g.za = 0;
g.Uc = !1;
g.Gb = null;
g.je = null;
g.Ag = null;
g.Te = function(a) {
    console.log("non-rendered connecting_: " + a);
    var b = this,
        c = b.u,
        d = a.u;
    a.N && ud(a);
    if (b.N) {
        var e = z(b),
            f = b.qc;
        b.qc = null;
        if (e.s) f = vd(e), e.D(), e = null;
        else if (1 == b.type) {
            if (!e.K) throw "Orphan block does not have an output connection.";
            var k = wd(d, e);
            k && (e.K.connect(k), e = null)
        } else if (3 == b.type) {
            if (!e.T) throw "Orphan block does not have a previous connection.";
            for (k = d; k.g;)
                if (k.g.N) k = xd(k);
                else {
                    yd(e.T, k.g) && (k.g.connect(e.T), e = null);
                    break
                }
        }
        if (e && (ud(b), zd)) {
            var l = Ad;
            setTimeout(function() {
                e.A &&
                    !e.getParent() && (A(l), e.K ? Bd(e.K, b) : e.T && Bd(e.T, b), A(!1))
            }, Cd)
        }
        b.qc = f
    }
    var p;
    0 == B && (p = new Dd(d));
    Ed(b, a);
    d.Le(c);
    p && (Fd(p), E(p))
};
g.D = function() {
    if (this.N) throw "Disconnect connection before disposing of it.";
    this.Uc && Gd(this.Gb, this);
    Hd == this && (Hd = null);
    Id == this && (Id = null);
    this.je = this.Gb = null
};

function Jd(a) {
    return 1 == a.type || 3 == a.type
}

function Kd(a, b) {
    if (!b) return 3;
    if (Jd(a)) var c = a.u,
        d = b.u;
    else d = a.u, c = b.u;
    return c && c == d ? 1 : b.type != td[a.type] ? 2 : c && d && c.A !== d.A ? 5 : yd(a, b) ? c.s && !d.s ? 6 : 0 : 4
}
g.tf = function(a) {
    var b = Kd(this, a);
    if (0 != b && b != sd.h) return !1;
    if (2 == a.type || 4 == a.type)
        if (a.N || this.N) return !1;
    return 1 == a.type && a.N && !Ld(z(a)) && !z(a).s || 4 == this.type && a.N && !this.u.g || -1 != Md.indexOf(a) ? !1 : !0
};
g.connect = function(a) {
    console.log("non-rendered connecting: " + a);
    if (this.N != a) {
        switch (Kd(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed.";
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!";
        }
        console.log(a instanceof Nd);
        console.log(a instanceof sd);
        Jd(this) ? (console.log("sup"), this.Te(a)) : (console.log("inf"), a.Te(this))
    }
};

function Ed(a, b) {
    a.N = b;
    b.N = a
}

function Od(a, b) {
    for (var c = !1, d = 0; d < a.h.length; d++) {
        var e = a.h[d].I;
        if (e && 1 == e.type && yd(b.K, e)) {
            if (c) return null;
            c = e
        }
    }
    return c
}

function wd(a, b) {
    for (var c = a, d; d = Od(c, b);)
        if (c = z(d), !c || c.s) return d;
    return null
}

function ud(a) {
    var b = a.N,
        c, d;
    Jd(a) ? (c = a.u, d = b.u, b = a) : (c = b.u, d = a.u);
    a.ng(c, d);
    b.Rg()
}
g.ng = function(a, b) {
    var c;
    0 == B && (c = new Dd(b));
    this.N = this.N.N = null;
    b.Le(null);
    c && (Fd(c), E(c))
};
g.Rg = function() {
    var a = this.u,
        b = this.qc;
    if (a.A && b && zd)
        if (a = Pd(b, a.A), a.K) this.connect(a.K);
        else if (a.T) this.connect(a.T);
    else throw "Child block does not have output or previous statement.";
};

function z(a) {
    return a.N ? a.N.u : null
}

function yd(a, b) {
    if (!a.zc || !b.zc) return !0;
    for (var c = 0; c < a.zc.length; c++)
        if (-1 != b.zc.indexOf(a.zc[c])) return !0;
    return !1
}

function Qd(a, b) {
    b ? (da(b) || (b = [b]), a.zc = b, a.N && !yd(a, a.N) && (Rd(Jd(a) ? z(a) : a.u), Sd(a.u))) : a.zc = null
};
// Copyright 2016 Google Inc.  Apache License 2.0
function Nd(a, b) {
    Nd.w.constructor.call(this, a, b);
    this.g = new w(0, 0);
    console.log("rendered connector")
}
t(Nd, sd);

function Td(a, b) {
    var c = a.tb - b.tb,
        d = a.za - b.za;
    return Math.sqrt(c * c + d * d)
}

function Bd(a, b) {
    if (0 == Ud) {
        var c = Vd(a.u);
        if (!c.G) {
            var d = !1;
            if (!Ld(c)) {
                c = Vd(b.u);
                if (!Ld(c)) return;
                b = a;
                d = !0
            }
            c.v.parentNode.appendChild(c.v);
            var e = b.tb + Wd - a.tb,
                f = b.za + Wd - a.za;
            d && (f = -f);
            c.o && (e = -e);
            c.moveBy(e, f)
        }
    }
}
g = Nd.prototype;
g.moveTo = function(a, b) {
    this.Uc && Gd(this.Gb, this);
    this.tb = a;
    this.za = b;
    this.Ag || Xd(this.Gb, this)
};
g.moveBy = function(a, b) {
    this.moveTo(this.tb + a, this.za + b)
};

function Yd(a, b) {
    a.moveTo(b.x + a.g.x, b.y + a.g.y)
}

function Zd(a, b, c) {
    a.g.x = b;
    a.g.y = c
}

function ae(a) {
    var b = a.N.tb - a.tb,
        c = a.N.za - a.za;
    if (0 != b || 0 != c) {
        a = z(a);
        var d = a.v;
        if (!d) throw "block is not rendered.";
        d = be(d);
        a.v.setAttribute("transform", "translate(" + (d.x - b) + "," + (d.y - c) + ")");
        ce(a, -b, -c)
    }
}
g.gj = function() {
    var a;
    a = 1 == this.type || 2 == this.type ? "m 0,0 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = this.u.ya();
    sd.g = F("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.tb - b.x) + "," + (this.za - b.y) + ")" + (this.u.o ? " scale(-1 1)" : "")
    }, this.u.v)
};

function de(a) {
    ee(a, !1);
    var b = [];
    if (1 != a.type && 3 != a.type) return b;
    if (a = z(a)) {
        var c;
        a.j ? (c = [], a.K && c.push(a.K), a.g && c.push(a.g), a.T && c.push(a.T)) : c = a.mc(!0);
        for (var d = 0; d < c.length; d++) b.push.apply(b, de(c[d]));
        b.length || (b[0] = a)
    }
    return b
}

function fe() {
    y(sd.g);
    delete sd.g
}

function ee(a, b) {
    (a.Ag = b) && a.Uc ? Gd(a.Gb, a) : b || a.Uc || Xd(a.Gb, a)
}
g.tf = function(a, b) {
    return Td(this, a) > b ? !1 : Nd.w.tf.call(this, a)
};
g.ng = function(a, b) {
    Nd.w.ng.call(this, a, b);
    a.P && a.U();
    b.P && (ge(b), b.U())
};
g.Rg = function() {
    var a = this.u,
        b = this.qc;
    if (a.A && b && zd) {
        Nd.w.Rg.call(this);
        b = z(this);
        if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.pc();
        b.U(!1);
        a.P && a.U()
    }
};
g.Te = function(a) {
    console.log("rendered connect");
    Nd.w.Te.call(this, a);
    var b = this.u;
    a = a.u;
    b.P && ge(b);
    a.P && ge(a);
    console.log("connecting: " + b + " " + a);
    b.P && a.P && (3 == this.type || 4 == this.type ? (a.U(), console.log("childBlock")) : (b.U(), console.log("parentBlock")))
};

function he(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = he.prototype;
g.Xb = function() {
    return this.right - this.left
};
g.jd = function() {
    return this.bottom - this.top
};
g.clone = function() {
    return new he(this.top, this.right, this.bottom, this.left)
};
g.contains = function(a) {
    return this && a ? a instanceof he ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, q(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function(a, b) {
    var c = q(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};

function ie(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = ie.prototype;
g.clone = function() {
    return new ie(this.left, this.top, this.width, this.height)
};
g.contains = function(a) {
    return a instanceof ie ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
g.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.top += a.y) : (this.left += a, q(b) && (this.top += b));
    return this
};
g.scale = function(a, b) {
    var c = q(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
var je = {};

function ke(a, b) {
    var c = Wc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function le(a, b) {
    return ke(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function me() {
    var a = document,
        b = a.body,
        a = a.documentElement;
    return new w(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function ne(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    u && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function oe(a) {
    var b = Wc(a),
        c = new w(0, 0),
        d;
    d = b ? Wc(b) : document;
    d = !u || 9 <= Number(Fb) || "CSS1Compat" == Uc(d).g.compatMode ? d.documentElement : d.body;
    if (a == d) return c;
    a = ne(a);
    d = Uc(b).g;
    b = ad(d);
    d = d.parentWindow || d.defaultView;
    b = u && Db("10") && d.pageYOffset != b.scrollTop ? new w(b.scrollLeft, b.scrollTop) : new w(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function pe(a) {
    var b = qe;
    if ("none" != le(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function qe(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = rb && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = ne(a), new Ic(a.right - a.left, a.bottom - a.top)) : new Ic(b, c)
}

function re(a, b) {
    a.style.display = b ? "" : "none"
}
var se = qb ? "MozUserSelect" : rb || pb ? "WebkitUserSelect" : null;

function te(a, b) {
    var c = b ? null : a.getElementsByTagName("*");
    if (se) {
        var d = "none";
        a.style && (a.style[se] = d);
        if (c)
            for (var e = 0, f; f = c[e]; e++) f.style && (f.style[se] = d)
    } else if (u || ob)
        if (d = "on", a.setAttribute("unselectable", d), c)
            for (e = 0; f = c[e]; e++) f.setAttribute("unselectable", d)
}
var ue = {
    thin: 2,
    medium: 4,
    thick: 6
};

function ve(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
        d;
    if (c in ue) d = ue[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
};

function we(a) {
    ab.call(this);
    this.h = a;
    this.g = {}
}
t(we, ab);
var xe = [];
we.prototype.aa = function(a, b, c, d) {
    da(b) || (b && (xe[0] = b.toString()), b = xe);
    for (var e = 0; e < b.length; e++) {
        var f = Rb(a, b[e], c || this.handleEvent, d || !1, this.h || this);
        if (!f) break;
        this.g[f.aj] = f
    }
    return this
};
we.prototype.Rb = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) this.Rb(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.h || this, c = Sb(c), d = !!d, b = a && a[fb] ? mb(a.Oc, String(b), c, d, e) : a ? (a = Tb(a)) ? mb(a, b, c, d, e) : null : null, b && (Yb(b), delete this.g[b.aj]);
    return this
};

function ye(a) {
    Ia(a.g, function(a, c) {
        this.g.hasOwnProperty(c) && Yb(a)
    }, a);
    a.g = {}
}
we.prototype.Ba = function() {
    we.w.Ba.call(this);
    ye(this)
};
we.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function ze() {}
ba(ze);
ze.prototype.g = 0;

function Ae(a) {
    bc.call(this);
    this.i = a || Uc();
    this.Ua = Be;
    this.Fa = null;
    this.qa = !1;
    this.g = null;
    this.Qc = void 0;
    this.G = this.j = this.B = this.Ta = null
}
t(Ae, bc);
Ae.prototype.fe = ze.nc();
var Be = null;

function Ce(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}

function De(a) {
    return a.Fa || (a.Fa = ":" + (a.fe.g++).toString(36))
}
g = Ae.prototype;
g.F = function() {
    return this.g
};

function Ee(a) {
    a.Qc || (a.Qc = new we(a));
    return a.Qc
}

function Fe(a, b) {
    if (a == b) throw Error("Unable to set parent component");
    if (b && a.B && a.Fa && Ge(a.B, a.Fa) && a.B != b) throw Error("Unable to set parent component");
    a.B = b;
    Ae.w.Cf.call(a, b)
}
g.getParent = function() {
    return this.B
};
g.Cf = function(a) {
    if (this.B && this.B != a) throw Error("Method not supported");
    Ae.w.Cf.call(this, a)
};
g.Jd = function() {
    this.g = this.i.g.createElement("DIV")
};
g.U = function(a) {
    He(this, a)
};

function He(a, b, c) {
    if (a.qa) throw Error("Component already rendered");
    a.g || a.Jd();
    b ? b.insertBefore(a.g, c || null) : a.i.g.body.appendChild(a.g);
    a.B && !a.B.qa || a.Pa()
}
g.Pa = function() {
    this.qa = !0;
    Ie(this, function(a) {
        !a.qa && a.F() && a.Pa()
    })
};
g.Hb = function() {
    Ie(this, function(a) {
        a.qa && a.Hb()
    });
    this.Qc && ye(this.Qc);
    this.qa = !1
};
g.Ba = function() {
    this.qa && this.Hb();
    this.Qc && (this.Qc.D(), delete this.Qc);
    Ie(this, function(a) {
        a.D()
    });
    this.g && y(this.g);
    this.B = this.Ta = this.g = this.G = this.j = null;
    Ae.w.Ba.call(this)
};
g.ge = function(a, b) {
    this.Dd(a, Je(this), b)
};
g.Dd = function(a, b, c) {
    if (a.qa && (c || !this.qa)) throw Error("Component already rendered");
    if (0 > b || b > Je(this)) throw Error("Child component index out of bounds");
    this.G && this.j || (this.G = {}, this.j = []);
    if (a.getParent() == this) {
        var d = De(a);
        this.G[d] = a;
        Va(this.j, a)
    } else {
        var d = this.G,
            e = De(a);
        if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
        d[e] = a
    }
    Fe(a, this);
    Za(this.j, b, 0, a);
    a.qa && this.qa && a.getParent() == this ? (c = this.mf(), b = c.childNodes[b] || null, b != a.F() && c.insertBefore(a.F(), b)) :
        c ? (this.g || this.Jd(), b = Ke(this, b + 1), He(a, this.mf(), b ? b.g : null)) : this.qa && !a.qa && a.g && a.g.parentNode && 1 == a.g.parentNode.nodeType && a.Pa()
};
g.mf = function() {
    return this.g
};

function Le(a) {
    null == a.Ua && (a.Ua = "rtl" == le(a.qa ? a.g : a.i.g.body, "direction"));
    return a.Ua
}
g.Kd = function(a) {
    if (this.qa) throw Error("Component already rendered");
    this.Ua = a
};

function Me(a) {
    return !!a.j && 0 != a.j.length
}

function Je(a) {
    return a.j ? a.j.length : 0
}

function Ge(a, b) {
    var c;
    a.G && b ? (c = a.G, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
    return c
}

function Ke(a, b) {
    return a.j ? a.j[b] || null : null
}

function Ie(a, b, c) {
    a.j && Qa(a.j, b, c)
}

function Ne(a, b) {
    return a.j && b ? Pa(a.j, b) : -1
}
g.removeChild = function(a, b) {
    if (a) {
        var c = m(a) ? a : De(a);
        a = Ge(this, c);
        if (c && a) {
            var d = this.G;
            c in d && delete d[c];
            Va(this.j, a);
            b && (a.Hb(), a.g && y(a.g));
            Fe(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
g.sj = function(a) {
    for (var b = []; Me(this);) b.push(this.removeChild(Ke(this, 0), a));
    return b
};

function Oe(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return m(a) && a.match(/\S+/g) || []
}

function Pe(a, b) {
    return a.classList ? a.classList.contains(b) : Ua(Oe(a), b)
}

function Qe(a, b) {
    a.classList ? a.classList.add(b) : Pe(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function Re(a, b) {
    if (a.classList) Qa(b, function(b) {
        Qe(a, b)
    });
    else {
        var c = {};
        Qa(Oe(a), function(a) {
            c[a] = !0
        });
        Qa(b, function(a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c) a.className += 0 < a.className.length ? " " + d : d
    }
}

function Se(a, b) {
    a.classList ? a.classList.remove(b) : Pe(a, b) && (a.className = Ra(Oe(a), function(a) {
        return a != b
    }).join(" "))
}

function Te(a, b) {
    a.classList ? Qa(b, function(b) {
        Se(a, b)
    }) : a.className = Ra(Oe(a), function(a) {
        return !Ua(b, a)
    }).join(" ")
};

function Ue(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!fa(b)) throw Error("Invalid decorator function " + b);
}
var Ve = {};
var We;

function Xe(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function Ye(a, b, c) {
    da(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c ? (We || (We = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = We, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}

function Ze(a) {
    a.removeAttribute("aria-activedescendant")
}

function $e(a, b) {
    var c = a.getAttribute("aria-" + b);
    return null == c || void 0 == c ? "" : String(c)
};

function af() {}
var bf;
ba(af);
var cf = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
g = af.prototype;
g.dj = function() {};
g.nf = function(a) {
    return a.i.Jb("DIV", df(this, a).join(" "), a.vb)
};
g.Nd = function(a) {
    return a
};

function ef(a, b, c) {
    if (a = a.F ? a.F() : a) {
        var d = [b];
        u && !Db("7") && (d = ff(Oe(a), b), d.push(b));
        (c ? Re : Te)(a, d)
    }
}

function gf(a, b, c) {
    if (a = c || a.dj()) c = b.getAttribute("role") || null, a != c && Xe(b, a)
}

function hf(a, b) {
    a.$() || Ye(b, "hidden", !a.$());
    a.isEnabled() || jf(b, 1, !a.isEnabled());
    a.La & 8 && jf(b, 8, !!(a.va & 8));
    a.La & 16 && jf(b, 16, !!(a.va & 16));
    a.La & 64 && jf(b, 64, !!(a.va & 64))
}

function kf(a, b) {
    var c;
    if (a.La & 32 && (c = a.F())) {
        if (!b && a.va & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.va & 32 && a.ej()
        }(kd(c) && ld(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
}
g.ga = function(a, b) {
    re(a, b);
    a && Ye(a, "hidden", !b)
};

function jf(a, b, c) {
    bf || (bf = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = bf[b];
    var d = a.getAttribute("role") || null;
    d && (d = cf[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && Ye(a, b, c)
}
g.se = function(a, b) {
    var c = this.Nd(a);
    if (c && (ed(c), b))
        if (m(b)) hd(c, b);
        else {
            var d = function(a) {
                if (a) {
                    var b = Wc(c);
                    c.appendChild(m(a) ? b.createTextNode(a) : a)
                }
            };
            da(b) ? Qa(b, d) : !ea(b) || "nodeType" in b ? d(b) : Qa(Xa(b), d)
        }
};
g.xa = function() {
    return "goog-control"
};

function df(a, b) {
    var c = a.xa(),
        d = [c],
        e = a.xa();
    e != c && d.push(e);
    c = b.va;
    for (e = []; c;) {
        var f = c & -c;
        e.push(a.df(f));
        c &= ~f
    }
    d.push.apply(d, e);
    (c = b.Yi) && d.push.apply(d, c);
    u && !Db("7") && d.push.apply(d, ff(d));
    return d
}

function ff(a, b) {
    var c = [];
    b && (a = Wa(a, [b]));
    Qa([], function(d) {
        !Ta(d, na(Ua, a)) || b && !Ua(d, b) || c.push(d.join("_"))
    });
    return c
}
g.df = function(a) {
    if (!this.g) {
        var b = this.xa();
        b.replace(/\xa0|\s/g, " ");
        this.g = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.g[a]
};

function lf(a, b, c, d, e) {
    if (!(u || pb || rb && Db("525"))) return !0;
    if (tb && e) return mf(a);
    if (e && !d) return !1;
    q(b) && (b = nf(b));
    if (!c && (17 == b || 18 == b || tb && 91 == b)) return !1;
    if ((rb || pb) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (u && d && b == a) return !1;
    switch (a) {
        case 13:
            return !0;
        case 27:
            return !(rb || pb)
    }
    return mf(a)
}

function mf(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (rb || pb) && 0 == a) return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}

function nf(a) {
    if (qb) a = of(a);
    else if (tb && rb) a: switch (a) {
        case 93:
            a = 91;
            break a
    }
    return a
}

function of(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function pf(a, b) {
    bc.call(this);
    a && qf(this, a, b)
}
t(pf, bc);
g = pf.prototype;
g.Id = null;
g.uf = null;
g.Gg = null;
g.vf = null;
g.Nb = -1;
g.Vc = -1;
g.Zf = !1;
var rf = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    sf = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    tf = u || pb || rb && Db("525"),
    uf = tb && qb;
g = pf.prototype;
g.Tm = function(a) {
    if (rb || pb)
        if (17 == this.Nb && !a.ctrlKey || 18 == this.Nb && !a.altKey || tb && 91 == this.Nb && !a.metaKey) this.Vc = this.Nb = -1; - 1 == this.Nb && (a.ctrlKey && 17 != a.g ? this.Nb = 17 : a.altKey && 18 != a.g ? this.Nb = 18 : a.metaKey && 91 != a.g && (this.Nb = 91));
    tf && !lf(a.g, this.Nb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Vc = nf(a.g), uf && (this.Zf = a.altKey))
};
g.Um = function(a) {
    this.Vc = this.Nb = -1;
    this.Zf = a.altKey
};
g.handleEvent = function(a) {
    var b = a.h,
        c, d, e = b.altKey;
    u && "keypress" == a.type ? (c = this.Vc, d = 13 != c && 27 != c ? b.keyCode : 0) : (rb || pb) && "keypress" == a.type ? (c = this.Vc, d = 0 <= b.charCode && 63232 > b.charCode && mf(c) ? b.charCode : 0) : ob && !rb ? (c = this.Vc, d = mf(c) ? b.keyCode : 0) : (c = b.keyCode || this.Vc, d = b.charCode || 0, uf && (e = this.Zf), tb && 63 == d && 224 == c && (c = 191));
    var f = c = nf(c),
        k = b.keyIdentifier;
    c ? 63232 <= c && c in rf ? f = rf[c] : 25 == c && a.shiftKey && (f = 9) : k && k in sf && (f = sf[k]);
    this.Nb = f;
    a = new vf(f, d, 0, b);
    a.altKey = e;
    cc(this, a)
};
g.F = function() {
    return this.Id
};

function qf(a, b, c) {
    a.vf && wf(a);
    a.Id = b;
    a.uf = Rb(a.Id, "keypress", a, c);
    a.Gg = Rb(a.Id, "keydown", a.Tm, c, a);
    a.vf = Rb(a.Id, "keyup", a.Um, c, a)
}

function wf(a) {
    a.uf && (Yb(a.uf), Yb(a.Gg), Yb(a.vf), a.uf = null, a.Gg = null, a.vf = null);
    a.Id = null;
    a.Nb = -1;
    a.Vc = -1
}
g.Ba = function() {
    pf.w.Ba.call(this);
    wf(this)
};

function vf(a, b, c, d) {
    Lb.call(this, d);
    this.type = "key";
    this.g = a;
    this.B = b
}
t(vf, Lb);

function xf(a, b, c) {
    Ae.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ha(b);
            if (d = Ve[d]) break;
            b = b.w ? b.w.constructor : null
        }
        b = d ? fa(d.nc) ? d.nc() : new d : null
    }
    this.h = b;
    this.Af(void 0 !== a ? a : null)
}
t(xf, Ae);
g = xf.prototype;
g.vb = null;
g.va = 0;
g.La = 39;
g.cg = 255;
g.wd = 0;
g.vg = !0;
g.Yi = null;
g.ue = !0;
g.Jd = function() {
    var a = this.h.nf(this);
    this.g = a;
    gf(this.h, a, this.kf());
    te(a, !u && !ob);
    this.$() || this.h.ga(a, !1)
};
g.kf = function() {
    return null
};
g.mf = function() {
    return this.h.Nd(this.F())
};
g.Pa = function() {
    xf.w.Pa.call(this);
    hf(this, this.g);
    var a = this.h;
    if (Le(this)) {
        var b = this.F();
        ef(b, a.xa() + "-rtl", !0)
    }
    this.isEnabled() && kf(this, this.$());
    this.La & -2 && (this.ue && yf(this, !0), this.La & 32 && (a = this.F())) && (b = this.s || (this.s = new pf), qf(b, a), Ee(this).aa(b, "key", this.Mb).aa(a, "focus", this.Lm).aa(a, "blur", this.ej))
};

function yf(a, b) {
    var c = Ee(a),
        d = a.F();
    b ? (c.aa(d, "mouseover", a.ve).aa(d, "mousedown", a.Ec).aa(d, "mouseup", a.Od).aa(d, "mouseout", a.yg), a.te != aa && c.aa(d, "contextmenu", a.te), u && (Db(9) || c.aa(d, "dblclick", a.fj), a.O || (a.O = new zf(a), db(a, na(eb, a.O))))) : (c.Rb(d, "mouseover", a.ve).Rb(d, "mousedown", a.Ec).Rb(d, "mouseup", a.Od).Rb(d, "mouseout", a.yg), a.te != aa && c.Rb(d, "contextmenu", a.te), u && (Db(9) || c.Rb(d, "dblclick", a.fj), eb(a.O), a.O = null))
}
g.Hb = function() {
    xf.w.Hb.call(this);
    this.s && wf(this.s);
    this.$() && this.isEnabled() && kf(this, !1)
};
g.Ba = function() {
    xf.w.Ba.call(this);
    this.s && (this.s.D(), delete this.s);
    delete this.h;
    this.O = this.Yi = this.vb = null
};
g.Af = function(a) {
    this.vb = a
};
g.cf = function() {
    var a = this.vb;
    if (!a) return "";
    a = m(a) ? a : da(a) ? Sa(a, od).join("") : md(a);
    return qa(a)
};
g.Kd = function(a) {
    xf.w.Kd.call(this, a);
    var b = this.F();
    b && ef(b, this.h.xa() + "-rtl", a)
};
g.$ = function() {
    return this.vg
};
g.ga = function(a, b) {
    if (b || this.vg != a && cc(this, a ? "show" : "hide")) {
        var c = this.F();
        c && this.h.ga(c, a);
        this.isEnabled() && kf(this, a);
        this.vg = a;
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return !(this.va & 1)
};
g.Fe = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Af(this, 1, !a) || (a || (Bf(this, !1), this.Kb(!1)), this.$() && kf(this, a), Cf(this, 1, !a, !0))
};
g.Kb = function(a) {
    Af(this, 2, a) && Cf(this, 2, a)
};

function Bf(a, b) {
    Af(a, 4, b) && Cf(a, 4, b)
}
g.Wg = function(a) {
    Af(this, 8, a) && Cf(this, 8, a)
};

function Df(a, b) {
    Af(a, 16, b) && Cf(a, 16, b)
}

function Ef(a, b) {
    Af(a, 64, b) && Cf(a, 64, b)
}

function Cf(a, b, c, d) {
    if (!d && 1 == b) a.Fe(!c);
    else if (a.La & b && c != !!(a.va & b)) {
        var e = a.h;
        if (d = a.F())(e = e.df(b)) && ef(a, e, c), jf(d, b, c);
        a.va = c ? a.va | b : a.va & ~b
    }
}
g.zb = function(a, b) {
    if (this.qa && this.va & a && !b) throw Error("Component already rendered");
    !b && this.va & a && Cf(this, a, !1);
    this.La = b ? this.La | a : this.La & ~a
};

function Ff(a, b) {
    return !!(a.cg & b) && !!(a.La & b)
}

function Af(a, b, c) {
    return !!(a.La & b) && !!(a.va & b) != c && (!(a.wd & b) || cc(a, Ce(b, c))) && !a.L
}
g.ve = function(a) {
    !Gf(a, this.F()) && cc(this, "enter") && this.isEnabled() && Ff(this, 2) && this.Kb(!0)
};
g.yg = function(a) {
    !Gf(a, this.F()) && cc(this, "leave") && (Ff(this, 4) && Bf(this, !1), Ff(this, 2) && this.Kb(!1))
};
g.te = aa;

function Gf(a, b) {
    return !!a.s && gd(b, a.s)
}
g.Ec = function(a) {
    if (this.isEnabled() && (Ff(this, 2) && this.Kb(!0), Nb(a) && !(rb && tb && a.ctrlKey))) {
        Ff(this, 4) && Bf(this, !0);
        var b;
        if (b = this.h) {
            var c;
            b = this.La & 32 && (c = this.F()) ? kd(c) && ld(c) : !1
        }
        b && this.F().focus()
    }!Nb(a) || rb && tb && a.ctrlKey || a.preventDefault()
};
g.Od = function(a) {
    this.isEnabled() && (Ff(this, 2) && this.Kb(!0), this.va & 4 && this.Yc(a) && Ff(this, 4) && Bf(this, !1))
};
g.fj = function(a) {
    this.isEnabled() && this.Yc(a)
};
g.Yc = function(a) {
    Ff(this, 16) && Df(this, !(this.va & 16));
    Ff(this, 8) && this.Wg(!0);
    Ff(this, 64) && Ef(this, !(this.va & 64));
    var b = new nb("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.G = a.G);
    return cc(this, b)
};
g.Lm = function() {
    Ff(this, 32) && Af(this, 32, !0) && Cf(this, 32, !0)
};
g.ej = function() {
    Ff(this, 4) && Bf(this, !1);
    Ff(this, 32) && Af(this, 32, !1) && Cf(this, 32, !1)
};
g.Mb = function(a) {
    return this.$() && this.isEnabled() && this.ug(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.ug = function(a) {
    return 13 == a.g && this.Yc(a)
};
if (!fa(xf)) throw Error("Invalid component class " + xf);
if (!fa(af)) throw Error("Invalid renderer class " + af);
var Hf = ha(xf);
Ve[Hf] = af;
Ue("goog-control", function() {
    return new xf(null)
});

function zf(a) {
    ab.call(this);
    this.h = a;
    this.g = !1;
    this.i = new we(this);
    db(this, na(eb, this.i));
    a = this.h.g;
    this.i.aa(a, "mousedown", this.s).aa(a, "mouseup", this.B).aa(a, "click", this.j)
}
t(zf, ab);
var If = !u || 9 <= Number(Fb);
zf.prototype.s = function() {
    this.g = !1
};
zf.prototype.B = function() {
    this.g = !0
};

function Jf(a, b) {
    if (!If) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
}
zf.prototype.j = function(a) {
    if (this.g) this.g = !1;
    else {
        var b = a.h,
            c = b.button,
            d = b.type,
            e = Jf(b, "mousedown");
        this.h.Ec(new Lb(e, a.i));
        e = Jf(b, "mouseup");
        this.h.Od(new Lb(e, a.i));
        If || (b.button = c, b.type = d)
    }
};
zf.prototype.Ba = function() {
    this.h = null;
    zf.w.Ba.call(this)
};

function Kf() {
    this.h = []
}
t(Kf, af);
ba(Kf);

function Lf(a, b) {
    var c = a.h[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.xa() + "-highlight";
                break;
            case 1:
                c = a.xa() + "-checkbox";
                break;
            case 2:
                c = a.xa() + "-content"
        }
        a.h[b] = c
    }
    return c
}
g = Kf.prototype;
g.dj = function() {
    return "menuitem"
};
g.nf = function(a) {
    var b = a.i.Jb("DIV", df(this, a).join(" "), Mf(this, a.vb, a.i));
    Nf(this, a, b, !!(a.La & 8) || !!(a.La & 16));
    return b
};
g.Nd = function(a) {
    return a && a.firstChild
};
g.se = function(a, b) {
    var c = this.Nd(a),
        d = Of(this, a) ? c.firstChild : null;
    Kf.w.se.call(this, a, b);
    d && !Of(this, a) && c.insertBefore(d, c.firstChild || null)
};

function Mf(a, b, c) {
    a = Lf(a, 2);
    return c.Jb("DIV", a, b)
}

function Of(a, b) {
    var c = a.Nd(b);
    if (c) {
        var c = c.firstChild,
            d = Lf(a, 1);
        return !!c && ga(c) && 1 == c.nodeType && Pe(c, d)
    }
    return !1
}

function Nf(a, b, c, d) {
    gf(a, c, b.kf());
    hf(b, c);
    d != Of(a, c) && (d ? Qe(c, "goog-option") : Se(c, "goog-option"), c = a.Nd(c), d ? (a = Lf(a, 1), c.insertBefore(b.i.Jb("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
g.df = function(a) {
    switch (a) {
        case 2:
            return Lf(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return Kf.w.df.call(this, a)
    }
};
g.xa = function() {
    return "goog-menuitem"
};

function Pf(a, b, c, d) {
    xf.call(this, a, d || Kf.nc(), c);
    this.Ta = b
}
t(Pf, xf);
g = Pf.prototype;
g.ab = function() {
    var a = this.Ta;
    return null != a ? a : this.cf()
};
g.zb = function(a, b) {
    Pf.w.zb.call(this, a, b);
    switch (a) {
        case 8:
            this.va & 16 && !b && Df(this, !1);
            var c = this.F();
            c && this && c && Nf(this.h, this, c, b);
            break;
        case 16:
            (c = this.F()) && this && c && Nf(this.h, this, c, b)
    }
};
g.cf = function() {
    var a = this.vb;
    return da(a) ? (a = Sa(a, function(a) {
        return ga(a) && 1 == a.nodeType && (Pe(a, "goog-menuitem-accel") || Pe(a, "goog-menuitem-mnemonic-separator")) ? "" : od(a)
    }).join(""), qa(a)) : Pf.w.cf.call(this)
};
g.Od = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.h;
        b.h = null;
        if (c && q(a.clientX) && Rc(c, new w(a.clientX, a.clientY))) return
    }
    Pf.w.Od.call(this, a)
};
g.ug = function(a) {
    return a.g == this.mj && this.Yc(a) ? !0 : Pf.w.ug.call(this, a)
};
g.Km = function() {
    return this.mj
};
Ue("goog-menuitem", function() {
    return new Pf(null)
});
Pf.prototype.kf = function() {
    return this.La & 16 ? "menuitemcheckbox" : this.La & 8 ? "menuitemradio" : Pf.w.kf.call(this)
};
Pf.prototype.getParent = function() {
    return xf.prototype.getParent.call(this)
};
Pf.prototype.jf = function() {
    return xf.prototype.jf.call(this)
};

function Qf(a) {
    this.h = a
}
ba(Qf);

function Rf(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
Qf.prototype.g = function(a) {
    a = a.F();
    te(a, qb);
    u && (a.hideFocus = !0);
    var b = this.h;
    b && Xe(a, b)
};
Qf.prototype.xa = function() {
    return "goog-container"
};

function Sf(a, b) {
    var c = a.xa(),
        d = [c, b.Sd == Tf ? c + "-horizontal" : c + "-vertical"];
    b.isEnabled() || d.push(c + "-disabled");
    return d
};

function Uf() {}
t(Uf, af);
ba(Uf);
Uf.prototype.nf = function(a) {
    return a.i.Jb("DIV", this.xa())
};
Uf.prototype.se = function() {};
Uf.prototype.xa = function() {
    return "goog-menuseparator"
};

function Vf(a, b) {
    xf.call(this, null, a || Uf.nc(), b);
    this.zb(1, !1);
    this.zb(2, !1);
    this.zb(4, !1);
    this.zb(32, !1);
    this.va = 1
}
t(Vf, xf);
Vf.prototype.Pa = function() {
    Vf.w.Pa.call(this);
    var a = this.F();
    Xe(a, "separator")
};
Ue("goog-menuseparator", function() {
    return new Vf
});

function Wf(a) {
    this.h = a || "menu"
}
t(Wf, Qf);
ba(Wf);
Wf.prototype.xa = function() {
    return "goog-menu"
};
Wf.prototype.g = function(a) {
    Wf.w.g.call(this, a);
    a = a.F();
    Ye(a, "haspopup", "true")
};
Ue("goog-menuseparator", function() {
    return new Vf
});

function Xf(a, b, c) {
    Ae.call(this, c);
    this.re = b || Qf.nc();
    this.Sd = a || Yf
}
t(Xf, Ae);
var Tf = "horizontal",
    Yf = "vertical";
g = Xf.prototype;
g.Hg = null;
g.ld = null;
g.re = null;
g.Sd = null;
g.Rc = !0;
g.gd = !0;
g.Ld = !0;
g.Da = -1;
g.Ra = null;
g.Rd = !1;
g.Ac = null;

function Zf(a) {
    return a.Hg || a.F()
}
g.Jd = function() {
    this.g = this.i.Jb("DIV", Sf(this.re, this).join(" "))
};
g.mf = function() {
    return this.F()
};
g.Pa = function() {
    Xf.w.Pa.call(this);
    Ie(this, function(a) {
        a.qa && $f(this, a)
    }, this);
    var a = this.F();
    this.re.g(this);
    this.ga(this.Rc, !0);
    Ee(this).aa(this, "enter", this.wg).aa(this, "highlight", this.Sm).aa(this, "unhighlight", this.Xm).aa(this, "open", this.Vm).aa(this, "close", this.Pm).aa(a, "mousedown", this.Ec).aa(Wc(a), "mouseup", this.Qm).aa(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.Om);
    this.Ld && ag(this, !0)
};

function ag(a, b) {
    var c = Ee(a),
        d = Zf(a);
    b ? c.aa(d, "focus", a.cj).aa(d, "blur", a.bj).aa(a.ld || (a.ld = new pf(Zf(a))), "key", a.Mb) : c.Rb(d, "focus", a.cj).Rb(d, "blur", a.bj).Rb(a.ld || (a.ld = new pf(Zf(a))), "key", a.Mb)
}
g.Hb = function() {
    this.Md(-1);
    this.Ra && Ef(this.Ra, !1);
    this.Rd = !1;
    Xf.w.Hb.call(this)
};
g.Ba = function() {
    Xf.w.Ba.call(this);
    this.ld && (this.ld.D(), this.ld = null);
    this.re = this.Ra = this.Ac = this.Hg = null
};
g.wg = function() {
    return !0
};
g.Sm = function(a) {
    var b = Ne(this, a.target);
    if (-1 < b && b != this.Da) {
        var c = Ke(this, this.Da);
        c && c.Kb(!1);
        this.Da = b;
        c = Ke(this, this.Da);
        this.Rd && Bf(c, !0);
        this.Ra && c != this.Ra && (c.La & 64 ? Ef(c, !0) : Ef(this.Ra, !1))
    }
    b = this.F();
    null != a.target.F() && Ye(b, "activedescendant", a.target.F().id)
};
g.Xm = function(a) {
    a.target == Ke(this, this.Da) && (this.Da = -1);
    a = this.F();
    Ze(a)
};
g.Vm = function(a) {
    (a = a.target) && a != this.Ra && a.getParent() == this && (this.Ra && Ef(this.Ra, !1), this.Ra = a)
};
g.Pm = function(a) {
    a.target == this.Ra && (this.Ra = null);
    var b = this.F(),
        c = a.target.F();
    b && a.target.va & 2 && c && (a = "", c && (a = c.id), Ye(b, "activedescendant", a))
};
g.Ec = function(a) {
    this.gd && (this.Rd = !0);
    var b = Zf(this);
    b && kd(b) && ld(b) ? b.focus() : a.preventDefault()
};
g.Qm = function() {
    this.Rd = !1
};
g.Om = function(a) {
    var b = bg(this, a.target);
    if (b) switch (a.type) {
        case "mousedown":
            b.Ec(a);
            break;
        case "mouseup":
            b.Od(a);
            break;
        case "mouseover":
            b.ve(a);
            break;
        case "mouseout":
            b.yg(a);
            break;
        case "contextmenu":
            b.te(a)
    }
};

function bg(a, b) {
    if (a.Ac)
        for (var c = a.F(); b && b !== c;) {
            var d = b.id;
            if (d in a.Ac) return a.Ac[d];
            b = b.parentNode
        }
    return null
}
g.cj = function() {};
g.bj = function() {
    this.Md(-1);
    this.Rd = !1;
    this.Ra && Ef(this.Ra, !1)
};
g.Mb = function(a) {
    return this.isEnabled() && this.$() && (0 != Je(this) || this.Hg) && this.tg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.tg = function(a) {
    var b = Ke(this, this.Da);
    if (b && "function" == typeof b.Mb && b.Mb(a) || this.Ra && this.Ra != b && "function" == typeof this.Ra.Mb && this.Ra.Mb(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.g) {
        case 27:
            if (this.Ld) Zf(this).blur();
            else return !1;
            break;
        case 36:
            cg(this);
            break;
        case 35:
            dg(this);
            break;
        case 38:
            if (this.Sd == Yf) eg(this);
            else return !1;
            break;
        case 37:
            if (this.Sd == Tf) Le(this) ? fg(this) : eg(this);
            else return !1;
            break;
        case 40:
            if (this.Sd == Yf) fg(this);
            else return !1;
            break;
        case 39:
            if (this.Sd ==
                Tf) Le(this) ? eg(this) : fg(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function $f(a, b) {
    var c = b.F(),
        c = c.id || (c.id = De(b));
    a.Ac || (a.Ac = {});
    a.Ac[c] = b
}
g.ge = function(a, b) {
    Xf.w.ge.call(this, a, b)
};
g.Dd = function(a, b, c) {
    a.wd |= 2;
    a.wd |= 64;
    a.zb(32, !1);
    a.qa && 0 != a.ue && yf(a, !1);
    a.ue = !1;
    var d = a.getParent() == this ? Ne(this, a) : -1;
    Xf.w.Dd.call(this, a, b, c);
    a.qa && this.qa && $f(this, a);
    a = d; - 1 == a && (a = Je(this));
    a == this.Da ? this.Da = Math.min(Je(this) - 1, b) : a > this.Da && b <= this.Da ? this.Da++ : a < this.Da && b > this.Da && this.Da--
};
g.removeChild = function(a, b) {
    if (a = m(a) ? Ge(this, a) : a) {
        var c = Ne(this, a); - 1 != c && (c == this.Da ? (a.Kb(!1), this.Da = -1) : c < this.Da && this.Da--);
        var d = a.F();
        d && d.id && this.Ac && (c = this.Ac, d = d.id, d in c && delete c[d])
    }
    c = a = Xf.w.removeChild.call(this, a, b);
    c.qa && 1 != c.ue && yf(c, !0);
    c.ue = !0;
    return a
};
g.$ = function() {
    return this.Rc
};
g.ga = function(a, b) {
    if (b || this.Rc != a && cc(this, a ? "show" : "hide")) {
        this.Rc = a;
        var c = this.F();
        c && (re(c, a), this.Ld && Rf(Zf(this), this.gd && this.Rc), b || cc(this, this.Rc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return this.gd
};
g.Fe = function(a) {
    this.gd != a && cc(this, a ? "enable" : "disable") && (a ? (this.gd = !0, Ie(this, function(a) {
        a.xj ? delete a.xj : a.Fe(!0)
    })) : (Ie(this, function(a) {
        a.isEnabled() ? a.Fe(!1) : a.xj = !0
    }), this.Rd = this.gd = !1), this.Ld && Rf(Zf(this), a && this.Rc))
};

function gg(a, b) {
    b != a.Ld && a.qa && ag(a, b);
    a.Ld = b;
    a.gd && a.Rc && Rf(Zf(a), b)
}
g.Md = function(a) {
    (a = Ke(this, a)) ? a.Kb(!0): -1 < this.Da && Ke(this, this.Da).Kb(!1)
};

function cg(a) {
    hg(a, function(a, c) {
        return (a + 1) % c
    }, Je(a) - 1)
}

function dg(a) {
    hg(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function fg(a) {
    hg(a, function(a, c) {
        return (a + 1) % c
    }, a.Da)
}

function eg(a) {
    hg(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.Da)
}

function hg(a, b, c) {
    c = 0 > c ? Ne(a, a.Ra) : c;
    var d = Je(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var f = Ke(a, c);
        if (f && a.zi(f)) {
            a.Md(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
}
g.zi = function(a) {
    return a.$() && a.isEnabled() && !!(a.La & 2)
};

function ig() {}
t(ig, af);
ba(ig);
ig.prototype.xa = function() {
    return "goog-menuheader"
};

function jg(a, b, c) {
    xf.call(this, a, c || ig.nc(), b);
    this.zb(1, !1);
    this.zb(2, !1);
    this.zb(4, !1);
    this.zb(32, !1);
    this.va = 1
}
t(jg, xf);
Ue("goog-menuheader", function() {
    return new jg(null)
});

function kg(a, b) {
    Xf.call(this, Yf, b || Wf.nc(), a);
    gg(this, !1)
}
t(kg, Xf);
g = kg.prototype;
g.Yf = !0;
g.xa = function() {
    return this.re.xa()
};

function lg(a) {
    a.Yf = !0;
    gg(a, !0)
}
g.ga = function(a, b, c) {
    (b = kg.w.ga.call(this, a, b)) && a && this.qa && this.Yf && Zf(this).focus();
    a && c && q(c.clientX) ? this.h = new w(c.clientX, c.clientY) : this.h = null;
    return b
};
g.wg = function(a) {
    this.Yf && Zf(this).focus();
    return kg.w.wg.call(this, a)
};
g.zi = function(a) {
    return a.isEnabled() && a.$() && !!(a.La & 2)
};
g.tg = function(a) {
    var b = kg.w.tg.call(this, a);
    b || Ie(this, function(c) {
        !b && c.Km && c.mj == a.g && (this.isEnabled() && this.Md(Ne(this, c)), b = c.Mb(a))
    }, this);
    return b
};
g.Md = function(a) {
    kg.w.Md.call(this, a);
    if (a = Ke(this, a)) {
        var b = a.F(),
            c = (a = this.F() || ad(document)) || ad(document),
            d = oe(b),
            e = oe(c),
            f;
        if (!u || 9 <= Number(Fb)) k = ke(c, "borderLeftWidth"), f = ke(c, "borderRightWidth"), l = ke(c, "borderTopWidth"), p = ke(c, "borderBottomWidth"), f = new he(parseFloat(l), parseFloat(f), parseFloat(p), parseFloat(k));
        else {
            var k = ve(c, "borderLeft");
            f = ve(c, "borderRight");
            var l = ve(c, "borderTop"),
                p = ve(c, "borderBottom");
            f = new he(l, f, p, k)
        }
        c == ad(document) ? (k = d.x - c.scrollLeft, d = d.y - c.scrollTop, !u || 10 <= Number(Fb) ||
            (k += f.left, d += f.top)) : (k = d.x - e.x - f.left, d = d.y - e.y - f.top);
        e = c.clientHeight - b.offsetHeight;
        f = c.scrollLeft;
        l = c.scrollTop;
        f += Math.min(k, Math.max(k - (c.clientWidth - b.offsetWidth), 0));
        l += Math.min(d, Math.max(d - e, 0));
        b = new w(f, l);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
var ng = {
    We: null,
    show: function(a, b, c) {
        mg(ng, c, null);
        if (b.length) {
            var d = new kg;
            d.Kd(c);
            for (var e = 0, f; f = b[e]; e++) {
                var k = new Pf(f.text);
                k.Kd(c);
                d.ge(k, !0);
                k.Fe(f.enabled);
                f.enabled && Rb(k, "action", f.Oa)
            }
            Rb(d, "action", ng.Fc);
            b = $c();
            e = me();
            d.U(og);
            var l = d.F();
            pg(l, "blocklyContextMenu");
            G(l, "contextmenu", null, qg);
            f = pe(l);
            var k = a.clientX + e.x,
                p = a.clientY + e.y;
            a.clientY + f.height >= b.height && (p -= f.height);
            c ? f.width >= a.clientX && (k += f.width) : a.clientX + f.width >= b.width && (k -= f.width);
            rg(k, p, b, e, c);
            lg(d);
            setTimeout(function() {
                    l.focus()
                },
                1);
            ng.We = null
        } else ng.Fc()
    },
    Fc: function() {
        sg(ng);
        ng.We = null
    },
    dg: function(a, b) {
        return function() {
            B++;
            var c = Pd(b, a.A),
                d = a.ya();
            d.x = a.o ? d.x - Wd : d.x + Wd;
            d.y += 2 * Wd;
            c.moveBy(d.x, d.y);
            B--;
            0 == B && !c.s && E(new tg(c));
            c.select()
        }
    }
};
// Copyright 2012 Google Inc.  Apache License 2.0
function ug(a) {
    this.id = vg();
    wg[this.id] = this;
    this.options = a || {};
    this.o = !!this.options.o;
    this.Hc = !!this.options.Hc;
    this.ra = this.options.ra;
    this.i = [];
    this.B = [];
    this.j = [];
    this.G = [];
    this.gc = Object.create(null)
}
g = ug.prototype;
g.P = !1;
g.D = function() {
    this.B.length = 0;
    this.clear();
    delete wg[this.id]
};

function xg(a, b) {
    for (var c = !1, d, e = 0; d = a.i[e]; e++)
        if (d == b) {
            a.i.splice(e, 1);
            c = !0;
            break
        }
    if (!c) throw "Block not present in workspace's list of top-most blocks.";
}

function yg(a, b) {
    var c = [].concat(a.i);
    if (b && 1 < c.length) {
        var d = Math.sin(Qc(3));
        a.o && (d *= -1);
        c.sort(function(a, b) {
            var c = a.ya(),
                l = b.ya();
            return c.y + d * c.x - (l.y + d * l.x)
        })
    }
    return c
}
g.Ib = function() {
    for (var a = yg(this, !1), b = 0; b < a.length; b++) a.push.apply(a, a[b].hd());
    return a
};
g.clear = function() {
    var a = Ad;
    for (a || A(!0); this.i.length;) this.i[0].D();
    a || A(!1)
};
g.Xb = function() {
    return 0
};
g.pd = function(a, b) {
    return new zg(this, a, b)
};

function Ag(a) {
    return isNaN(a.options.G) ? Infinity : a.options.G - a.Ib().length
}
g.eh = function(a) {
    var b = a ? this.G : this.j,
        c = a ? this.j : this.G,
        d = b.pop();
    if (d) {
        for (var e = [d]; b.length && d.i && d.i == b[b.length - 1].i;) e.push(b.pop());
        for (b = 0; d = e[b]; b++) c.push(d);
        e = Bg(e, a);
        zd = !1;
        for (b = 0; d = e[b]; b++) d.j(a);
        zd = !0
    }
};
g.Ai = function() {
    this.j.length = 0;
    for (var a = this.G.length = 0, b; b = Cg[a]; a++) b.Ng = !1
};
g.yc = function(a) {
    this.B.push(a);
    return a
};
g.Td = function(a) {
    a = this.B.indexOf(a); - 1 != a && this.B.splice(a, 1)
};
var wg = Object.create(null);
ug.prototype.clear = ug.prototype.clear;
ug.prototype.clearUndo = ug.prototype.Ai;
ug.prototype.addChangeListener = ug.prototype.yc;
ug.prototype.removeChangeListener = ug.prototype.Td;

function Dg(a) {
    var b = x("xml");
    a = yg(a, !0);
    for (var c = 0, d; d = a[c]; c++) b.appendChild(Eg(d));
    return b
}

function Eg(a) {
    var b;
    a.A.o && (b = a.A.Xb());
    var c = vd(a),
        d = a.ya();
    c.setAttribute("x", Math.round(a.A.o ? b - d.x : d.x));
    c.setAttribute("y", Math.round(d.y));
    return c
}

function vd(a) {
    var b = x(a.s ? "shadow" : "block");
    b.setAttribute("type", a.type);
    b.setAttribute("id", a.id);
    if (a.Ja) {
        var c = a.Ja();
        c && (c.hasChildNodes() || c.hasAttributes()) && b.appendChild(c)
    }
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.Ea[e]; e++)
            if (f.name && f.yd) {
                var k = x("field", null, f.ab());
                k.setAttribute("name", f.name);
                b.appendChild(k)
            }
    if (c = a.ef()) c = x("comment", null, c), "object" == typeof a.Aa && (c.setAttribute("pinned", a.Aa.$()), d = Fg(a.Aa), c.setAttribute("h", d.height), c.setAttribute("w", d.width)), b.appendChild(c);
    a.data && (c = x("data", null, a.data), b.appendChild(c));
    for (c = 0; d = a.h[c]; c++) {
        var l;
        f = !0;
        5 != d.type && (k = z(d.I), 1 == d.type ? l = x("value") : 3 == d.type && (l = x("statement")), e = d.I.qc, !e || k && k.s || l.appendChild(Gg(e)), k && (l.appendChild(vd(k)), f = !1), l.setAttribute("name", d.name), f || b.appendChild(l))
    }
    a.wi != a.Fa && b.setAttribute("inline", a.Fa);
    a.j && b.setAttribute("collapsed", !0);
    a.disabled && b.setAttribute("disabled", !0);
    Hg(a) || a.s || b.setAttribute("deletable", !1);
    Ld(a) || a.s || b.setAttribute("movable", !1);
    Ig(a) || b.setAttribute("editable", !1);
    if (c = xd(a)) l = x("next", null, vd(c)), b.appendChild(l);
    e = a.g && a.g.qc;
    !e || c && c.s || l.appendChild(Gg(e));
    return b
}

function Gg(a) {
    for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else {
            for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && y(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && y(c))
        }
    return a
}

function Jg(a) {
    return (new XMLSerializer).serializeToString(a)
}

function Kg(a) {
    return (new DOMParser).parseFromString(a, "text/xml").firstChild
}

function Lg(a, b) {
    if (a instanceof ug) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var d;
    b.o && (d = b.Xb());
    Mg();
    var c = a.childNodes.length,
        e = Ad;
    e || A(!0);
    for (var f = 0; f < c; f++) {
        var k = a.childNodes[f];
        if ("block" == k.nodeName.toLowerCase()) {
            var l = Pd(k, b),
                p = parseInt(k.getAttribute("x"), 10),
                k = parseInt(k.getAttribute("y"), 10);
            isNaN(p) || isNaN(k) || l.moveBy(b.o ? d - p : p, k)
        }
    }
    e || A(!1);
    Ng()
}

function Pd(a, b) {
    if (a instanceof ug) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    B++;
    var d = Og(a, b);
    if (b.P) {
        Pg(d, !0);
        for (var c = d.jb(), e = c.length - 1; 0 <= e; e--) c[e].pc();
        for (e = c.length - 1; 0 <= e; e--) c[e].U(!1);
        setTimeout(function() {
            d.A && Pg(d, !1)
        }, 1);
        ge(d);
        Qg(b)
    }
    B--;
    0 == B && E(new tg(d));
    return d
}

function Og(a, b) {
    for (var c = null, d = a.getAttribute("type"), e = a.getAttribute("id"), c = b.pd(d, e), f = null, e = 0, k; k = a.childNodes[e]; e++)
        if (3 != k.nodeType) {
            for (var l = f = null, p = 0, n; n = k.childNodes[p]; p++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? f = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !f && l && (f = l);
            p = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.gb && (c.gb(k), c.pc && c.pc());
                    break;
                case "comment":
                    c.td(k.textContent);
                    var r = k.getAttribute("pinned");
                    r && !c.G && setTimeout(function() {
                        c.Aa &&
                            c.Aa.ga && c.Aa.ga("true" == r)
                    }, 1);
                    f = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(f) && !isNaN(k) && c.Aa && c.Aa.ga && Rg(c.Aa, f, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    f = Sg(c, p);
                    if (!f) {
                        console.warn("Ignoring non-existent field " + p + " in block " + d);
                        break
                    }
                    f.ha(k.textContent);
                    break;
                case "value":
                case "statement":
                    k = I(c, p);
                    if (!k) {
                        console.warn("Ignoring non-existent input " + p + " in block " + d);
                        break
                    }
                    l && (k.I.qc = l);
                    f && (f = Og(f, b), f.K ? k.I.connect(f.K) : f.T &&
                        k.I.connect(f.T));
                    break;
                case "next":
                    l && c.g && (c.g.qc = l);
                    f && (f = Og(f, b), c.g.connect(f.T));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(d = a.getAttribute("inline")) && c.kb("true" == d);
    (d = a.getAttribute("disabled")) && c.Vd("true" == d);
    if (d = a.getAttribute("deletable")) c.hg = "true" == d;
    (d = a.getAttribute("movable")) && c.Bf("true" == d);
    (d = a.getAttribute("editable")) && c.Ug("true" == d);
    (d = a.getAttribute("collapsed")) && c.$c("true" == d);
    if ("shadow" == a.nodeName.toLowerCase()) {
        d = c.hd();
        for (e = 0; d[e]; e++);
        c.Xg(!0)
    }
    c.Gf && c.Gf();
    return c
}
h.Blockly || (h.Blockly = {});
h.Blockly.Xml || (h.Blockly.Xml = {});
h.Blockly.Xml.domToText = Jg;
h.Blockly.Xml.domToWorkspace = Lg;
h.Blockly.Xml.textToDom = Kg;
h.Blockly.Xml.workspaceToDom = Dg;

function Tg(a, b, c, d, e, f) {
    this.m = a;
    this.s = b;
    this.B = c;
    c = Ug;
    this.m.o && (c = -c);
    this.G = Qc(c);
    a.g.appendChild(Vg(this, b, !(!e || !f)));
    this.ed = d;
    this.De && Wg(this);
    e && f || (b = this.s.getBBox(), e = b.width + 2 * Xg, f = b.height + 2 * Xg);
    Yg(this, e, f);
    Wg(this);
    Zg(this);
    this.De = !0;
    a.options.i || (G(this.i, "mousedown", this, this.tm), this.g && G(this.g, "mousedown", this, this.kn))
}
var Xg = 6,
    Ug = 20,
    $g = null,
    ah = null;
g = Tg.prototype;
g.Qg = null;

function bh() {
    $g && (J($g), $g = null);
    ah && (J(ah), ah = null)
}
g.De = !1;
g.ed = null;
g.rd = 0;
g.Be = 0;
g.ea = 0;
g.$d = 0;
g.ag = !0;

function Vg(a, b, c) {
    a.h = F("g", {}, null);
    var d = {
        filter: "url(#" + a.m.options.L + ")"
    }; - 1 != La.indexOf("JavaFX") && (d = {});
    d = F("g", d, a.h);
    a.j = F("path", {}, d);
    a.i = F("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: Xg,
        ry: Xg
    }, d);
    c ? (a.g = F("g", {
            "class": a.m.o ? "blocklyResizeSW" : "blocklyResizeSE"
        }, a.h), c = 2 * Xg, F("polygon", {
            points: "0,x x,x x,0".replace(/x/g, c.toString())
        }, a.g), F("line", {
            "class": "blocklyResizeLine",
            x1: c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: c / 3
        }, a.g), F("line", {
            "class": "blocklyResizeLine",
            x1: 2 * c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: 2 * c / 3
        }, a.g)) :
        a.g = null;
    a.h.appendChild(b);
    return a.h
}
g.tm = function(a) {
    ch(this);
    bh();
    dh(a) ? a.stopPropagation() : eh(a) || (fh(gh), hh(this.m, a, new w(this.m.o ? -this.rd : this.rd, this.Be)), $g = G(document, "mouseup", this, bh), ah = G(document, "mousemove", this, this.um), jh(), a.stopPropagation())
};
g.um = function(a) {
    this.ag = !1;
    a = kh(this.m, a);
    this.rd = this.m.o ? -a.x : a.x;
    this.Be = a.y;
    Wg(this);
    Zg(this)
};
g.kn = function(a) {
    ch(this);
    bh();
    dh(a) || (fh(gh), hh(this.m, a, new w(this.m.o ? -this.ea : this.ea, this.$d)), $g = G(document, "mouseup", this, bh), ah = G(document, "mousemove", this, this.ln), jh());
    a.stopPropagation()
};
g.ln = function(a) {
    this.ag = !1;
    a = kh(this.m, a);
    Yg(this, this.m.o ? -a.x : a.x, a.y);
    this.m.o && Wg(this)
};

function ch(a) {
    a.h.parentNode.appendChild(a.h)
}

function Wg(a) {
    var b = a.ed.x,
        b = a.m.o ? b - (a.rd + a.ea) : b + a.rd;
    a.h.setAttribute("transform", "translate(" + b + "," + (a.Be + a.ed.y) + ")")
}

function lh(a) {
    return {
        width: a.ea,
        height: a.$d
    }
}

function Yg(a, b, c) {
    var d = 2 * Xg;
    b = Math.max(b, d + 45);
    c = Math.max(c, d + 20);
    a.ea = b;
    a.$d = c;
    a.i.setAttribute("width", b);
    a.i.setAttribute("height", c);
    a.g && (a.m.o ? a.g.setAttribute("transform", "translate(" + 2 * Xg + "," + (c - d) + ") scale(-1 1)") : a.g.setAttribute("transform", "translate(" + (b - d) + "," + (c - d) + ")"));
    if (a.De) {
        if (a.ag) {
            b = -a.ea / 4;
            c = -a.$d - 25;
            d = a.m.Ia();
            d.ma /= a.m.scale;
            d.Ma /= a.m.scale;
            var e = a.ed.x;
            a.m.o ? e - d.Ma - b - a.ea < K ? b = e - d.Ma - a.ea - K : e - d.Ma - b > d.ma && (b = e - d.Ma - d.ma) : e + b < d.Ma ? b = d.Ma - e : d.Ma + d.ma < e + b + a.ea + 10 + K && (b = d.Ma +
                d.ma - e - a.ea - K);
            a.ed.y + c < d.rc && (c = a.B.getBBox().height);
            a.rd = b;
            a.Be = c
        }
        Wg(a);
        Zg(a)
    }
    a.Qg && a.Qg()
}

function Zg(a) {
    var b = [],
        c = a.ea / 2,
        d = a.$d / 2,
        e = -a.rd,
        f = -a.Be;
    if (c == e && d == f) b.push("M " + c + "," + d);
    else {
        f -= d;
        e -= c;
        a.m.o && (e *= -1);
        var k = Math.sqrt(f * f + e * e),
            l = Math.acos(e / k);
        0 > f && (l = 2 * Math.PI - l);
        var p = l + Math.PI / 2;
        p > 2 * Math.PI && (p -= 2 * Math.PI);
        var n = Math.sin(p),
            r = Math.cos(p),
            v = lh(a),
            p = (v.width + v.height) / 10,
            p = Math.min(p, v.width, v.height) / 2,
            v = 1 - 8 / k,
            e = c + v * e,
            f = d + v * f,
            v = c + p * r,
            C = d + p * n,
            c = c - p * r,
            d = d - p * n,
            n = l + a.G;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / 4;
        k = Math.cos(n) * k / 4;
        b.push("M" + v + "," + C);
        b.push("C" + (v + k) + "," + (C +
            l) + " " + e + "," + f + " " + e + "," + f);
        b.push("C" + e + "," + f + " " + (c + k) + "," + (d + l) + " " + c + "," + d)
    }
    b.push("z");
    a.j.setAttribute("d", b.join(" "))
}
g.D = function() {
    bh();
    y(this.h);
    this.B = this.s = this.m = this.g = this.i = this.j = this.h = null
};

function mh(a) {
    this.m = a
}
g = mh.prototype;
g.Lf = !1;
g.v = null;
g.Ef = null;
g.Jg = 0;
g.Wc = 0;
g.tc = 0;
g.Me = 0;
g.C = function(a) {
    this.g = 20 + a;
    nh(this, !1);
    return this.g + 60
};
g.D = function() {
    this.v && (y(this.v), this.v = null);
    this.m = this.Ef = null;
    h.clearTimeout(this.Jg)
};
g.position = function() {
    var a = this.m.Ia();
    a && (this.m.o ? (this.tc = 20 + K, 2 == a.ra && (this.tc += a.$e, this.m.Z && (this.tc += a.Na))) : (this.tc = a.ma + a.Na - 47 - 20 - K, 3 == a.ra && (this.tc -= a.$e)), this.Me = a.Ca + a.$a - 60 - this.g, 1 == a.ra && (this.Me -= a.Zi), this.v.setAttribute("transform", "translate(" + this.tc + "," + this.Me + ")"))
};
g.ne = function() {
    var a = this.v.getBoundingClientRect();
    return new ie(a.left + 0 - 10, a.top + 32 - 10, 67, 80)
};

function nh(a, b) {
    a.Lf != b && (h.clearTimeout(a.Jg), a.Lf = b, a.$f())
}
g.$f = function() {
    this.Wc += this.Lf ? .2 : -.2;
    this.Wc = Oc(this.Wc, 0, 1);
    var a = 45 * this.Wc;
    this.Ef.setAttribute("transform", "rotate(" + (this.m.o ? -a : a) + "," + (this.m.o ? 4 : 43) + ",14)");
    this.v.style.opacity = .4 + .4 * this.Wc;
    0 < this.Wc && 1 > this.Wc && (this.Jg = ec(this.$f, 20, this))
};
g.close = function() {
    nh(this, !1)
};
g.Hj = function() {
    var a = this.m.Zg - this.m.scrollX,
        b = this.m.$g - this.m.scrollY;
    Math.sqrt(a * a + b * b) > oh || console.log("TODO: Inspect trash.")
};

function ph(a) {
    this.m = a;
    this.h = new qh(a, !0, !0);
    this.i = new qh(a, !1, !0);
    this.j = F("rect", {
        height: K,
        width: K,
        "class": "blocklyScrollbarBackground"
    }, null);
    rh(this.j, a.g)
}
ph.prototype.g = null;
ph.prototype.D = function() {
    y(this.j);
    this.g = this.m = this.j = null;
    this.h.D();
    this.h = null;
    this.i.D();
    this.i = null
};
ph.prototype.resize = function() {
    var a = this.m.Ia();
    if (a) {
        var b = !1,
            c = !1;
        this.g && this.g.ma == a.ma && this.g.Ca == a.Ca && this.g.$a == a.$a && this.g.Na == a.Na ? (this.g && this.g.ib == a.ib && this.g.Ma == a.Ma && this.g.Eb == a.Eb || (b = !0), this.g && this.g.fb == a.fb && this.g.rc == a.rc && this.g.Fb == a.Fb || (c = !0)) : c = b = !0;
        b && this.h.resize(a);
        c && this.i.resize(a);
        this.g && this.g.ma == a.ma && this.g.Na == a.Na || this.j.setAttribute("x", this.i.J.x);
        this.g && this.g.Ca == a.Ca && this.g.$a == a.$a || this.j.setAttribute("y", this.h.J.y);
        this.g = a
    }
};
ph.prototype.set = function(a, b) {
    var c = {},
        d = a * this.h.g,
        e = b * this.i.g,
        f = this.i.i;
    c.x = sh(d, this.h.i);
    c.y = sh(e, f);
    this.m.ad(c);
    th(this.h, d);
    th(this.i, e)
};

function sh(a, b) {
    var c = a / b;
    return isNaN(c) ? 0 : c
}

function qh(a, b, c) {
    this.m = a;
    this.G = c || !1;
    this.B = b;
    this.O = null;
    this.v = F("g", {
        "class": "blocklyScrollbar" + (this.B ? "Horizontal" : "Vertical")
    }, null);
    this.h = F("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.v);
    a = Math.floor((K - 5) / 2);
    this.j = F("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.v);
    rh(this.v, this.m.g);
    this.J = new w(0, 0);
    b ? (this.h.setAttribute("height", K), this.j.setAttribute("height", K - 5), this.j.setAttribute("y", 2.5), this.L = "width", this.Fa = "x") : (this.h.setAttribute("width", K), this.j.setAttribute("width",
        K - 5), this.j.setAttribute("x", 2.5), this.L = "height", this.Fa = "y");
    this.Y = G(this.h, "mousedown", this, this.cn);
    this.oa = G(this.j, "mousedown", this, this.dn)
}
var uh, vh;
qh.prototype.i = 0;
qh.prototype.s = 0;
qh.prototype.H = 0;
qh.prototype.V = !0;
var K = 15;
Jb && (K = 25);
g = qh.prototype;
g.D = function() {
    this.wf();
    J(this.Y);
    this.Y = null;
    J(this.oa);
    this.oa = null;
    y(this.v);
    this.m = this.j = this.h = this.v = null
};

function th(a, b) {
    a.H = b;
    a.j.setAttribute(a.Fa, a.H)
}

function wh(a, b, c) {
    a.J.x = b;
    a.J.y = c;
    a.v.setAttribute("transform", "translate(" + a.J.x + "," + a.J.y + ")")
}
g.resize = function(a) {
    if (!a && (a = this.m.Ia(), !a)) return;
    var b = this.O;
    if (!a || !b || a.ma != b.ma || a.Ca != b.Ca || a.Ma != b.Ma || a.rc != b.rc || a.$a != b.$a || a.Na != b.Na || a.ib != b.ib || a.fb != b.fb || a.Eb != b.Eb || a.Fb != b.Fb) {
        this.O = a;
        if (this.B) {
            b = a.ma - 1;
            this.G && (b -= K);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.L, this.i);
            b = a.Na + .5;
            this.G && this.m.o && (b += K);
            wh(this, b, a.$a + a.Ca - K - .5);
            this.G || this.ga(this.i < a.ib);
            this.g = this.i / a.ib;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.s = Math.max(0, a.ma * this.g);
            this.j.setAttribute(this.L, this.s);
            th(this, xh(this, (a.Ma - a.Eb) * this.g))
        } else {
            b = a.Ca - 1;
            this.G && (b -= K);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.L, this.i);
            b = a.Na + .5;
            this.m.o || (b += a.ma - K - 1);
            wh(this, b, a.$a + .5);
            this.G || this.ga(this.i < a.fb);
            this.g = this.i / a.fb;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.s = Math.max(0, a.Ca * this.g);
            this.j.setAttribute(this.L, this.s);
            th(this, xh(this, (a.rc - a.Fb) * this.g))
        }
        yh(this)
    }
};
g.$ = function() {
    return this.V
};
g.ga = function(a) {
    if (a != this.$()) {
        if (this.G) throw "Unable to toggle visibility of paired scrollbars.";
        (this.V = a) ? this.v.setAttribute("display", "block"): (this.m.ad({
            x: 0,
            y: 0
        }), this.v.setAttribute("display", "none"))
    }
};
g.cn = function(a) {
    this.wf();
    if (dh(a)) a.stopPropagation();
    else {
        var b = zh(a, Ah(this.m)),
            b = this.B ? b.x : b.y,
            c = Bh(this.j, this.m),
            c = this.B ? c.x : c.y,
            d = this.H,
            e = .95 * this.s;
        b <= c ? d -= e : b >= c + this.s && (d += e);
        th(this, xh(this, d));
        yh(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
g.dn = function(a) {
    this.wf();
    dh(a) ? a.stopPropagation() : (this.Ta = this.H, this.Ua = this.B ? a.clientX : a.clientY, uh = G(document, "mouseup", this, this.wf), vh = G(document, "mousemove", this, this.gn), a.stopPropagation(), a.preventDefault())
};
g.gn = function(a) {
    th(this, xh(this, this.Ta + ((this.B ? a.clientX : a.clientY) - this.Ua)));
    yh(this)
};
g.wf = function() {
    jh(!0);
    uh && (J(uh), uh = null);
    vh && (J(vh), vh = null)
};

function xh(a, b) {
    return b = 0 >= b || isNaN(b) ? 0 : Math.min(b, a.i - a.s)
}

function yh(a) {
    var b = a.H / a.i;
    isNaN(b) && (b = 0);
    var c = {};
    a.B ? c.x = b : c.y = b;
    a.m.ad(c)
}
g.set = function(a) {
    th(this, xh(this, a * this.g));
    yh(this)
};

function rh(a, b) {
    var c = b.nextSibling,
        d = b.parentNode;
    if (!d) throw "Reference node has no parent.";
    c ? d.insertBefore(a, c) : d.appendChild(a)
};

function Ch() {}
Ch.prototype = [];

function Xd(a, b) {
    if (b.Uc) throw "Connection already in database.";
    b.u.G || (a.splice(Dh(a, b), 0, b), b.Uc = !0)
}

function Eh(a, b) {
    if (!a.length) return -1;
    var c = Dh(a, b);
    if (c >= a.length) return -1;
    for (var d = b.za, e = c; 0 <= e && a[e].za == d;) {
        if (a[e] == b) return e;
        e--
    }
    for (; c < a.length && a[c].za == d;) {
        if (a[c] == b) return c;
        c++
    }
    return -1
}

function Dh(a, b) {
    if (!a.length) return 0;
    for (var c = 0, d = a.length; c < d;) {
        var e = Math.floor((c + d) / 2);
        if (a[e].za < b.za) c = e + 1;
        else if (a[e].za > b.za) d = e;
        else {
            c = e;
            break
        }
    }
    return c
}

function Gd(a, b) {
    if (!b.Uc) throw "Connection not in database.";
    var c = Eh(a, b);
    if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.Uc = !1;
    a.splice(c, 1)
}

function Fh(a, b) {
    var c = Wd;

    function d(a) {
        var b = f - e[a].tb,
            d = k - e[a].za;
        Math.sqrt(b * b + d * d) <= c && r.push(e[a]);
        return d < c
    }
    for (var e = a, f = b.tb, k = b.za, l = 0, p = e.length - 2, n = p; l < n;) e[n].za < k ? l = n : p = n, n = Math.floor((l + p) / 2);
    var r = [],
        p = l = n;
    if (e.length) {
        for (; 0 <= l && d(l);) l--;
        do p++; while (p < e.length && d(p))
    }
    return r
}

function Gh(a, b, c, d) {
    if (!a.length) return {
        I: null,
        rj: c
    };
    var e = b.za,
        f = b.tb;
    b.tb = f + d.x;
    b.za = e + d.y;
    var k = Dh(a, b);
    d = null;
    for (var l = c, p, n = k - 1; 0 <= n && Math.abs(a[n].za - b.za) <= c;) p = a[n], b.tf(p, l) && (d = p, l = Td(p, b)), n--;
    for (; k < a.length && Math.abs(a[k].za - b.za) <= c;) p = a[k], b.tf(p, l) && (d = p, l = Td(p, b)), k++;
    b.tb = f;
    b.za = e;
    return {
        I: d,
        rj: l
    }
};
// Copyright 2015 Google Inc.  Apache License 2.0
function Hh(a) {
    this.m = a
}
g = Hh.prototype;
g.v = null;
g.uc = 0;
g.Ne = 0;

function Ih(a) {
    var b = a.m;
    a.v = F("g", {
        "class": "blocklyZoom"
    }, null);
    var c = String(Math.random()).substring(2),
        d = F("clipPath", {
            id: "blocklyZoomoutClipPath" + c
        }, a.v);
    F("rect", {
        width: 32,
        height: 32,
        y: 77
    }, d);
    var e = F("image", {
        width: Jh,
        height: Kh,
        x: -64,
        y: -15,
        "clip-path": "url(#blocklyZoomoutClipPath" + c + ")"
    }, a.v);
    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.$b + Lh);
    d = F("clipPath", {
        id: "blocklyZoominClipPath" + c
    }, a.v);
    F("rect", {
        width: 32,
        height: 32,
        y: 43
    }, d);
    var f = F("image", {
        width: Jh,
        height: Kh,
        x: -32,
        y: -49,
        "clip-path": "url(#blocklyZoominClipPath" + c + ")"
    }, a.v);
    f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.$b + Lh);
    d = F("clipPath", {
        id: "blocklyZoomresetClipPath" + c
    }, a.v);
    F("rect", {
        width: 32,
        height: 32
    }, d);
    c = F("image", {
        width: Jh,
        height: Kh,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + c + ")"
    }, a.v);
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.$b + Lh);
    G(c, "mousedown", null, function(a) {
        Mh(b, 1);
        if (b.Ka) {
            var c = b.Ia(),
                d = (c.ib - c.ma) / 2;
            b.W && (d -= b.W.ea / 2);
            b.Ka.set(d,
                (c.fb - c.Ca) / 2)
        }
        a.stopPropagation();
        a.preventDefault()
    });
    G(f, "mousedown", null, function(a) {
        Nh(b, 1);
        a.stopPropagation();
        a.preventDefault()
    });
    G(e, "mousedown", null, function(a) {
        Nh(b, -1);
        a.stopPropagation();
        a.preventDefault()
    });
    return a.v
}
g.C = function(a) {
    this.g = 20 + a;
    return this.g + 110
};
g.D = function() {
    this.v && (y(this.v), this.v = null);
    this.m = null
};
g.position = function() {
    var a = this.m.Ia();
    a && (this.m.o ? (this.uc = 20 + K, 2 == a.ra && (this.uc += a.$e, this.m.Z && (this.uc += a.Na))) : (this.uc = a.ma + a.Na - 32 - 20 - K, 3 == a.ra && (this.uc -= a.$e)), this.Ne = a.Ca + a.$a - 110 - this.g, 1 == a.ra && (this.Ne -= a.Zi), this.v.setAttribute("transform", "translate(" + this.uc + "," + this.Ne + ")"))
};

function Oh(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        d = !1,
        e = !1,
        f = !1,
        k = !1,
        l = !1,
        p = !1;
    else {
        var n = a.toolbox;
        n ? ("string" != typeof n && ("undefined" == typeof XSLTProcessor && n.outerHTML ? n = n.outerHTML : n instanceof Element || (n = null)), "string" == typeof n && (n = Kg(n))) : n = null;
        c = n;
        d = !(!c || !c.getElementsByTagName("category").length);
        e = a.trashcan;
        void 0 === e && (e = d);
        f = a.collapse;
        void 0 === f && (f = d);
        k = a.comments;
        void 0 === k && (k = d);
        l = a.disable;
        void 0 === l && (l = d);
        p = a.sounds;
        void 0 === p && (p = !0)
    }
    var n = !!a.rtl,
        r = a.horizontalLayout;
    void 0 ===
        r && (r = !1);
    var v = a.toolboxPosition,
        v = "end" === v ? !1 : !0,
        C = a.scrollbars;
    void 0 === C && (C = d);
    var H = a.css;
    void 0 === H && (H = !0);
    var D = "https://blockly-demo.appspot.com/static/media/";
    a.media ? D = a.media : a.path && (D = a.path + "media/");
    this.o = n;
    this.s = f;
    this.H = k;
    this.J = l;
    this.i = b;
    this.G = a.maxBlocks || Infinity;
    this.$b = D;
    this.O = d;
    this.B = C;
    this.oa = e;
    this.Y = p;
    this.V = H;
    this.Hc = r;
    this.Pd = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.Ir = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.Pr = 0 < c.spacing && !!b.snap;
    this.h = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.yn = void 0 === a.wheel ? !1 : !!a.wheel;
    b.pn = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.ye = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.ze = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.nn = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.g = b;
    this.ra = r ? v ? 0 : 1 : v == n ? 3 : 2
}
Oh.prototype.Zb = null;
Oh.prototype.ad = function() {};
Oh.prototype.Ia = function() {
    return null
};
// Copyright 2014 Google Inc.  Apache License 2.0
function Ph(a) {
    Ph.w.constructor.call(this, a);
    this.Ia = a.Ia;
    this.ad = a.ad;
    a = [];
    a[1] = new Ch;
    a[2] = new Ch;
    a[3] = new Ch;
    a[4] = new Ch;
    this.O = a;
    this.J = Object.create(null)
}
t(Ph, ug);
g = Ph.prototype;
g.P = !0;
g.Eg = !1;
g.Fg = !1;
g.scrollX = 0;
g.scrollY = 0;
g.Zg = 0;
g.$g = 0;
g.Wi = null;
g.scale = 1;
g.ob = null;
g.Ka = null;
g.kj = null;

function Qh(a, b) {
    a.v = F("g", {
        "class": "blocklyWorkspace"
    }, null);
    b && (a.h = F("rect", {
        height: "100%",
        width: "100%",
        "class": b
    }, a.v), "blocklyMainBackground" == b && (a.h.style.fill = "url(#" + a.options.j.id + ")"));
    a.cb = F("g", {
        "class": "blocklyBlockCanvas"
    }, a.v);
    a.g = F("g", {
        "class": "blocklyBubbleCanvas"
    }, a.v);
    var c = K;
    a.options.oa && (c = Rh(a, c));
    a.options.g && a.options.g.controls && (c = Sh(a, c));
    G(a.v, "mousedown", a, a.Zd);
    G(a.v, "touchstart", null, function(b) {
        Th(b, a)
    });
    a.options.g && a.options.g.yn && G(a.v, "wheel", a, a.hn);
    a.options.O ?
        a.Z = new Uh(a) : a.options.Pd && Vh(a);
    Wh(a);
    return a.v
}
g.D = function() {
    this.P = !1;
    Ph.w.D.call(this);
    this.v && (y(this.v), this.v = null);
    this.g = this.cb = null;
    this.Z && (this.Z.D(), this.Z = null);
    this.W && (this.W.D(), this.W = null);
    this.ob && (this.ob.D(), this.ob = null);
    this.Ka && (this.Ka.D(), this.Ka = null);
    this.s && (this.s.D(), this.s = null);
    this.options.Zb || y(Ah(this))
};
g.pd = function(a, b) {
    return new Xh(this, a, b)
};

function Rh(a, b) {
    a.ob = new mh(a);
    var c = a.ob;
    c.v = F("g", {
        "class": "blocklyTrash"
    }, null);
    var d = String(Math.random()).substring(2),
        e = F("clipPath", {
            id: "blocklyTrashBodyClipPath" + d
        }, c.v);
    F("rect", {
        width: 47,
        height: 44,
        y: 16
    }, e);
    F("image", {
        width: Jh,
        x: -0,
        height: Kh,
        y: -32,
        "clip-path": "url(#blocklyTrashBodyClipPath" + d + ")"
    }, c.v).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.m.options.$b + Lh);
    e = F("clipPath", {
        id: "blocklyTrashLidClipPath" + d
    }, c.v);
    F("rect", {
        width: 47,
        height: 16
    }, e);
    c.Ef = F("image", {
        width: Jh,
        x: -0,
        height: Kh,
        y: -32,
        "clip-path": "url(#blocklyTrashLidClipPath" + d + ")"
    }, c.v);
    c.Ef.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.m.options.$b + Lh);
    G(c.v, "mouseup", c, c.Hj);
    c.$f();
    a.v.insertBefore(c.v, a.cb);
    return a.ob.C(b)
}

function Sh(a, b) {
    a.s = new Hh(a);
    var c = Ih(a.s);
    a.v.appendChild(c);
    return a.s.C(b)
}

function Vh(a) {
    a.W = new Yh({
        ke: a.options.ke,
        Zb: a,
        o: a.o,
        Hc: a.Hc,
        ra: a.options.ra
    });
    a.W.ie = !1;
    var b = Zh(a.W);
    a.v.insertBefore(b, a.cb)
}

function Qg(a) {
    a.Ka && a.Ka.resize()
}
g.resize = function() {
    this.Z && this.Z.position();
    this.W && this.W.position();
    this.ob && this.ob.position();
    this.s && this.s.position();
    this.Ka && this.Ka.resize()
};

function Ah(a) {
    if (a.oa) return a.oa;
    for (var b = a.v; b;) {
        if ("svg" == b.tagName) return a.oa = b;
        b = b.parentNode
    }
    return null
}
g.translate = function(a, b) {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.cb.setAttribute("transform", c);
    this.g.setAttribute("transform", c)
};
g.Xb = function() {
    var a = this.Ia();
    return a ? a.ma / this.scale : 0
};
g.ga = function(a) {
    Ah(this).style.display = a ? "block" : "none";
    this.Z && (this.Z.vc.style.display = a ? "block" : "none");
    a ? (this.U(), this.Z && this.Z.position()) : jh(!0)
};
g.U = function() {
    for (var a = this.Ib(), b = a.length - 1; 0 <= b; b--) a[b].U(!1)
};

function $h(a, b) {
    a.dh = b;
    a.Y && (J(a.Y), a.Y = null);
    b && (a.Y = G(a.cb, "blocklySelectChange", a, function() {
        this.dh = !1
    }))
}

function ai(a) {
    var b = bi;
    b.dh && 0 != Ud && $h(b, !1);
    if (b.dh) {
        var c = null;
        if (a && (c = b.gc[a] || null, !c)) return;
        $h(b, !1);
        c ? c.select() : L && ci(L);
        setTimeout(function() {
            $h(b, !0)
        }, 1)
    }
}

function di(a) {
    var b = ei;
    if (a.P && !(b.getElementsByTagName("block").length >= Ag(a))) {
        fi();
        B++;
        var c = Pd(b, a),
            d = parseInt(b.getAttribute("x"), 10),
            b = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(d) && !isNaN(b)) {
            a.o && (d = -d);
            do {
                for (var e = !1, f = a.Ib(), k = 0, l; l = f[k]; k++)
                    if (l = l.ya(), 1 >= Math.abs(d - l.x) && 1 >= Math.abs(b - l.y)) {
                        e = !0;
                        break
                    }
                if (!e)
                    for (f = c.mc(!1), k = 0; l = f[k]; k++)
                        if (Gh(l.je, l, Wd, new w(d, b)).I) {
                            e = !0;
                            break
                        }
                e && (d = a.o ? d - Wd : d + Wd, b += 2 * Wd)
            } while (e);
            c.moveBy(d, b)
        }
        B--;
        0 == B && !c.s && E(new tg(c));
        c.select()
    }
}

function gi(a, b) {
    var c = new w(b.clientX, b.clientY);
    if (a.V) {
        if (a.V.contains(c)) return nh(a.ob, !0), fh(hi), !0;
        nh(a.ob, !1)
    }
    if (a.H && a.H.contains(c)) return fh(hi), !0;
    fh(gh);
    return !1
}
g.Zd = function(a) {
    this.Qd();
    eh(a) || (fi(), jh(), a.target && a.target.nodeName && ("svg" == a.target.nodeName.toLowerCase() || a.target == this.h) && L && !this.options.i && ci(L), dh(a) ? ii(this, a) : this.Ka && (this.Fg = !0, this.Ta = a.clientX, this.Ua = a.clientY, this.Fa = this.Ia(), this.Zg = this.scrollX, this.$g = this.scrollY, "mouseup" in ji && (ki = ki || [], ki = ki.concat(G(document, "mouseup", null, li))), qd = qd || [], qd = qd.concat(G(document, "mousemove", null, mi))), a.stopPropagation(), a.preventDefault())
};

function hh(a, b, c) {
    b = zh(b, Ah(a));
    b.x /= a.scale;
    b.y /= a.scale;
    a.Wi = Tc(c, b)
}

function kh(a, b) {
    var c = zh(b, Ah(a));
    c.x /= a.scale;
    c.y /= a.scale;
    var d = a.Wi;
    return new w(d.x + c.x, d.y + c.y)
}
g.hn = function(a) {
    fi();
    var b = 0 < a.deltaY ? -1 : 1,
        c = zh(a, Ah(this));
    ni(this, c.x, c.y, b);
    a.preventDefault()
};
g.wm = function() {
    A(!0);
    for (var a = yg(this, !0), b = 0, c = 0, d; d = a[c]; c++) {
        var e = d.ya();
        d.moveBy(-e.x, b - e.y);
        oi(d);
        b = d.ya().y + pi(d).height + 25
    }
    A(!1);
    Qg(this)
};

function ii(a, b) {
    function c(a) {
        if (Hg(a)) C = C.concat(a.jb());
        else {
            a = a.hd();
            for (var b = 0; b < a.length; b++) c(a[b])
        }
    }

    function d() {
        A(k);
        var a = C.shift();
        a && (a.A ? (a.D(!1, !0), setTimeout(d, 10)) : d());
        A(!1)
    }
    if (!a.options.i && !a.Eg) {
        var e = [],
            f = yg(a, !0),
            k = vg(),
            l = {};
        l.text = M.mm;
        l.enabled = 0 < a.j.length;
        l.Oa = a.eh.bind(a, !1);
        e.push(l);
        l = {};
        l.text = M.em;
        l.enabled = 0 < a.G.length;
        l.Oa = a.eh.bind(a, !0);
        e.push(l);
        a.Ka && (l = {}, l.text = M.Jj, l.enabled = 1 < f.length, l.Oa = a.wm.bind(a), e.push(l));
        if (a.options.s) {
            for (var p = l = !1, n = 0; n < f.length; n++)
                for (var r =
                        f[n]; r;) r.j ? l = !0 : p = !0, r = xd(r);
            var v = function(a) {
                    for (var b = 0, c = 0; c < f.length; c++)
                        for (var d = f[c]; d;) setTimeout(d.$c.bind(d, a), b), d = xd(d), b += 10
                },
                p = {
                    enabled: p
                };
            p.text = M.Kj;
            p.Oa = function() {
                v(!0)
            };
            e.push(p);
            l = {
                enabled: l
            };
            l.text = M.Zj;
            l.Oa = function() {
                v(!1)
            };
            e.push(l)
        }
        for (var C = [], n = 0; n < f.length; n++) c(f[n]);
        l = {
            text: 1 == C.length ? M.ph : M.qh.replace("%1", String(C.length)),
            enabled: 0 < C.length,
            Oa: function() {
                (2 > C.length || window.confirm(M.Vj.replace("%1", String(C.length)))) && d()
            }
        };
        e.push(l);
        ng.show(b, e, a.o)
    }
}

function qi(a, b, c) {
    if (b.length) {
        try {
            var d = new window.Audio
        } catch (p) {
            return
        }
        for (var e, f = 0; f < b.length; f++) {
            var k = b[f],
                l = k.match(/\.(\w+)$/);
            if (l && d.canPlayType("audio/" + l[1])) {
                e = new window.Audio(k);
                break
            }
        }
        e && e.play && (a.J[c] = e)
    }
}

function ri(a, b, c) {
    var d = a.J[b];
    d ? (b = new Date, b - a.kj < si || (a.kj = b, a = Fb && 9 === Fb || wb || ub ? d : d.cloneNode(), a.volume = void 0 === c ? 1 : c, a.play())) : a.options.Zb && ri(a.options.Zb, b, c)
}
g.Qd = function() {
    this.options.Zb ? this.options.Zb.Qd() : ti = this
};

function ni(a, b, c, d) {
    var e = a.options.g.nn,
        f = a.Ia(),
        k = Ah(a).createSVGPoint();
    k.x = b;
    k.y = c;
    k = k.matrixTransform(a.cb.getCTM().inverse());
    b = k.x;
    c = k.y;
    k = a.cb;
    e = 1 == d ? e : 1 / e;
    d = a.scale * e;
    d > a.options.g.ye ? e = a.options.g.ye / a.scale : d < a.options.g.ze && (e = a.options.g.ze / a.scale);
    a.scale != d && (a.Ka && (b = k.getCTM().translate(b * (1 - e), c * (1 - e)).scale(e), a.scrollX = b.e - f.Na, a.scrollY = b.f - f.$a), Mh(a, d))
}

function Nh(a, b) {
    var c = a.Ia();
    ni(a, c.ma / 2, c.Ca / 2, b)
}

function Mh(a, b) {
    a.options.g.ye && b > a.options.g.ye ? b = a.options.g.ye : a.options.g.ze && b < a.options.g.ze && (b = a.options.g.ze);
    a.scale = b;
    Wh(a);
    a.Ka ? a.Ka.resize() : a.translate(a.scrollX, a.scrollY);
    jh(!1);
    a.W && a.W.Pg()
}

function Wh(a) {
    if (a.options.j) {
        var b = a.options.h.spacing * a.scale || 100;
        a.options.j.setAttribute("width", b);
        a.options.j.setAttribute("height", b);
        var b = Math.floor(a.options.h.spacing / 2) + .5,
            c = b - a.options.h.length / 2,
            d = b + a.options.h.length / 2,
            e = a.options.j.firstChild,
            f = e && e.nextSibling,
            b = b * a.scale,
            c = c * a.scale,
            d = d * a.scale;
        e && (e.setAttribute("stroke-width", a.scale), e.setAttribute("x1", c), e.setAttribute("y1", b), e.setAttribute("x2", d), e.setAttribute("y2", b));
        f && (f.setAttribute("stroke-width", a.scale), f.setAttribute("x1",
            b), f.setAttribute("y1", c), f.setAttribute("x2", b), f.setAttribute("y2", d))
    }
}
Ph.prototype.setVisible = Ph.prototype.ga;
// Copyright 2013 Google Inc.  Apache License 2.0
function ui(a) {
    this.S = a
}
g = ui.prototype;
g.Ci = !0;
g.Ga = null;
g.md = null;

function vi(a) {
    a.g || (a.g = F("g", {
        "class": "blocklyIconGroup"
    }, null), a.pg(a.g), a.S.v.appendChild(a.g), G(a.g, "mouseup", a, a.Bg), a.Kc())
}
g.D = function() {
    y(this.g);
    this.g = null;
    this.ga(!1);
    this.S = null
};
g.Kc = function() {
    this.S.G || !Ig(this.S) ? pg(this.g, "blocklyIconGroupReadonly") : wi(this.g, "blocklyIconGroupReadonly")
};
g.$ = function() {
    return !!this.Ga
};
g.Bg = function(a) {
    2 != Ud && (this.S.G || dh(a) || this.ga(!this.$()))
};
g.Jc = function() {
    if (this.$()) {
        var a = this.Ga,
            b = this.S.ic;
        a.i.setAttribute("fill", b);
        a.j.setAttribute("fill", b)
    }
};

function xi(a) {
    var b = a.S.ya(),
        c = be(a.g),
        b = new w(b.x + c.x + 8.5, b.y + c.y + 8.5);
    Rc(a.md, b) || (a.md = b, a.$() && (a = a.Ga, a.ed = b, a.De && Wg(a)))
};

function yi(a) {
    yi.w.constructor.call(this, null);
    this.s = a
}
t(yi, ui);
g = yi.prototype;
g.Yd = 0;
g.Ke = 0;
g.pg = function(a) {
    F("rect", {
        "class": "blocklyIconShape",
        rx: "4",
        ry: "4",
        height: "16",
        width: "16"
    }, a);
    F("path", {
        "class": "blocklyIconSymbol",
        d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    }, a);
    F("circle", {
        "class": "blocklyIconShape",
        r: "2.7",
        cx: "8",
        cy: "8"
    }, a)
};
g.Bg = function(a) {
    Ig(this.S) && ui.prototype.Bg.call(this, a)
};

function zi(a) {
    a.i = F("svg", {
        x: Xg,
        y: Xg
    }, null);
    if (a.s.length)
        for (var b = x("xml"), c = 0, d; d = a.s[c]; c++) b.appendChild(x("block", {
            type: d
        }));
    else b = null;
    a.m = new Ph({
        Pd: b,
        Zb: a.S.A,
        $b: a.S.A.options.$b,
        o: a.S.o,
        ra: a.S.o ? 3 : 2,
        Hc: !1,
        Ia: a.Jm.bind(a),
        ad: null
    });
    a.i.appendChild(Qh(a.m, "blocklyMutatorBackground"));
    return a.i
}
g.Kc = function() {
    Ig(this.S) ? ui.prototype.Kc.call(this) : (this.ga(!1), this.g && pg(this.g, "blocklyIconGroupReadonly"))
};

function Ai(a) {
    var b = 2 * Xg,
        c = a.m.cb.getBBox(),
        d;
    a.S.o ? d = -c.x : d = c.width + c.x;
    c = c.height + 3 * b;
    if (a.m.W) var e = a.m.W.oe(),
        c = Math.max(c, e.fb + 20);
    d += 3 * b;
    if (Math.abs(a.Yd - d) > b || Math.abs(a.Ke - c) > b) a.Yd = d, a.Ke = c, Yg(a.Ga, d + b, c + b), a.i.setAttribute("width", a.Yd), a.i.setAttribute("height", a.Ke);
    a.S.o && a.m.cb.setAttribute("transform", "translate(" + a.Yd + ",0)");
    a.m.resize()
}
g.ga = function(a) {
    if (a != this.$())
        if (E(new Bi(this.S, "mutatorOpen", 0, a)), a) {
            this.Ga = new Tg(this.S.A, zi(this), this.S.V, this.md, null, null);
            if (a = this.m.options.Pd) this.m.W.C(this.m), this.m.W.show(a.childNodes);
            this.h = this.S.Fd(this.m);
            a = this.h.jb();
            for (var b = 0, c; c = a[b]; b++) c.U();
            this.h.Bf(!1);
            this.h.hg = !1;
            this.m.W ? (a = 2 * this.m.W.X, b = this.m.W.ea + a) : b = a = 16;
            this.S.o && (b = -b);
            this.h.moveBy(b, a);
            if (this.S.Ee) {
                var d = this;
                this.S.Ee(this.h);
                this.j = function() {
                    d.S.Ee(d.h)
                };
                this.S.A.yc(this.j)
            }
            Ai(this);
            this.m.yc(this.An.bind(this));
            this.Jc()
        } else this.i = null, this.m.D(), this.h = this.m = null, this.Ga.D(), this.Ga = null, this.Ke = this.Yd = 0, this.j && (this.S.A.Td(this.j), this.j = null)
};
g.An = function() {
    if (0 == Ud)
        for (var a = yg(this.m, !1), b = 0, c; c = a[b]; b++) {
            var d = c.ya(),
                e = pi(c);
            20 > d.y + e.height && c.moveBy(0, 20 - e.height - d.y)
        }
    if (this.h.A == this.m) {
        A(!0);
        c = this.S;
        a = (a = c.Ja()) && Jg(a);
        b = c.P;
        c.P = !1;
        c.Ed(this.h);
        c.P = b;
        c.pc();
        b = (b = c.Ja()) && Jg(b);
        if (a != b) {
            E(new Ci(c, "mutation", null, a, b));
            var f = Ad;
            setTimeout(function() {
                A(f);
                Sd(c);
                A(!1)
            }, Cd)
        }
        c.P && c.U();
        Ai(this);
        A(!1)
    }
};
g.Jm = function() {
    return {
        Ca: this.Ke,
        ma: this.Yd,
        $a: 0,
        Na: 0
    }
};
g.D = function() {
    this.S.wb = null;
    ui.prototype.D.call(this)
};

function Di(a, b, c) {
    if (!a || !a.u.A) return !1;
    c = I(b, c).I;
    var d = z(a);
    return d && d != b || c.N == a ? !1 : (c.N && ud(c), c.connect(a), !0)
}
h.Blockly || (h.Blockly = {});
h.Blockly.Mutator || (h.Blockly.Mutator = {});
h.Blockly.Mutator.reconnect = Di;
var N = {};

function Ei(a) {
    Ei.w.constructor.call(this, a);
    vi(this)
}
t(Ei, ui);
g = Ei.prototype;
g.wa = "";
g.ea = 160;
g.Hf = 80;
g.pg = function(a) {
    F("circle", {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    F("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.405 0.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25 -1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    F("rect", {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};

function Fi(a) {
    a.i = F("foreignObject", {
        x: Xg,
        y: Xg
    }, null);
    var b = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
    b.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    b.className = "blocklyMinimalBody";
    var c = document.createElementNS("http://www.w3.org/1999/xhtml", "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", a.S.o ? "RTL" : "LTR");
    b.appendChild(c);
    a.h = c;
    a.i.appendChild(b);
    G(c, "mouseup", a, a.tn);
    G(c, "wheel", a, function(a) {
        a.stopPropagation()
    });
    G(c, "change", a, function() {
        this.wa !=
            c.value && (E(new Ci(this.S, "comment", null, this.wa, c.value)), this.wa = c.value)
    });
    setTimeout(function() {
        c.focus()
    }, 0);
    return a.i
}
g.Kc = function() {
    this.$() && (this.ga(!1), this.ga(!0));
    ui.prototype.Kc.call(this)
};
g.Cj = function() {
    if (this.$()) {
        var a = lh(this.Ga),
            b = 2 * Xg;
        this.i.setAttribute("width", a.width - b);
        this.i.setAttribute("height", a.height - b);
        this.h.style.width = a.width - b - 4 + "px";
        this.h.style.height = a.height - b - 4 + "px"
    }
};
g.ga = function(a) {
    if (a != this.$())
        if (E(new Bi(this.S, "commentOpen", 0, a)), !Ig(this.S) && !this.h || u) Gi.prototype.ga.call(this, a);
        else {
            var b = this.h ? this.h.value : this.wa,
                c = Fg(this);
            a ? (this.Ga = new Tg(this.S.A, Fi(this), this.S.V, this.md, this.ea, this.Hf), this.Ga.Qg = this.Cj.bind(this), this.Jc()) : (this.Ga.D(), this.i = this.h = this.Ga = null);
            Hi(this, b);
            Rg(this, c.width, c.height)
        }
};
g.tn = function() {
    ch(this.Ga);
    this.h.focus()
};

function Fg(a) {
    return a.$() ? lh(a.Ga) : {
        width: a.ea,
        height: a.Hf
    }
}

function Rg(a, b, c) {
    a.h ? Yg(a.Ga, b, c) : (a.ea = b, a.Hf = c)
}

function Hi(a, b) {
    a.wa != b && (E(new Ci(a.S, "comment", null, a.wa, b)), a.wa = b);
    a.h && (a.h.value = b)
}
g.D = function() {
    0 == B && Hi(this, "");
    this.S.Aa = null;
    ui.prototype.D.call(this)
};
var Ii = !1,
    Ji = 0,
    Ki = 0,
    Li = 0,
    Mi = 0,
    Ni = null,
    Oi = null,
    Pi = null;

function Qi(a) {
    G(a, "mouseover", null, Ri);
    G(a, "mouseout", null, Si);
    G(a, "mousemove", null, Ti)
}

function Ri(a) {
    for (a = a.target; !m(a.sa) && !fa(a.sa);) a = a.sa;
    Ni != a && (Ui(), Oi = null, Ni = a);
    clearTimeout(Ji)
}

function Si() {
    Ji = setTimeout(function() {
        Oi = Ni = null;
        Ui()
    }, 1);
    clearTimeout(Ki)
}

function Ti(a) {
    if (Ni && Ni.sa && 0 == Ud && !Vi)
        if (Ii) {
            var b = Li - a.pageX;
            a = Mi - a.pageY;
            10 < Math.sqrt(b * b + a * a) && Ui()
        } else Oi != Ni && (clearTimeout(Ki), Li = a.pageX, Mi = a.pageY, Ki = setTimeout(Wi, 750))
}

function Ui() {
    Ii && (Ii = !1, Pi && (Pi.style.display = "none"));
    clearTimeout(Ki)
}

function Wi() {
    Oi = Ni;
    if (Pi) {
        ed(Pi);
        for (var a = Ni.sa; fa(a);) a = a();
        var b = a,
            a = 50;
        if (b.length <= a) a = b;
        else {
            for (var c = b.trim().split(/\s+/), d = 0; d < c.length; d++) c[d].length > a && (a = c[d].length);
            var e, d = -Infinity,
                f, k = 1;
            do {
                e = d;
                f = b;
                for (var b = [], l = c.length / k, p = 1, d = 0; d < c.length - 1; d++) p < (d + 1.5) / l ? (p++, b[d] = !0) : b[d] = !1;
                for (var b = Xi(c, b, a), d = Yi(c, b, a), l = c, p = [], n = 0; n < l.length; n++) p.push(l[n]), void 0 !== b[n] && p.push(b[n] ? "\n" : " ");
                b = p.join("");
                k++
            } while (d > e);
            a = f
        }
        a = a.split("\n");
        for (c = 0; c < a.length; c++) e = document.createElement("div"),
            e.appendChild(document.createTextNode(a[c])), Pi.appendChild(e);
        a = Ni.o;
        c = $c();
        Pi.style.direction = a ? "rtl" : "ltr";
        Pi.style.display = "block";
        Ii = !0;
        e = Li;
        e = a ? e - (0 + Pi.offsetWidth) : e + 0;
        f = Mi + 10;
        f + Pi.offsetHeight > c.height + window.scrollY && (f -= Pi.offsetHeight + 20);
        a ? e = Math.max(5 - window.scrollX, e) : e + Pi.offsetWidth > c.width + window.scrollX - 10 && (e = c.width - Pi.offsetWidth - 10);
        Pi.style.top = f + "px";
        Pi.style.left = e + "px"
    }
}

function Yi(a, b, c) {
    for (var d = [0], e = [], f = 0; f < a.length; f++) d[d.length - 1] += a[f].length, !0 === b[f] ? (d.push(0), e.push(a[f].charAt(a[f].length - 1))) : !1 === b[f] && d[d.length - 1]++;
    a = Math.max.apply(Math, d);
    for (f = b = 0; f < d.length; f++) b -= 2 * Math.pow(Math.abs(c - d[f]), 1.5), b -= Math.pow(a - d[f], 1.5), -1 != ".?!".indexOf(e[f]) ? b += c / 3 : -1 != ",;)]}".indexOf(e[f]) && (b += c / 4);
    1 < d.length && d[d.length - 1] <= d[d.length - 2] && (b += .5);
    return b
}

function Xi(a, b, c) {
    for (var d = Yi(a, b, c), e, f = 0; f < b.length - 1; f++)
        if (b[f] != b[f + 1]) {
            var k = [].concat(b);
            k[f] = !k[f];
            k[f + 1] = !k[f + 1];
            var l = Yi(a, k, c);
            l > d && (d = l, e = k)
        }
    return e ? Xi(a, e, c) : b
};

function Zi(a, b) {
    this.s = new Ic(0, 25);
    this.ha(a);
    this.Ge(b)
}
var $i = null,
    aj = 0;
g = Zi.prototype;
g.name = void 0;
g.wa = "";
g.u = null;
g.dd = !0;
g.Ya = null;
g.yd = !0;
g.C = function() {
    this.g || (this.g = F("g", {}, null), this.dd || (this.g.style.display = "none"), this.j = F("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: 0,
        height: 16
    }, this.g), this.h = F("text", {
        "class": "blocklyText",
        y: this.s.height - 12.5
    }, this.g), this.Kc(), this.u.v.appendChild(this.g), this.H = G(this.g, "mouseup", this, this.Dj), bj(this), 0 == B && E(new Ci(this.u, "field", this.name, "", this.ab())))
};
g.D = function() {
    this.H && (J(this.H), this.H = null);
    this.u = null;
    y(this.g);
    this.Ya = this.j = this.h = this.g = null
};
g.Kc = function() {
    this.yd && this.u && (Ig(this.u) ? (pg(this.g, "blocklyEditableText"), wi(this.g, "blocklyNoNEditableText"), this.g.style.cursor = this.Pe) : (pg(this.g, "blocklyNonEditableText"), wi(this.g, "blocklyEditableText"), this.g.style.cursor = ""))
};
g.$ = function() {
    return this.dd
};
g.ga = function(a) {
    if (this.dd != a) {
        this.dd = a;
        var b = this.If();
        b && (b.style.display = a ? "block" : "none", this.Jf())
    }
};
g.Ge = function(a) {
    this.Ya = a
};
g.If = function() {
    return this.g
};
g.Jf = function() {
    if (this.dd && this.h) {
        var a = this.h.textContent + "\n" + this.h.className.baseVal;
        if ($i && $i[a]) var b = $i[a];
        else {
            try {
                b = this.h.getComputedTextLength()
            } catch (c) {
                b = 8 * this.h.textContent.length
            }
            $i && ($i[a] = b)
        }
        this.j && this.j.setAttribute("width", b + 10)
    } else b = 0;
    this.s.width = b
};

function Mg() {
    aj++;
    $i || ($i = {})
}

function Ng() {
    aj--;
    aj || ($i = null)
}

function cj(a) {
    var b = a.j.getBBox();
    return new Ic(b.width * a.u.A.scale, b.height * a.u.A.scale)
}
g.cd = function() {
    return this.wa
};
g.Cb = function(a) {
    null !== a && (a = String(a), a !== this.wa && (this.wa = a, bj(this), this.u && this.u.P && (this.u.U(), Sd(this.u))))
};

function bj(a) {
    if (a.h) {
        var b = a.wa;
        50 < b.length && (b = b.substring(0, 48) + "\u2026");
        ed(a.h);
        b = b.replace(/\s/g, "\u00a0");
        a.u.o && b && (b += "\u200f");
        b || (b = "\u00a0");
        a.h.appendChild(document.createTextNode(b));
        a.s.width = 0
    }
}
g.ab = function() {
    return this.cd()
};
g.ha = function(a) {
    if (null !== a) {
        var b = this.ab();
        b != a && (this.u && 0 == B && E(new Ci(this.u, "field", this.name, b, a)), this.Cb(a))
    }
};
g.Dj = function(a) {
    if (!vb && !wb || Db("537.51.2") || 0 === a.layerX || 0 === a.layerY) dh(a) || 2 != Ud && Ig(this.u) && this.vd()
};

function dj(a, b) {
    this.s = new Ic(0, 17.5);
    this.i = b;
    this.ha(a)
}
t(dj, Zi);
dj.prototype.yd = !1;
dj.prototype.C = function() {
    this.h || (this.h = F("text", {
        "class": "blocklyText",
        y: this.s.height - 5
    }, null), this.i && pg(this.h, this.i), this.dd || (this.h.style.display = "none"), this.u.v.appendChild(this.h), this.h.sa = this.u, Qi(this.h), bj(this))
};
dj.prototype.D = function() {
    y(this.h);
    this.h = null
};
dj.prototype.If = function() {
    return this.h
};

function ej(a, b, c, d) {
    this.type = a;
    this.name = b;
    this.u = c;
    this.I = d;
    this.Ea = []
}
g = ej.prototype;
g.align = -1;
g.Kf = !0;

function O(a, b, c) {
    if (!b && !c) return a;
    m(b) && (b = new dj(b));
    b.u = a.u;
    a.u.P && b.C();
    b.name = c;
    b.L && O(a, b.L);
    a.Ea.push(b);
    b.O && O(a, b.O);
    a.u.P && (a.u.U(), Sd(a.u));
    return a
}

function fj(a, b) {
    for (var c = 0, d; d = a.Ea[c]; c++)
        if (d.name === b) {
            d.D();
            a.Ea.splice(c, 1);
            a.u.P && (a.u.U(), Sd(a.u));
            break
        }
}
g.$ = function() {
    return this.Kf
};
g.ga = function(a) {
    var b = [];
    if (this.Kf == a) return b;
    for (var c = (this.Kf = a) ? "block" : "none", d = 0, e; e = this.Ea[d]; d++) e.ga(a);
    if (this.I) {
        if (a) b = de(this.I);
        else if (d = this.I, ee(d, !0), d.N)
            for (d = z(d).jb(), e = 0; e < d.length; e++) {
                for (var f = d[e], k = f.mc(!0), l = 0; l < k.length; l++) ee(k[l], !0);
                f = gj(f);
                for (k = 0; k < f.length; k++) f[k].ga(!1)
            }
        if (d = z(this.I)) d.v.style.display = c, a || (d.P = !1)
    }
    return b
};

function hj(a, b) {
    if (!a.I) throw "This input does not have a connection.";
    Qd(a.I, b);
    return a
}

function ij(a, b) {
    a.align = b;
    a.u.P && a.u.U();
    return a
}
g.C = function() {
    if (this.u.A.P)
        for (var a = 0; a < this.Ea.length; a++) this.Ea[a].C()
};
g.D = function() {
    for (var a = 0, b; b = this.Ea[a]; a++) b.D();
    this.I && this.I.D();
    this.u = null
};

function Gi(a) {
    Gi.w.constructor.call(this, a);
    vi(this);
    this.wa = {}
}
t(Gi, ui);
Gi.prototype.Ci = !1;
Gi.prototype.pg = function(a) {
    F("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    F("path", {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    F("rect", {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
Gi.prototype.ga = function(a) {
    if (a != this.$())
        if (E(new Bi(this.S, "warningOpen", 0, a)), a) {
            var b = jj(this);
            a = F("text", {
                "class": "blocklyText blocklyBubbleText",
                y: Xg
            }, null);
            for (var b = b.split("\n"), c = 0; c < b.length; c++) F("tspan", {
                dy: "1em",
                x: Xg
            }, a).appendChild(document.createTextNode(b[c]));
            this.Ga = new Tg(this.S.A, a, this.S.V, this.md, null, null);
            if (this.S.o)
                for (var b = a.getBBox().width, c = 0, d; d = a.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", b + Xg);
            this.Jc();
            a = lh(this.Ga);
            Yg(this.Ga, a.width,
                a.height)
        } else this.Ga.D(), this.Ga = null
};

function kj(a, b, c) {
    a.wa[c] != b && (b ? a.wa[c] = b : delete a.wa[c], a.$() && (a.ga(!1), a.ga(!0)))
}

function jj(a) {
    var b = [],
        c;
    for (c in a.wa) b.push(a.wa[c]);
    return b.join("\n")
}
Gi.prototype.D = function() {
    this.S.Bb = null;
    ui.prototype.D.call(this)
};

function zg(a, b, c) {
    this.id = c && !a.gc[c] ? c : vg();
    a.gc[this.id] = this;
    this.T = this.g = this.K = null;
    this.h = [];
    this.Fa = void 0;
    this.disabled = !1;
    this.sa = "";
    this.Ta = !0;
    this.O = null;
    this.L = [];
    this.ee = this.fe = this.hg = !0;
    this.j = this.s = !1;
    this.Aa = null;
    this.Wf = new w(0, 0);
    this.A = a;
    this.G = a.Eg;
    this.o = a.o;
    if (b) {
        this.type = b;
        b = N[b];
        for (var d in b) this[d] = b[d]
    }
    a.i.push(this);
    fa(this.C) && this.C();
    this.wi = this.Fa;
    0 == B && E(new tg(this));
    fa(this.onchange) && (this.Lc = this.onchange.bind(this), this.A.yc(this.Lc))
}
g = zg.prototype;
g.data = null;
g.ic = "#000000";
g.D = function(a) {
    this.Lc && this.A.Td(this.Lc);
    Rd(this, a);
    0 == B && E(new lj(this));
    B++;
    this.A && (xg(this.A, this), delete this.A.gc[this.id], this.A = null);
    for (a = this.L.length - 1; 0 <= a; a--) this.L[a].D(!1);
    a = 0;
    for (var b; b = this.h[a]; a++) b.D();
    this.h.length = 0;
    b = this.mc(!0);
    for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.N && ud(c);
        b[a].D()
    }
    B--
};

function Rd(a, b) {
    if (a.K) a.K.N && ud(a.K);
    else if (a.T) {
        var c = null;
        a.T.N && (c = a.T.N, ud(a.T));
        var d = xd(a);
        b && d && (d = a.g.N, ud(d), c && yd(c, d) && c.connect(d))
    }
}
g.mc = function() {
    var a = [];
    this.K && a.push(this.K);
    this.T && a.push(this.T);
    this.g && a.push(this.g);
    for (var b = 0, c; c = this.h[b]; b++) c.I && a.push(c.I);
    return a
};

function Sd(a) {
    if (a.A && 0 == Ud) {
        var b = Vd(a);
        if (!b.G) {
            a = a.mc(!1);
            for (var c = 0, d; d = a[c]; c++) {
                d.N && Jd(d) && Sd(z(d));
                var e;
                e = Fh(d.je, d);
                for (var f = 0, k; k = e[f]; f++) d.N && k.N || Vd(k.u) != b && (Jd(d) ? Bd(k, d) : Bd(d, k))
            }
        }
    }
}
g.getParent = function() {
    return this.O
};

function mj(a) {
    do {
        var b = a;
        a = a.getParent();
        if (!a) return null
    } while (xd(a) == b);
    return a
}

function xd(a) {
    return a.g && z(a.g)
}

function Vd(a) {
    var b = a;
    do a = b, b = a.O; while (b);
    return a
}
g.hd = function() {
    return this.L
};
g.Le = function(a) {
    if (a != this.O) {
        if (this.O) {
            for (var b = this.O.L, c, d = 0; c = b[d]; d++)
                if (c == this) {
                    b.splice(d, 1);
                    break
                }
            if (this.T && this.T.N) throw "Still connected to previous block.";
            if (this.K && this.K.N) throw "Still connected to parent block.";
            this.O = null
        } else xg(this.A, this);
        (this.O = a) ? a.L.push(this): this.A.i.push(this)
    }
};
g.jb = function() {
    for (var a = [this], b, c = 0; b = this.L[c]; c++) a.push.apply(a, b.jb());
    return a
};

function Hg(a) {
    return a.hg && !a.s && !(a.A && a.A.options.i)
}

function Ld(a) {
    return a.fe && !a.s && !(a.A && a.A.options.i)
}
g.Bf = function(a) {
    this.fe = a
};
g.Xg = function(a) {
    this.s = a
};

function Ig(a) {
    return a.ee && !(a.A && a.A.options.i)
}
g.Ug = function(a) {
    this.ee = a;
    a = 0;
    for (var b; b = this.h[a]; a++)
        for (var c = 0, d; d = b.Ea[c]; c++) d.Kc()
};

function Pg(a, b) {
    if (!b && a.j) {
        if (a.K && ee(a.K, b), a.T && ee(a.T, b), a.g) {
            ee(a.g, b);
            var c = z(a.g);
            c && Pg(c, b)
        }
    } else
        for (var d = a.mc(!0), e = 0; c = d[e]; e++) ee(c, b), Jd(c) && (c = z(c)) && Pg(c, b)
}

function nj(a, b) {
    a.sa = b
}
g.ua = function(a) {
    var b = parseFloat(a);
    if (isNaN(b))
        if (m(a) && a.match(/^#[0-9a-fA-F]{6}$/)) this.ic = a;
        else throw "Invalid colour: " + a;
    else this.ic = oj(pj(b))
};

function Sg(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.Ea[e]; e++)
            if (f.name === b) return f;
    return null
}
g.lf = function() {
    for (var a = [], b = 0, c; c = this.h[b]; b++)
        for (var d = 0, e; e = c.Ea[d]; d++) e instanceof qj && a.push(e.ab());
    return a
};
g.sd = function(a, b) {
    for (var c = 0, d; d = this.h[c]; c++)
        for (var e = 0, f; f = d.Ea[e]; e++) f instanceof qj && rj(a, f.ab()) && f.ha(b)
};

function P(a, b) {
    var c = Sg(a, b);
    return c ? c.ab() : null
}
g.Pb = function(a, b) {
    a ? (void 0 === b && (b = null), this.T || (this.T = this.xe(4)), Qd(this.T, b)) : this.T && (this.T.D(), this.T = null)
};
g.Ob = function(a, b) {
    a ? (void 0 === b && (b = null), this.g || (this.g = this.xe(3)), Qd(this.g, b)) : this.g && (this.g.D(), this.g = null)
};
g.mb = function(a, b) {
    a ? (void 0 === b && (b = null), this.K || (this.K = this.xe(2)), Qd(this.K, b)) : this.K && (this.K.D(), this.K = null)
};
g.kb = function(a) {
    this.Fa != a && (E(new Ci(this, "inline", null, this.Fa, a)), this.Fa = a)
};

function sj(a) {
    if (void 0 != a.Fa) return a.Fa;
    for (var b = 1; b < a.h.length; b++)
        if (5 == a.h[b - 1].type && 5 == a.h[b].type) return !1;
    for (b = 1; b < a.h.length; b++)
        if (1 == a.h[b - 1].type && 5 == a.h[b].type) return !0;
    return !1
}
g.Vd = function(a) {
    this.disabled != a && (E(new Ci(this, "disabled", null, this.disabled, a)), this.disabled = a)
};

function tj(a) {
    for (;;) {
        a = mj(a);
        if (!a) return !1;
        if (a.disabled) return !0
    }
}
g.$c = function(a) {
    this.j != a && (E(new Ci(this, "collapsed", null, this.j, a)), this.j = a)
};
g.toString = function(a) {
    var b = [];
    if (this.j) b.push(I(this, "_TEMP_COLLAPSED_INPUT").Ea[0].wa);
    else
        for (var c = 0, d; d = this.h[c]; c++) {
            for (var e = 0, f; f = d.Ea[e]; e++) b.push(f.cd());
            d.I && ((d = z(d.I)) ? b.push(d.toString()) : b.push("?"))
        }
    b = ra(b.join(" ")) || "???";
    a && b.length > a && (b = b.substring(0, a - 3) + "...");
    return b
};

function Q(a, b) {
    return a.ub(1, b)
}

function R(a, b) {
    return a.ub(5, b || "")
}

function S(a, b) {
    void 0 !== b.colour && a.ua(b.colour);
    for (var c = 0; void 0 !== b["message" + c];) {
        var d = a,
            e = b["args" + c] || [],
            f = b["lastDummyAlign" + c],
            k, l = [],
            p = b["message" + c].split("");
        p.push("");
        k = 0;
        for (var n = [], r = null, v = 0; v < p.length; v++) {
            var C = p[v];
            0 == k ? "%" == C ? k = 1 : n.push(C) : 1 == k ? "%" == C ? (n.push(C), k = 0) : "0" <= C && "9" >= C ? (k = 2, r = C, (C = n.join("")) && l.push(C), n.length = 0) : (n.push("%", C), k = 0) : 2 == k && ("0" <= C && "9" >= C ? r += C : (l.push(parseInt(r, 10)), v--, k = 0))
        }(C = n.join("")) && l.push(C);
        k = l;
        n = 0;
        l = [];
        for (p = 0; p < k.length; p++) r = k[p],
            "number" == typeof r ? (n++, l.push(e[r - 1])) : (r = r.trim()) && l.push(r);
        !l.length || "string" != typeof l[l.length - 1] && 0 != l[l.length - 1].type.indexOf("field_") || (e = {
            type: "input_dummy"
        }, f && (e.align = f), l.push(e));
        f = {
            LEFT: -1,
            RIGHT: 1,
            CENTRE: 0
        };
        e = [];
        for (p = 0; p < l.length; p++)
            if (n = l[p], "string" == typeof n) e.push([n, void 0]);
            else {
                k = r = null;
                do switch (v = !1, n.type) {
                    case "input_value":
                        k = Q(d, n.name);
                        break;
                    case "input_statement":
                        k = d.ub(3, n.name);
                        break;
                    case "input_dummy":
                        k = R(d, n.name);
                        break;
                    case "field_label":
                        r = new dj(n.text, n["class"]);
                        break;
                    case "field_input":
                        r = new uj(n.text);
                        "boolean" == typeof n.spellcheck && (r.Df = n.spellcheck);
                        break;
                    case "field_angle":
                        r = new vj(n.angle);
                        break;
                    case "field_checkbox":
                        r = new wj(n.checked ? "TRUE" : "FALSE");
                        break;
                    case "field_colour":
                        r = new xj(n.colour);
                        break;
                    case "field_variable":
                        r = new qj(n.variable);
                        break;
                    case "field_dropdown":
                        r = new yj(n.options);
                        break;
                    case "field_image":
                        r = new zj(n.src, n.width, n.height, n.alt);
                        break;
                    case "field_number":
                        r = new Aj(n.text);
                        break;
                    case "field_date":
                        if (pd.Of) {
                            r = new pd.Of(n.date);
                            break
                        }
                    default:
                        n.alt && (n = n.alt, v = !0)
                }
                while (v);
                if (r) e.push([r, n.name]);
                else if (k) {
                    n.check && hj(k, n.check);
                    n.align && ij(k, f[n.align]);
                    for (n = 0; n < e.length; n++) O(k, e[n][0], e[n][1]);
                    e.length = 0
                }
            }
        c++
    }
    void 0 !== b.inputsInline && a.kb(b.inputsInline);
    void 0 !== b.output && a.mb(!0, b.output);
    void 0 !== b.previousStatement && a.Pb(!0, b.previousStatement);
    void 0 !== b.nextStatement && a.Ob(!0, b.nextStatement);
    void 0 !== b.tooltip && (a.sa = b.tooltip);
    void 0 !== b.helpUrl && (a.i = b.helpUrl)
}
g.ub = function(a, b) {
    var c = null;
    if (1 == a || 3 == a) c = this.xe(a);
    c = new ej(a, b, this, c);
    this.h.push(c);
    return c
};

function Bj(a, b, c) {
    if (b != c) {
        for (var d = -1, e = c ? -1 : a.h.length, f = 0, k; k = a.h[f]; f++)
            if (k.name == b) {
                if (d = f, -1 != e) break
            } else if (c && k.name == c && (e = f, -1 != d)) break;
        a.Kg(d, e)
    }
}
g.Kg = function(a, b) {
    var c = this.h[a];
    this.h.splice(a, 1);
    a < b && b--;
    this.h.splice(b, 0, c)
};
g.Wa = function(a) {
    for (var b = 0, c; c = this.h[b]; b++)
        if (c.name == a) {
            c.I && c.I.N && (c.I.qc = null, a = z(c.I), a.s ? a.D() : Rd(a));
            c.D();
            this.h.splice(b, 1);
            break
        }
};

function I(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        if (d.name == b) return d;
    return null
}

function Cj(a, b) {
    var c = I(a, b);
    return c && c.I && z(c.I)
}
g.ef = function() {
    return this.Aa || ""
};
g.td = function(a) {
    this.Aa != a && (E(new Ci(this, "comment", null, this.Aa, a || "")), this.Aa = a)
};
g.Xa = function() {};
g.ud = function() {};
g.ya = function() {
    return this.Wf
};
g.moveBy = function(a, b) {
    var c = new Dd(this);
    this.Wf.translate(a, b);
    Fd(c);
    E(c)
};
g.xe = function(a) {
    return new sd(this, a)
};

function Xh(a, b, c) {
    this.v = F("g", {}, null);
    this.Db = F("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.v);
    this.V = F("path", {
        "class": "blocklyPath"
    }, this.v);
    this.Ua = F("path", {
        "class": "blocklyPathLight"
    }, this.v);
    this.V.sa = this;
    this.P = !1;
    Qi(this.V);
    Xh.w.constructor.call(this, a, b, c)
}
t(Xh, zg);
g = Xh.prototype;
g.height = 0;
g.width = 0;
g.le = null;
g.pc = function() {
    for (var a = 0, b; b = this.h[a]; a++) b.C();
    b = gj(this);
    for (a = 0; a < b.length; a++) vi(b[a]);
    this.Jc();
    Dj(this);
    if (!this.A.options.i && !this.ti) {
        G(this.v, "mousedown", this, this.Zd);
        var c = this;
        G(this.v, "touchstart", null, function(a) {
            Th(a, c)
        })
    }
    this.ti = !0;
    this.v.parentNode || this.A.cb.appendChild(this.v)
};
g.select = function() {
    if (this.s && this.getParent()) this.getParent().select();
    else if (L != this) {
        L && (B++, ci(L), B--);
        var a = new Bi(null, "selected", 0, this.id);
        a.g = this.A.id;
        E(a);
        L = this;
        this.Xf()
    }
};

function ci(a) {
    if (L == a) {
        var b = new Bi(null, "selected", 0, null);
        b.g = a.A.id;
        E(b);
        L = null;
        a.yf()
    }
}
g.wb = null;
g.Aa = null;
g.Bb = null;

function gj(a) {
    var b = [];
    a.wb && b.push(a.wb);
    a.Aa && b.push(a.Aa);
    a.Bb && b.push(a.Bb);
    return b
}
var Ej = null,
    Fj = null;

function Gj() {
    Hj();
    Ej && (J(Ej), Ej = null);
    Fj && (J(Fj), Fj = null);
    var a = L;
    if (2 == Ud && a) {
        var b = a.ya(),
            b = Tc(b, a.le),
            c = new Dd(a);
        c.H = a.le;
        Fd(c);
        E(c);
        ce(a, b.x, b.y);
        delete a.ec;
        Ij(a, !1);
        a.U();
        var d = Ad;
        setTimeout(function() {
            A(d);
            oi(a);
            A(!1)
        }, Cd / 2);
        setTimeout(function() {
            A(d);
            Sd(a);
            A(!1)
        }, Cd);
        Qg(a.A)
    }
    Ud = 0;
    fh(Jj)
}
g = Xh.prototype;
g.Le = function(a) {
    if (a != this.O) {
        var b = this.v;
        if (this.O && b) {
            var c = this.ya();
            this.A.cb.appendChild(b);
            b.setAttribute("transform", "translate(" + c.x + "," + c.y + ")")
        }
        Mg();
        Xh.w.Le.call(this, a);
        Ng();
        a && (c = this.ya(), a.v.appendChild(b), a = this.ya(), ce(this, a.x - c.x, a.y - c.y))
    }
};
g.ya = function() {
    var a = 0,
        b = 0,
        c = this.v;
    if (c) {
        do var d = be(c),
            a = a + d.x,
            b = b + d.y,
            c = c.parentNode; while (c && c != this.A.cb)
    }
    return new w(a, b)
};
g.moveBy = function(a, b) {
    var c = new Dd(this),
        d = this.ya();
    this.v.setAttribute("transform", "translate(" + (d.x + a) + "," + (d.y + b) + ")");
    ce(this, a, b);
    Fd(c);
    E(c)
};

function oi(a) {
    if (a.A && 0 == Ud && !a.getParent() && !a.G && a.A.options.h && a.A.options.h.snap) {
        var b = a.A.options.h.spacing,
            c = b / 2,
            d = a.ya(),
            e = Math.round((d.x - c) / b) * b + c - d.x,
            b = Math.round((d.y - c) / b) * b + c - d.y,
            e = Math.round(e),
            b = Math.round(b);
        0 == e && 0 == b || a.moveBy(e, b)
    }
}

function pi(a) {
    var b = a.height,
        c = a.width,
        d = xd(a);
    d ? (a = pi(d), b += a.height - 4, c = Math.max(c, a.width)) : a.g || a.K || (b += 2);
    return {
        height: b,
        width: c
    }
}

function Kj(a) {
    var b = a.ya(a),
        c = a.K ? 8 : 0,
        d = pi(a);
    a.o ? (a = new w(b.x - (d.width - c), b.y), b = new w(b.x + c, b.y + d.height)) : (a = new w(b.x - c, b.y), b = new w(b.x + d.width - c, b.y + d.height));
    return {
        Qb: a,
        hc: b
    }
}
g.$c = function(a) {
    if (this.j != a) {
        for (var b = [], c = 0, d; d = this.h[c]; c++) b.push.apply(b, d.ga(!a));
        if (a) {
            d = gj(this);
            for (c = 0; c < d.length; c++) d[c].ga(!1);
            c = this.toString(Lj);
            O(R(this, "_TEMP_COLLAPSED_INPUT"), c).C()
        } else this.Wa("_TEMP_COLLAPSED_INPUT"), this.Xa(null);
        Xh.w.$c.call(this, a);
        b.length || (b[0] = this);
        if (this.P)
            for (c = 0; a = b[c]; c++) a.U()
    }
};
g.tab = function(a, b) {
    for (var c = [], d = 0, e; e = this.h[d]; d++) {
        for (var f = 0, k; k = e.Ea[f]; f++) k instanceof uj && c.push(k);
        e.I && (e = z(e.I)) && c.push(e)
    }
    d = c.indexOf(a); - 1 == d && (d = b ? -1 : c.length);
    (c = c[b ? d + 1 : d - 1]) ? c instanceof Zi ? c.vd() : c.tab(null, b): (c = this.getParent()) && c.tab(this, b)
};
g.Zd = function(a) {
    if (!this.A.options.i)
        if (this.G) a.stopPropagation();
        else {
            this.A.Qd();
            fi();
            this.select();
            jh();
            var b = this.A;
            b.ob ? b.V = b.ob.ne() : b.V = null;
            b.W ? b.H = b.W.ne() : b.Z ? b.H = b.Z.ne() : b.H = null;
            if (dh(a)) Mj(this, a);
            else if (Ld(this)) {
                Ad || A(!0);
                fh(gh);
                this.le = this.ya();
                hh(this.A, a, this.le);
                Ud = 1;
                Ej = G(document, "mouseup", this, this.Bj);
                Fj = G(document, "mousemove", this, this.Aj);
                this.ec = [];
                for (var b = this.jb(), c = 0, d; d = b[c]; c++) {
                    d = gj(d);
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e].md;
                        f.sm = d[e];
                        this.ec.push(f)
                    }
                }
            } else return;
            a.stopPropagation();
            a.preventDefault()
        }
};
g.Bj = function(a) {
    2 == Ud || Vi || E(new Bi(this, "click", 0, void 0));
    fi();
    if (L && Hd) {
        Id.connect(Hd);
        if (this.P && (a = (Jd(Id) ? Hd : Id).u, ri(a.A, "click"), !(1 > a.A.scale))) {
            var b = Bh(a.v, a.A);
            a.K ? (b.x += (a.o ? 3 : -3) * a.A.scale, b.y += 13 * a.A.scale) : a.T && (b.x += (a.o ? -23 : 23) * a.A.scale, b.y += 3 * a.A.scale);
            b = F("circle", {
                cx: b.x,
                cy: b.y,
                r: 0,
                fill: "none",
                stroke: "#888",
                "stroke-width": 10
            }, Ah(a.A));
            Nj(b, new Date, a.A.scale)
        }
        this.A.ob && this.A.ob.close()
    } else !this.getParent() && Hg(L) && gi(this.A, a) && ((a = this.A.ob) && ec(a.close, 100, a), a = L.A, L.D(!1, !0), Qg(a));
    Hd && (fe(), Hd = null);
    fh(Jj);
    Vi || A(!1)
};

function Mj(a, b) {
    if (!a.A.options.i && a.Ta) {
        var c = [];
        if (Hg(a) && Ld(a) && !a.G) {
            var d = {
                text: M.Xj,
                enabled: !0,
                Oa: function() {
                    var b = ei,
                        c = Oj;
                    Pj(a);
                    di(a.A);
                    ei = b;
                    Oj = c
                }
            };
            a.jb().length > Ag(a.A) && (d.enabled = !1);
            c.push(d);
            Ig(a) && !a.j && a.A.options.H && (d = {
                enabled: !u
            }, a.Aa ? (d.text = M.gm, d.Oa = function() {
                a.td(null)
            }) : (d.text = M.yj, d.Oa = function() {
                a.td("")
            }), c.push(d));
            if (!a.j)
                for (d = 1; d < a.h.length; d++)
                    if (3 != a.h[d - 1].type && 3 != a.h[d].type) {
                        var d = {
                                enabled: !0
                            },
                            e = sj(a);
                        d.text = e ? M.ak : M.dk;
                        d.Oa = function() {
                            a.kb(!e)
                        };
                        c.push(d);
                        break
                    }
            a.A.options.s &&
                (a.j ? (d = {
                    enabled: !0
                }, d.text = M.$j, d.Oa = function() {
                    a.$c(!1)
                }, c.push(d)) : (d = {
                    enabled: !0
                }, d.text = M.Lj, d.Oa = function() {
                    a.$c(!0)
                }, c.push(d)));
            a.A.options.J && (d = {
                text: a.disabled ? M.Yj : M.Wj,
                enabled: !tj(a),
                Oa: function() {
                    a.Vd(!a.disabled)
                }
            }, c.push(d));
            var d = a.jb().length,
                f = xd(a);
            f && (d -= f.jb().length);
            d = {
                text: 1 == d ? M.ph : M.qh.replace("%1", String(d)),
                enabled: !0,
                Oa: function() {
                    A(!0);
                    a.D(!0, !0);
                    A(!1)
                }
            };
            c.push(d)
        }
        d = {
            enabled: !(fa(a.i) ? !a.i() : !a.i)
        };
        d.text = M.ck;
        d.Oa = function() {
            var b = fa(a.i) ? a.i() : a.i;
            b && window.open(b)
        };
        c.push(d);
        a.jc && !a.G && a.jc(c);
        ng.show(b, c, a.o);
        ng.We = a
    }
}

function ce(a, b, c) {
    if (a.P) {
        for (var d = a.mc(!1), e = 0; e < d.length; e++) d[e].moveBy(b, c);
        d = gj(a);
        for (e = 0; e < d.length; e++) xi(d[e]);
        for (e = 0; e < a.L.length; e++) ce(a.L[e], b, c)
    }
}

function Ij(a, b) {
    if (b) {
        var c = a.v;
        c.h = "";
        c.g = "";
        pg(a.v, "blocklyDragging");
        Md = Md.concat(a.mc(!0))
    } else wi(a.v, "blocklyDragging"), Md = [];
    for (c = 0; c < a.L.length; c++) Ij(a.L[c], b)
}
g.Aj = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = this.ya(),
            c = kh(this.A, a);
        if (1 == Ud && Sc(b, c) * this.A.scale > oh) {
            Ud = 2;
            Qj();
            if (this.O) {
                Rd(this);
                var d = this.v;
                d.h = "translate(" + c.x + "," + c.y + ")";
                ri(this.A, "disconnect");
                1 > this.A.scale || (d = Math.atan(10 / pi(this).height) / Math.PI * 180, this.o || (d *= -1), Rj(this.v, d, new Date))
            }
            Ij(this, !0)
        }
        if (2 == Ud) {
            b = Tc(b, this.le);
            d = this.v;
            d.h = "translate(" + c.x + "," + c.y + ")";
            d.setAttribute("transform", d.h + d.g);
            for (c = 0; c < this.ec.length; c++) {
                var e =
                    this.ec[c],
                    d = e.sm,
                    e = new w(e.x + b.x, e.y + b.y);
                d.md = e;
                d.$() && (d = d.Ga, d.ed = e, d.De && Wg(d))
            }
            d = this.mc(!1);
            a: {
                for (c = this.g; c;) {
                    e = z(c);
                    if (!e) break a;
                    c = e.g
                }
                c = null
            }
            c && c != this.g && d.push(c);
            for (var f = e = null, k = Wd, c = 0; c < d.length; c++) {
                var l = d[c],
                    p;
                p = Gh(l.je, l, k, b);
                p.I && (e = p.I, f = l, k = p.rj)
            }
            Hd && Hd != e && (fe(), Id = Hd = null);
            e && e != Hd && (e.gj(), Hd = e, Id = f);
            Hg(this) && gi(this.A, a)
        }
        a.stopPropagation();
        a.preventDefault()
    }
};

function Dj(a) {
    Ld(a) ? pg(a.v, "blocklyDraggable") : wi(a.v, "blocklyDraggable")
}
g.Bf = function(a) {
    Xh.w.Bf.call(this, a);
    Dj(this)
};
g.Ug = function(a) {
    Xh.w.Ug.call(this, a);
    if (this.P) {
        a = gj(this);
        for (var b = 0; b < a.length; b++) a[b].Kc()
    }
};
g.Xg = function(a) {
    Xh.w.Xg.call(this, a);
    this.Jc()
};
g.D = function(a, b) {
    Ui();
    Mg();
    L == this && (ci(this), fi());
    ng.We == this && ng.Fc();
    if (b && this.P) {
        Rd(this, a);
        ri(this.A, "delete");
        var c = Bh(this.v, this.A),
            d = this.v.cloneNode(!0);
        d.B = c.x;
        d.G = c.y;
        d.setAttribute("transform", "translate(" + d.B + "," + d.G + ")");
        Ah(this.A).appendChild(d);
        d.i = d.getBBox();
        Sj(d, this.o, new Date, this.A.scale)
    }
    this.P = !1;
    B++;
    c = gj(this);
    for (d = 0; d < c.length; d++) c[d].D();
    B--;
    Xh.w.D.call(this, a);
    y(this.v);
    this.Db = this.Ua = this.V = this.v = null;
    Ng()
};

function Sj(a, b, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? y(a) : (a.setAttribute("transform", "translate(" + (a.B + (b ? -1 : 1) * a.i.width * d / 2 * e) + "," + (a.G + a.i.height * d * e) + ") scale(" + (1 - e) * d + ")"), setTimeout(function() {
        Sj(a, b, c, d)
    }, 10))
}

function Nj(a, b, c) {
    var d = (new Date - b) / 150;
    1 < d ? y(a) : (a.setAttribute("r", 25 * d * c), a.style.opacity = 1 - d, setTimeout(function() {
        Nj(a, b, c)
    }, 10))
}

function Rj(a, b, c) {
    var d = (new Date - c) / 200;
    1 < d ? a.g = "" : (a.g = "skewX(" + Math.round(Math.sin(d * Math.PI * 3) * (1 - d) * b) + ")", Tj = a, Uj = setTimeout(function() {
        Rj(a, b, c)
    }, 10));
    a.setAttribute("transform", a.h + a.g)
}

function Hj() {
    if (Tj) {
        clearTimeout(Uj);
        var a = Tj;
        a.g = "";
        a.setAttribute("transform", a.h);
        Tj = null
    }
}
var Uj = 0,
    Tj = null;
g = Xh.prototype;
g.Jc = function() {
    if (!this.disabled) {
        var a = this.ic,
            b = Vj(a);
        if (this.s) b = Wj([255, 255, 255], b, .6), a = oj(b), this.Ua.style.display = "none", this.Db.setAttribute("fill", a);
        else {
            this.Ua.style.display = "";
            var c = oj(Wj([255, 255, 255], b, .3)),
                b = oj(Wj([0, 0, 0], b, .2));
            this.Ua.setAttribute("stroke", c);
            this.Db.setAttribute("fill", b)
        }
        this.V.setAttribute("fill", a);
        a = gj(this);
        for (c = 0; c < a.length; c++) a[c].Jc();
        for (a = 0; c = this.h[a]; a++)
            for (var b = 0, d; d = c.Ea[b]; b++) d.Cb(null)
    }
};

function ge(a) {
    var b;
    b = -1 != (" " + a.v.getAttribute("class") + " ").indexOf(" blocklyDisabled ");
    a.disabled || tj(a) ? b || (pg(a.v, "blocklyDisabled"), a.V.setAttribute("fill", "url(#" + a.A.options.ke + ")")) : b && (wi(a.v, "blocklyDisabled"), a.Jc());
    a = a.hd();
    b = 0;
    for (var c; c = a[b]; b++) ge(c)
}
g.ef = function() {
    var a;
    this.Aa ? (a = this.Aa, a = (a.h ? a.h.value : a.wa).replace(/\s+$/, "").replace(/ +\n/g, "\n")) : a = "";
    return a
};
g.td = function(a) {
    var b = !1;
    m(a) ? (this.Aa || (this.Aa = new Ei(this), b = !0), Hi(this.Aa, a)) : this.Aa && (this.Aa.D(), b = !0);
    b && this.P && (this.U(), Sd(this))
};
g.Xa = function(a, b) {
    this.Xa.g || (this.Xa.g = Object.create(null));
    var c = b || "";
    if (c) this.Xa.g[c] && (clearTimeout(this.Xa.g[c]), delete this.Xa.g[c]);
    else
        for (var d in this.Xa.g) clearTimeout(this.Xa.g[d]), delete this.Xa.g[d];
    if (2 == Ud) {
        var e = this;
        this.Xa.g[c] = setTimeout(function() {
            e.A && (delete e.Xa.g[c], e.Xa(a, c))
        }, 100)
    } else {
        this.G && (a = null);
        d = mj(this);
        for (var f = null; d;) d.j && (f = d), d = mj(d);
        f && f.Xa(a, "collapsed " + this.id + " " + c);
        d = !1;
        m(a) ? (this.Bb || (this.Bb = new Gi(this), d = !0), kj(this.Bb, a, c)) : this.Bb && !c ? (this.Bb.D(),
            d = !0) : this.Bb && (d = jj(this.Bb), kj(this.Bb, "", c), (f = jj(this.Bb)) || this.Bb.D(), d = d == f);
        d && this.P && (this.U(), Sd(this))
    }
};
g.ud = function(a) {
    this.wb && this.wb !== a && this.wb.D();
    a && (a.S = this, this.wb = a, vi(a))
};
g.Vd = function(a) {
    this.disabled != a && (Xh.w.Vd.call(this, a), this.P && ge(this))
};
g.Xf = function() {
    pg(this.v, "blocklySelected");
    this.v.parentNode.appendChild(this.v)
};
g.yf = function() {
    wi(this.v, "blocklySelected")
};
g.ua = function(a) {
    Xh.w.ua.call(this, a);
    this.P && this.Jc()
};
g.Pb = function(a, b) {
    Xh.w.Pb.call(this, a, b);
    this.P && (this.U(), Sd(this))
};
g.Ob = function(a, b) {
    Xh.w.Ob.call(this, a, b);
    this.P && (this.U(), Sd(this))
};
g.mb = function(a, b) {
    Xh.w.mb.call(this, a, b);
    this.P && (this.U(), Sd(this))
};
g.kb = function(a) {
    Xh.w.kb.call(this, a);
    this.P && (this.U(), Sd(this))
};
g.Wa = function(a, b) {
    Xh.w.Wa.call(this, a, b);
    this.P && (this.U(), Sd(this))
};
g.Kg = function(a, b) {
    Xh.w.Kg.call(this, a, b);
    this.P && (this.U(), Sd(this))
};
g.ub = function(a, b) {
    var c = Xh.w.ub.call(this, a, b);
    this.P && (this.U(), Sd(this));
    return c
};
g.mc = function(a) {
    var b = [];
    if (a || this.P)
        if (this.K && b.push(this.K), this.T && b.push(this.T), this.g && b.push(this.g), a || !this.j) {
            a = 0;
            for (var c; c = this.h[a]; a++) c.I && b.push(c.I)
        }
    return b
};
g.xe = function(a) {
    return new Nd(this, a)
};
var Xj = 7.5 * (1 - Math.SQRT1_2) + .5,
    Yj = 8.5 * (1 - Math.SQRT1_2) - .5,
    Zj = "m " + Xj + "," + Xj,
    ak = "a 8,8 0 0,0 " + (-Yj - .5) + "," + (8 - Yj),
    bk = "a 8.5,8.5 0 0,0 " + (8 - Yj) + "," + (Yj + .5);
Xh.prototype.U = function(a) {
    Mg();
    this.P = !0;
    var b = 10;
    this.o && (b = -b);
    for (var c = gj(this), d = 0; d < c.length; d++) {
        var e = c[d];
        e.Ci && e.S.j ? e.g.setAttribute("display", "none") : (e.g.setAttribute("display", "block"), e.S.o && (b -= 17), e.g.setAttribute("transform", "translate(" + b + ",5)"), xi(e), b = e.S.o ? b - 10 : b + 27)
    }
    var f = b += this.o ? 10 : -10,
        k = this.h,
        c = [];
    c.g = f + 20;
    if (this.T || this.g) c.g = Math.max(c.g, 40);
    for (var e = d = 0, l = !1, p = !1, n = !1, r = void 0, v = sj(this) && !this.j, C = 0, H; H = k[C]; C++)
        if (H.$()) {
            var D;
            v && r && 3 != r && 3 != H.type ? D = c[c.length -
                1] : (r = H.type, D = [], D.type = v && 3 != H.type ? -1 : H.type, D.height = 0, c.push(D));
            D.push(H);
            H.Zc = 25;
            H.bb = v && 1 == H.type ? 20.5 : 0;
            if (H.I && H.I.N) {
                var $d = pi(z(H.I));
                H.Zc = Math.max(H.Zc, $d.height);
                H.bb = Math.max(H.bb, $d.width)
            }
            v || C != k.length - 1 ? !v && 1 == H.type && k[C + 1] && 3 == k[C + 1].type && H.Zc-- : H.Zc--;
            D.height = Math.max(D.height, H.Zc);
            H.Wb = 0;
            1 == c.length && (H.Wb += this.o ? -f : f);
            for (var $d = !1, ih = 0, mc; mc = H.Ea[ih]; ih++) {
                0 != ih && (H.Wb += 10);
                var Jc;
                Jc = mc;
                Jc.s.width || Jc.Jf();
                Jc = Jc.s;
                mc.bb = Jc.width;
                mc.J = $d && mc.yd ? 10 : 0;
                H.Wb += mc.bb + mc.J;
                D.height =
                    Math.max(D.height, Jc.height);
                $d = mc.yd
            } - 1 != D.type && (3 == D.type ? (p = !0, e = Math.max(e, H.Wb)) : (1 == D.type ? l = !0 : 5 == D.type && (n = !0), d = Math.max(d, H.Wb)))
        }
    for (f = 0; D = c[f]; f++)
        if (D.vj = !1, -1 == D.type)
            for (k = 0; H = D[k]; k++)
                if (1 == H.type) {
                    D.height += 10;
                    D.vj = !0;
                    break
                }
    c.h = 20 + e;
    p && (c.g = Math.max(c.g, c.h + 30));
    l ? c.g = Math.max(c.g, d + 28) : n && (c.g = Math.max(c.g, d + 20));
    c.i = l;
    c.s = p;
    c.j = n;
    e = b;
    this.Cd = !1;
    this.height = 0;
    this.K ? this.Bd = this.xc = !0 : (this.Bd = this.xc = !1, this.T && (b = z(this.T)) && xd(b) == this && (this.xc = !0), xd(this) && (this.Bd = !0));
    l = [];
    p = [];
    b = [];
    d = [];
    n = c.g;
    this.xc ? (l.push("m 0,0"), b.push("m 0.5,0.5"), this.Cd && (l.push("c 30,-15 70,-15 100,0"), b.push(this.o ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (l.push("m 0,8"), b.push(this.o ? Zj : "m 0.5,7.5"), l.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.T && (l.push("H", 15), b.push("H", 15), l.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"), Zd(this.T, this.o ? -30 : 30, 0));
    l.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    var n = 0,
        T;
    for (H = 0; D =
        c[H]; H++) {
        r = 10;
        0 == H && (r += this.o ? -e : e);
        b.push("M", c.g - .5 + "," + (n + .5));
        if (this.j) f = D[0], v = n, ck(this, f.Ea, r, v), l.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), f = D.height - 20, l.push("v", f), this.o && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", f - .7)), this.width += 15;
        else if (-1 == D.type) {
            for (k = 0; f = D[k]; k++) v = n, D.vj && (v += 5), r = ck(this, f.Ea, r, v), 5 != f.type && (r += f.bb + 10), 1 == f.type && (p.push("M", r - 10 + "," + (n + 5)), p.push("h", 6 - f.bb), p.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), p.push("v", f.Zc + 1 - 20),
                p.push("h", f.bb + 2 - 8), p.push("z"), this.o ? (d.push("M", r - 10 - 2.5 + 8 - f.bb + "," + (n + 5 + .5)), d.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), d.push("v", f.Zc - 20 + 2.5), d.push("h", f.bb - 8 + 2)) : (d.push("M", r - 10 + .5 + "," + (n + 5 + .5)), d.push("v", f.Zc + 1), d.push("h", 6 - f.bb), d.push("M", r - f.bb - 10 + .9 + "," + (n + 5 + 20 - .7)), d.push("l", "3.68,-2.1")), this.o ? T = -r - 8 + 10 + f.bb + 1 : T = r + 8 - 10 - f.bb - 1, v = n + 5 + 1, Zd(f.I, T, v));
            r = Math.max(r, c.g);
            this.width = Math.max(this.width, r);
            l.push("H", r);
            b.push("H", r - .5);
            l.push("v", D.height);
            this.o &&
                b.push("v", D.height - 1)
        } else 1 == D.type ? (f = D[0], v = n, -1 != f.align && (k = c.g - f.Wb - 8 - 20, 1 == f.align ? r += k : 0 == f.align && (r += k / 2)), ck(this, f.Ea, r, v), l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), T = D.height - 20, l.push("v", T), this.o ? (b.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), b.push("v", T + .5)) : (b.push("M", c.g - 5 + "," + (n + 20 - .7)), b.push("l", "3.68,-2.1")), T = this.o ? -c.g - 1 : c.g + 1, Zd(f.I, T, n), f.I.N && (this.width = Math.max(this.width, c.g + pi(z(f.I)).width - 8 + 1))) : 5 == D.type ? (f = D[0], v = n, -1 != f.align && (k = c.g -
            f.Wb - 20, c.i && (k -= 8), 1 == f.align ? r += k : 0 == f.align && (r += k / 2)), ck(this, f.Ea, r, v), l.push("v", D.height), this.o && b.push("v", D.height - 1)) : 3 == D.type && (f = D[0], 0 == H && (l.push("v", 10), this.o && b.push("v", 9), n += 10), v = n, -1 != f.align && (k = c.h - f.Wb - 20, 1 == f.align ? r += k : 0 == f.align && (r += k / 2)), ck(this, f.Ea, r, v), r = c.h + 30, l.push("H", r), l.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), l.push("v", D.height - 16), l.push("a 8,8 0 0,0 8,8"), l.push("H", c.g), this.o ? (b.push("M", r - 30 + Yj + "," + (n + Yj)), b.push(ak), b.push("v", D.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) :
            (b.push("M", r - 30 + Yj + "," + (n + D.height - Yj)), b.push(bk)), b.push("H", c.g - .5), T = this.o ? -r : r + 1, Zd(f.I, T, n + 1), f.I.N && (this.width = Math.max(this.width, c.h + pi(z(f.I)).width)), H == c.length - 1 || 3 == c[H + 1].type) && (l.push("v", 10), this.o && b.push("v", 9), n += 10);
        n += D.height
    }
    c.length || (n = 25, l.push("V", n), this.o && b.push("V", n - 1));
    T = n;
    this.height += T + 1;
    this.g && (l.push("H", 30 + (this.o ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), Zd(this.g, this.o ? -30 : 30, T + 1), this.height += 4);
    this.Bd ? (l.push("H 0"), this.o || b.push("M", "0.5," + (T - .5))) : (l.push("H",
        8), l.push("a", "8,8 0 0,1 -8,-8"), this.o || (b.push("M", Xj + "," + (T - Xj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (T - 8))));
    this.K ? (Zd(this.K, 0, 0), l.push("V", 20), l.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"), this.o ? (b.push("M", "-2,8.4"), b.push("l", "-3.6,-2.1")) : (b.push("V", 18.5), b.push("m", "-7.36,-0.5 q -1.52,-5.5 0,-11"), b.push("m", "7.36,1 V 0.5 H 1")), this.width += 8) : this.o || (this.xc ? b.push("V", .5) : b.push("V", 8));
    l.push("z");
    T = l.join(" ") + "\n" + p.join(" ");
    this.V.setAttribute("d", T);
    this.Db.setAttribute("d", T);
    T = b.join(" ") + "\n" + d.join(" ");
    this.Ua.setAttribute("d", T);
    this.o && (this.V.setAttribute("transform", "scale(-1 1)"), this.Ua.setAttribute("transform", "scale(-1 1)"), this.Db.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    T = this.ya();
    this.T && Yd(this.T, T);
    this.K && Yd(this.K, T);
    for (c = 0; c < this.h.length; c++)
        if (b = this.h[c].I) Yd(b, T), b.N && ae(b);
    this.g && (Yd(this.g, T), this.g.N && ae(this.g));
    !1 !== a && ((a = this.getParent()) ? a.U(!0) : Qg(this.A));
    Ng()
};

function ck(a, b, c, d) {
    d += 5;
    a.o && (c = -c);
    for (var e = 0, f; f = b[e]; e++) {
        var k = f.If();
        k && (a.o ? (c -= f.J + f.bb, k.setAttribute("transform", "translate(" + c + "," + d + ")"), f.bb && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + f.J) + "," + d + ")"), f.bb && (c += f.J + f.bb + 10)))
    }
    return a.o ? -c : c
};
var M = {};

function uj(a, b) {
    uj.w.constructor.call(this, a, b)
}
var dk;
t(uj, Zi);
g = uj.prototype;
g.Pe = "text";
g.Df = !0;
g.D = function() {
    sg(this);
    uj.w.D.call(this)
};
g.ha = function(a) {
    if (null !== a) {
        if (this.u && this.Ya) {
            var b = this.Ya(a);
            null !== b && void 0 !== b && (a = b)
        }
        Zi.prototype.ha.call(this, a)
    }
};
g.vd = function(a) {
    this.m = this.u.A;
    a = a || !1;
    if (!a && (sb || ub || wb)) {
        a = window.prompt(M.Ij, this.wa);
        if (this.u && this.Ya) {
            var b = this.Ya(a);
            void 0 !== b && (a = b)
        }
        this.ha(a)
    } else {
        mg(this, this.u.o, ek(this));
        var b = og,
            c = x("input", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.Df);
        var d = 11 * this.m.scale + "pt";
        b.style.fontSize = d;
        c.style.fontSize = d;
        dk = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.wa;
        c.j = null;
        fk(this);
        this.zf();
        a || (c.focus(), c.select());
        c.J = G(c, "keydown", this, this.bn);
        c.L = G(c, "keyup", this, this.oj);
        c.H = G(c, "keypress", this, this.oj);
        c.s = this.zf.bind(this);
        this.m.yc(c.s)
    }
};
g.bn = function(a) {
    var b = dk;
    13 == a.keyCode ? gk() : 27 == a.keyCode ? (b.value = b.defaultValue, gk()) : 9 == a.keyCode && (gk(), this.u.tab(this, !a.shiftKey), a.preventDefault())
};
g.oj = function() {
    var a = dk,
        b = a.value;
    b !== a.j ? (a.j = b, this.ha(b), fk(this)) : rb && this.u.U();
    this.zf()
};

function fk(a) {
    var b = !0,
        c = dk;
    a.u && a.Ya && (b = a.Ya(c.value));
    null === b ? pg(c, "blocklyInvalidInput") : wi(c, "blocklyInvalidInput")
}
g.zf = function() {
    var a = og,
        b = this.g.getBBox();
    a.style.width = b.width * this.m.scale + "px";
    a.style.height = b.height * this.m.scale + "px";
    b = oe(this.j);
    if (this.u.o) {
        var c = cj(this);
        b.x += c.width;
        b.x -= a.offsetWidth
    }
    b.y += 1;
    qb && og.style.top && (--b.x, --b.y);
    rb && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px"
};

function ek(a) {
    return function() {
        var b = dk,
            c = b.value;
        if (a.u && a.Ya) {
            var d = a.Ya(c);
            null === d ? c = b.defaultValue : void 0 !== d && (c = d)
        }
        a.ha(c);
        a.u.P && a.u.U();
        J(b.J);
        J(b.L);
        J(b.H);
        a.m.Td(b.s);
        dk = null;
        b = og.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = ""
    }
}

function hk(a) {
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0);
    return isNaN(a) ? null : String(a)
};

function yj(a, b) {
    this.G = a;
    ik(this);
    var c = jk(this)[0];
    yj.w.constructor.call(this, c[1], b)
}
t(yj, Zi);
var kk = ub ? "\u25bc" : "\u25be";
g = yj.prototype;
g.Pe = "default";
g.C = function() {
    if (!this.g) {
        this.B = F("tspan", {}, null);
        this.B.appendChild(document.createTextNode(this.u.o ? kk + " " : " " + kk));
        yj.w.C.call(this);
        var a = this.wa;
        this.wa = null;
        this.Cb(a)
    }
};
g.vd = function() {
    mg(this, this.u.o, null);
    var a = this,
        b = new kg;
    b.Kd(this.u.o);
    for (var c = jk(this), d = 0; d < c.length; d++) {
        var e = c[d][1],
            f = new Pf(c[d][0]);
        f.Kd(this.u.o);
        f.Ta = e;
        f.zb(16, !0);
        b.ge(f, !0);
        Df(f, e == this.i)
    }
    Rb(b, "action", function(b) {
        if (b = b.target) {
            b = b.ab();
            if (a.u && a.Ya) {
                var c = a.Ya(b);
                void 0 !== c && (b = c)
            }
            null !== b && a.ha(b)
        }
        sg(a)
    });
    Ee(b).aa(b.F(), "touchstart", function(a) {
        bg(this, a.target).Ec(a)
    });
    Ee(b).aa(b.F(), "touchend", function(a) {
        bg(this, a.target).Yc(a)
    });
    c = $c();
    d = me();
    e = oe(this.j);
    f = cj(this);
    b.U(og);
    var k = b.F();
    pg(k, "blocklyDropdownMenu");
    var l = pe(k);
    l.height = k.scrollHeight;
    e.y = e.y + l.height + f.height >= c.height + d.y ? e.y - (l.height + 2) : e.y + f.height;
    this.u.o ? (e.x += f.width, e.x += 25, e.x < d.x + l.width && (e.x = d.x + l.width)) : (e.x -= 25, e.x > c.width + d.x - l.width && (e.x = c.width + d.x - l.width));
    rg(e.x, e.y, c, d, this.u.o);
    lg(b);
    k.focus()
};

function ik(a) {
    a.L = null;
    a.O = null;
    var b = a.G;
    if (da(b) && !(2 > b.length)) {
        var c = b.map(function(a) {
                return a[0]
            }),
            d = lk(c),
            e = mk(c, d),
            f = nk(c, d);
        if ((e || f) && !(d <= e + f)) {
            e && (a.L = c[0].substring(0, e - 1));
            f && (a.O = c[0].substr(1 - f));
            c = [];
            for (d = 0; d < b.length; d++) {
                var k = b[d][0],
                    l = b[d][1],
                    k = k.substring(e, k.length - f);
                c[d] = [k, l]
            }
            a.G = c
        }
    }
}

function jk(a) {
    return fa(a.G) ? a.G.call(a) : a.G
}
g.ab = function() {
    return this.i
};
g.ha = function(a) {
    if (null !== a && a !== this.i) {
        this.u && 0 == B && E(new Ci(this.u, "field", this.name, this.i, a));
        this.i = a;
        for (var b = jk(this), c = 0; c < b.length; c++)
            if (b[c][1] == a) {
                this.Cb(b[c][0]);
                return
            }
        this.Cb(a)
    }
};
g.Cb = function(a) {
    this.u && this.B && (this.B.style.fill = this.u.ic);
    null !== a && a !== this.wa && (this.wa = a, bj(this), this.h && (this.u.o ? this.h.insertBefore(this.B, this.h.firstChild) : this.h.appendChild(this.B)), this.u && this.u.P && (this.u.U(), Sd(this.u)))
};
g.D = function() {
    sg(this);
    yj.w.D.call(this)
};

function ok(a) {
    var b;
    if (a.jb) b = a.jb();
    else if (a.Ib) b = a.Ib();
    else throw "Not Block or Workspace: " + a;
    a = Object.create(null);
    for (var c = 0; c < b.length; c++)
        for (var d = b[c].lf(), e = 0; e < d.length; e++) {
            var f = d[e];
            f && (a[f.toLowerCase()] = f)
        }
    b = [];
    for (var k in a) b.push(a[k]);
    return b
}

function pk(a, b, c) {
    A(!0);
    c = c.Ib();
    for (var d = 0; d < c.length; d++) c[d].sd(a, b);
    A(!1)
}

function qk(a) {
    a = ok(a);
    a.sort(sa);
    Va(a, M.Mc);
    a.unshift(M.Mc);
    for (var b = [], c = 0; c < a.length; c++) {
        if (N.variables_set) {
            var d = x("block");
            d.setAttribute("type", "variables_set");
            N.variables_get && d.setAttribute("gap", 8);
            var e = x("field", null, a[c]);
            e.setAttribute("name", "VAR");
            d.appendChild(e);
            b.push(d)
        }
        N.variables_get && (d = x("block"), d.setAttribute("type", "variables_get"), N.variables_set && d.setAttribute("gap", 24), e = x("field", null, a[c]), e.setAttribute("name", "VAR"), d.appendChild(e), b.push(d))
    }
    return b
}

function rk(a) {
    a = ok(a);
    var b = "";
    if (a.length)
        for (var c = 1, d = 0, e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d); !b;) {
            for (var f = !1, k = 0; k < a.length; k++)
                if (a[k].toLowerCase() == e) {
                    f = !0;
                    break
                }
            f ? (d++, 25 == d && (d = 0, c++), e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d), 1 < c && (e += c)) : b = e
        } else b = "i";
    return b
};

function qj(a, b) {
    qj.w.constructor.call(this, sk, b);
    this.ha(a || "")
}
t(qj, yj);
qj.prototype.Ge = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = tk.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = tk;
    qj.w.Ge.call(this, b)
};
qj.prototype.C = function() {
    this.g || (qj.w.C.call(this), this.ab() || this.ha(rk(this.u.G ? this.u.A.L : this.u.A)))
};
qj.prototype.ab = function() {
    return this.cd()
};
qj.prototype.ha = function(a) {
    this.u && 0 == B && E(new Ci(this.u, "field", this.name, this.i, a));
    this.i = a;
    this.Cb(a)
};

function sk() {
    var a = this.u && this.u.A ? ok(this.u.A) : [],
        b = this.cd();
    b && -1 == a.indexOf(b) && a.push(b);
    a.sort(sa);
    a.push(M.Sf);
    a.push(M.Pf);
    for (var b = [], c = 0; c < a.length; c++) b[c] = [a[c], a[c]];
    return b
}

function tk(a) {
    function b(a, b) {
        jh();
        var c = window.prompt(a, b);
        c && (c = c.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), c == M.Sf || c == M.Pf) && (c = null);
        return c
    }
    var c = this.u.A;
    if (a == M.Sf) {
        var d = this.cd();
        (a = b(M.hm.replace("%1", d), d)) && pk(d, a, c);
        return null
    }
    if (a == M.Pf) return (a = b(M.Rl, "")) ? (pk(a, a, c), a) : null
};
var Jj = "handopen",
    gh = "handclosed",
    hi = "handdelete",
    uk = "",
    vk = null,
    wk = "";

function fh(a) {
    if (uk != a) {
        uk = a;
        var b = "url(" + wk + "/" + a + ".cur), auto",
            c = ".blocklyDraggable {\n  cursor: " + b + ";\n}\n";
        vk.deleteRule(0);
        vk.insertRule(c, 0);
        for (var c = document.getElementsByClassName("blocklyToolboxDiv"), d = 0, e; e = c[d]; d++) e.style.cursor = a == hi ? b : "";
        document.body.parentNode.style.cursor = a == Jj ? "" : b
    }
}
var xk = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 999;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: 0.9;", "padding: 2px;", "position: absolute;", "z-index: 1000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;",
    "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #888;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {",
    "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {",
    "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklySvg text {", "user-select: none;", "-moz-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;",
    "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;", "}", ".blocklyCommentTextarea {", "background-color: #ffc;", "border: 0;", "margin: 0;", "padding: 2px;", "resize: none;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;",
    "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;",
    "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;",
    "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;", "stroke-width: 2;", "stroke-linecap: round;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;",
    "overflow-x: visible;", "overflow-y: auto;", "position: absolute;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;",
    "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;",
    "}", ".blocklyTreeIconClosedRtl {", "background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;",
    "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;",
    "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;",
    "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;",
    "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {",
    "opacity: 0.3;", "-moz-opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;",
    "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;",
    "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];

function yk(a, b) {
    m(a) && (a = document.getElementById(a) || document.querySelector(a));
    if (!gd(document, a)) throw "Error: container is not in current document.";
    var c = new Oh(b || {}),
        d = a;
    d.setAttribute("dir", "LTR");
    Be = c.o;
    var e = c.V,
        f = c.$b;
    console.log("CSS!!!");
    if (!vk) {
        var k = ".blocklyDraggable {}\n";
        e && (k += xk.join("\n"), pd.Of && (k += pd.Of.CSS.join("\n")));
        wk = f.replace(/[\\\/]$/, "");
        k = k.replace(/<<<PATH>>>/g, wk);
        e = document.createElement("style");
        document.head.appendChild(e);
        e.appendChild(document.createTextNode(k));
        vk = e.sheet;
        fh(Jj)
    }
    d = F("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
    }, d);
    k = F("defs", {}, d);
    e = String(Math.random()).substring(2);
    f = F("filter", {
        id: "blocklyEmbossFilter" + e
    }, k);
    F("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, f);
    var l = F("feSpecularLighting", {
            "in": "blur",
            surfaceScale: 1,
            specularConstant: .5,
            specularExponent: 10,
            "lighting-color": "white",
            result: "specOut"
        },
        f);
    F("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, l);
    F("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, f);
    F("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    c.L = f.id;
    f = F("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, k);
    F("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, f);
    F("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    c.ke = f.id;
    k = F("pattern", {
            id: "blocklyGridPattern" + e,
            patternUnits: "userSpaceOnUse"
        },
        k);
    0 < c.h.length && 0 < c.h.spacing && (F("line", {
        stroke: c.h.colour
    }, k), 1 < c.h.length && F("line", {
        stroke: c.h.colour
    }, k));
    c.j = k;
    c = zk(d, c);
    Ak(c);
    c.Qd();
    G(d, "focus", c, c.Qd);
    Bk(c);
    return c
}

function zk(a, b) {
    b.Zb = null;
    b.Ia = Ck;
    b.ad = Dk;
    var c = new Ph(b);
    c.scale = b.g.pn;
    a.appendChild(Qh(c, "blocklyMainBackground"));
    c.translate(0, 0);
    c.Qd();
    b.i || b.B || c.yc(function() {
        if (0 == Ud) {
            var a = c.Ia(),
                e = a.Ma + a.Na,
                f = a.rc + a.$a;
            if (a.Fb < f || a.Fb + a.fb > a.Ca + f || a.Eb < (b.o ? a.Ma : e) || a.Eb + a.ib > (b.o ? a.ma : a.ma + e))
                for (var k = yg(c, !1), l = 0, p; p = k[l]; l++) {
                    var n = p.ya(),
                        r = pi(p),
                        v = f + 25 - r.height - n.y;
                    0 < v && p.moveBy(0, v);
                    v = f + a.Ca - 25 - n.y;
                    0 > v && p.moveBy(0, v);
                    v = 25 + e - n.x - (b.o ? 0 : r.width);
                    0 < v && p.moveBy(v, 0);
                    n = e + a.ma - 25 - n.x + (b.o ? r.width : 0);
                    0 > n && p.moveBy(n, 0)
                }
        }
    });
    Bk(c);
    og || (og = x("div", "blocklyWidgetDiv"), document.body.appendChild(og));
    Pi || (Pi = x("div", "blocklyTooltipDiv"), document.body.appendChild(Pi));
    return c
}

function Ak(a) {
    var b = a.options,
        c = Ah(a);
    G(c, "contextmenu", null, function(a) {
        eh(a) || a.preventDefault()
    });
    G(window, "resize", null, function() {
        jh(!0);
        Bk(a)
    });
    Ek();
    b.Pd && (a.Z ? a.Z.C(a) : a.W && (a.W.C(a), a.W.show(b.Pd.childNodes), Fk(a.W), a.scrollX = a.W.ea, 3 == b.ra && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.B && (a.Ka = new ph(a), a.Ka.resize());
    b.Y && Gk(b.$b, a)
}

function Ek() {
    rd || (G(document, "keydown", null, Hk), G(document, "touchend", null, Qj), G(document, "touchcancel", null, Qj), document.addEventListener("mouseup", li, !1), wb && G(window, "orientationchange", document, function() {
        Bk(ti)
    }));
    rd = !0
}

function Gk(a, b) {
    function c() {
        for (; d.length;) J(d.pop());
        for (var a in b.J) {
            var c = b.J[a];
            c.volume = .01;
            c.play();
            c.pause();
            if (wb || vb) break
        }
    }
    qi(b, [a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    qi(b, [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    qi(b, [a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var d = [];
    d.push(G(document, "mousemove", null, c));
    d.push(G(document, "touchstart", null, c))
};

function Ik() {
    this.cc = RegExp("{leCUI8hutHZI4480Dc}", "g")
}

function Jk() {
    var a = U,
        b = bi;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = ti);
    var c = [];
    a.C(b);
    for (var b = yg(b, !0), d = 0, e; e = b[d]; d++) {
        var f = Kk(a, e);
        da(f) && (f = f[0]);
        f && (e.K && a.Db && (f = a.Db(f)), c.push(f))
    }
    c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n");
    return c = c.replace(/[ \t]+\n/g, "\n")
}

function Lk(a, b) {
    return b + a.replace(/\n(.)/g, "\n" + b + "$1")
}

function Kk(a, b) {
    if (!b) return "";
    if (b.disabled) return Kk(a, xd(b));
    var c = a[b.type].call(b, b);
    if (da(c)) return [a.oa(b, c[0]), c[1]];
    if (m(c)) return a.oa(b, c);
    if (null === c) return ""
}

function V(a, b, c) {
    a = Cj(a, b);
    if (!a) return "";
    b = Kk(U, a);
    if ("" === b) return "";
    a = b[0];
    b = b[1];
    a && c <= b && (c != b || 0 != c && 99 != c) && (a = "(" + a + ")");
    return a
}

function Mk(a, b) {
    var c = Kk(U, Cj(a, b));
    c && (c = Lk(c, "  "));
    return c
}
Ik.prototype.V = "";

function Nk(a) {
    var b = U;
    b.V += a + ","
}

function Ok(a, b) {
    var c = U;
    if (!c.s[a]) {
        var d = Pk(c.g, a, c.Ad);
        c.Y[a] = d;
        for (var d = b.join("\n").replace(c.cc, d), e; e != d;) e = d, d = d.replace(/^((  )*)  /gm, "$1  ");
        c.s[a] = d
    }
    return c.Y[a]
};
var oh = 5,
    Wd = 20,
    Cd = 250,
    Lj = 30,
    si = 100,
    Jh = 96,
    Kh = 124,
    Lh = "sprites.png",
    td = [, 2, 1, 4, 3];

function Qk(a, b) {
    this.i = b || "";
    this.h = Object.create(null);
    if (a)
        for (var c = a.split(","), d = 0; d < c.length; d++) this.h[c[d]] = !0;
    this.reset()
}
Qk.prototype.reset = function() {
    this.Gb = Object.create(null);
    this.g = Object.create(null)
};
Qk.prototype.getName = function(a, b) {
    var c = a.toLowerCase() + "_" + b,
        d = "VARIABLE" == b ? this.i : "";
    if (c in this.Gb) return d + this.Gb[c];
    var e = Pk(this, a, b);
    this.Gb[c] = e.substr(d.length);
    return e
};

function Pk(a, b, c) {
    b ? (b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b)) : b = "unnamed";
    for (var d = ""; a.g[b + d] || b + d in a.h;) d = d ? d + 1 : 2;
    b += d;
    a.g[b] = !0;
    return ("VARIABLE" == c ? a.i : "") + b
}

function rj(a, b) {
    return a.toLowerCase() == b.toLowerCase()
};

function Rk(a) {
    a = a.Ib();
    for (var b = [], c = [], d = 0; d < a.length; d++)
        if (a[d].oa) {
            var e = a[d].oa();
            e && (e[2] ? b.push(e) : c.push(e))
        }
    c.sort(Sk);
    b.sort(Sk);
    return [c, b]
}

function Sk(a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
}

function Tk(a, b) {
    if (b.G) return a;
    for (; !Uk(a, b.A, b);) {
        var c = a.match(/^(.*?)(\d+)$/);
        a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2"
    }
    return a
}

function Uk(a, b, c) {
    b = b.Ib();
    for (var d = 0; d < b.length; d++)
        if (b[d] != c && b[d].oa) {
            var e = b[d].oa();
            if (rj(e[0], a)) return !1
        }
    return !0
}

function Vk(a) {
    a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    a = Tk(a, this.u);
    for (var b = this.u.A.Ib(), c = 0; c < b.length; c++) b[c].Ce && b[c].Ce(this.wa, a);
    return a
}

function Wk(a) {
    function b(a, b) {
        for (var d = 0; d < a.length; d++) {
            var l = a[d][0],
                p = a[d][1],
                n = x("block");
            n.setAttribute("type", b);
            n.setAttribute("gap", 16);
            var r = x("mutation");
            r.setAttribute("name", l);
            n.appendChild(r);
            for (l = 0; l < p.length; l++) {
                var v = x("arg");
                v.setAttribute("name", p[l]);
                r.appendChild(v)
            }
            c.push(n)
        }
    }
    var c = [];
    if (N.procedures_defnoreturn) {
        var d = x("block");
        d.setAttribute("type", "procedures_defnoreturn");
        d.setAttribute("gap", 16);
        c.push(d)
    }
    N.procedures_defreturn && (d = x("block"), d.setAttribute("type",
        "procedures_defreturn"), d.setAttribute("gap", 16), c.push(d));
    N.procedures_ifreturn && (d = x("block"), d.setAttribute("type", "procedures_ifreturn"), d.setAttribute("gap", 16), c.push(d));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = Rk(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
}

function Xk(a, b) {
    for (var c = [], d = b.Ib(), e = 0; e < d.length; e++)
        if (d[e].Cc) {
            var f = d[e].Cc();
            f && rj(f, a) && c.push(d[e])
        }
    return c
}

function Yk(a) {
    var b = zd,
        c = a.oa()[0],
        d = a.Ja(!0);
    a = Xk(c, a.A);
    for (var c = 0, e; e = a[c]; c++) {
        var f = e.Ja(),
            f = f && Jg(f);
        e.gb(d);
        var k = e.Ja(),
            k = k && Jg(k);
        f != k && (zd = !1, E(new Ci(e, "mutation", null, f, k)), zd = b)
    }
}

function Zk(a, b) {
    for (var c = b.Ib(), d = 0; d < c.length; d++)
        if (c[d].oa) {
            var e = c[d].oa();
            if (e && rj(e[0], a)) return c[d]
        }
    return null
};

function pg(a, b) {
    var c = a.getAttribute("class") || ""; - 1 == (" " + c + " ").indexOf(" " + b + " ") && (c && (c += " "), a.setAttribute("class", c + b))
}

function wi(a, b) {
    var c = a.getAttribute("class");
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) {
        for (var c = c.split(/\s+/), d = 0; d < c.length; d++) c[d] && c[d] != b || (c.splice(d, 1), d--);
        c.length ? a.setAttribute("class", c.join(" ")) : a.removeAttribute("class")
    }
}

function G(a, b, c, d) {
    var e = c ? function(a) {
        d.call(c, a)
    } : d;
    a.addEventListener(b, e, !1);
    var f = [
        [a, b, e]
    ];
    if (b in ji)
        for (var e = function(a) {
                if (1 == a.changedTouches.length) {
                    var b = a.changedTouches[0];
                    a.clientX = b.clientX;
                    a.clientY = b.clientY
                }
                d.call(c, a);
                a.preventDefault()
            }, k = 0, l; l = ji[b][k]; k++) a.addEventListener(l, e, !1), f.push([a, l, e]);
    return f
}
var ji = {};
Jb && (ji = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});

function J(a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
}

function qg(a) {
    a.preventDefault();
    a.stopPropagation()
}

function eh(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
}

function be(a) {
    var b = new w(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (a = (a = a.getAttribute("transform")) && a.match($k)) b.x += parseFloat(a[1]), a[3] && (b.y += parseFloat(a[3]));
    return b
}
var $k = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;

function Bh(a, b) {
    var c = 0,
        d = 0,
        e = 1;
    if (gd(b.cb, a) || gd(b.g, a)) e = b.scale;
    do {
        var f = be(a);
        if (a == b.cb || a == b.g) e = 1;
        c += f.x * e;
        d += f.y * e;
        a = a.parentNode
    } while (a && a != Ah(b));
    return new w(c, d)
}

function F(a, b, c) {
    a = document.createElementNS("http://www.w3.org/2000/svg", a);
    for (var d in b) a.setAttribute(d, b[d]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
}

function dh(a) {
    return a.ctrlKey && tb ? !0 : 2 == a.button
}

function zh(a, b) {
    var c = b.createSVGPoint();
    c.x = a.clientX;
    c.y = a.clientY;
    var d = b.getScreenCTM(),
        d = d.inverse();
    return c.matrixTransform(d)
}

function lk(a) {
    if (!a.length) return 0;
    for (var b = a[0].length, c = 1; c < a.length; c++) b = Math.min(b, a[c].length);
    return b
}

function mk(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || lk(a), e = 0; e < d; e++) {
        for (var f = a[0][e], k = 1; k < a.length; k++)
            if (f != a[k][e]) return c;
            " " == f && (c = e + 1)
    }
    for (k = 1; k < a.length; k++)
        if ((f = a[k][e]) && " " != f) return c;
    return d
}

function nk(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || lk(a), e = 0; e < d; e++) {
        for (var f = a[0].substr(-e - 1, 1), k = 1; k < a.length; k++)
            if (f != a[k].substr(-e - 1, 1)) return c;
            " " == f && (c = e + 1)
    }
    for (k = 1; k < a.length; k++)
        if ((f = a[k].charAt(a[k].length - e - 1)) && " " != f) return c;
    return d
}

function al(a) {
    return !!a.match(/^\s*-?\d+(\.\d+)?\s*$/)
}

function vg() {
    for (var a = bl.length, b = [], c = 0; 20 > c; c++) b[c] = bl.charAt(Math.random() * a);
    return b.join("")
}
var bl = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var og = null,
    Vi = null,
    cl = null;

function mg(a, b, c) {
    gk();
    Vi = a;
    cl = c;
    og.style.top = me().y + "px";
    og.style.direction = b ? "rtl" : "ltr";
    og.style.display = "block"
}

function gk() {
    Vi && (Vi = null, og.style.display = "none", og.style.left = "", og.style.top = "", og.style.height = "", cl && cl(), cl = null, ed(og))
}

function sg(a) {
    Vi == a && gk()
}

function rg(a, b, c, d, e) {
    b < d.y && (b = d.y);
    e ? a > c.width + d.x && (a = c.width + d.x) : a < d.x && (a = d.x);
    og.style.left = a + "px";
    og.style.top = b + "px";
    og.style.height = c.height - b + d.y + "px"
};

function vj(a, b) {
    this.B = F("tspan", {}, null);
    this.B.appendChild(document.createTextNode("\u00b0"));
    vj.w.constructor.call(this, a, b)
}
t(vj, uj);
vj.prototype.Ge = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = dl.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = dl;
    vj.w.Ge.call(this, b)
};
vj.prototype.vd = function() {
    vj.w.vd.call(this, sb || ub || wb);
    var a = og;
    if (a.firstChild) {
        var a = F("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:html": "http://www.w3.org/1999/xhtml",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                height: "100px",
                width: "100px"
            }, a),
            b = F("circle", {
                cx: 50,
                cy: 50,
                r: 49,
                "class": "blocklyAngleCircle"
            }, a);
        this.i = F("path", {
            "class": "blocklyAngleGauge"
        }, a);
        this.G = F("line", {
            x1: 50,
            y1: 50,
            "class": "blocklyAngleLine"
        }, a);
        for (var c = 0; 360 > c; c += 15) F("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ?
                10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        G(a, "click", this, gk);
        G(b, "mousemove", this, this.V);
        G(this.i, "mousemove", this, this.V);
        el(this)
    }
};
vj.prototype.V = function(a) {
    var b = this.i.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = dl(b), dk.value = b, this.ha(b), fk(this), this.zf())
};
vj.prototype.Cb = function(a) {
    vj.w.Cb.call(this, a);
    this.h && (el(this), this.u.o ? this.h.insertBefore(this.B, this.h.firstChild) : this.h.appendChild(this.B), this.s.width = 0)
};

function el(a) {
    if (a.i) {
        var b = Number(a.cd()) + 0,
            b = Qc(b),
            c = ["M ", 50, ",", 50],
            d = 50,
            e = 50;
        if (!isNaN(b)) {
            var f = Qc(0),
                k = 49 * Math.cos(f),
                l = -49 * Math.sin(f),
                d = d + 49 * Math.cos(b),
                e = e - 49 * Math.sin(b);
            c.push(" l ", k, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - f) / Math.PI) % 2), " ", Number(!1), " ", d, ",", e, " z")
        }
        a.i.setAttribute("d", c.join(""));
        a.G.setAttribute("x2", d);
        a.G.setAttribute("y2", e)
    }
}

function dl(a) {
    a = hk(a);
    null !== a && (a %= 360, 0 > a && (a += 360), 360 < a && (a -= 360), a = String(a));
    return a
};

function fl(a, b) {
    null != a && this.rb.apply(this, arguments)
}
g = fl.prototype;
g.kd = "";
g.set = function(a) {
    this.kd = "" + a
};
g.rb = function(a, b, c) {
    this.kd += String(a);
    if (null != b)
        for (var d = 1; d < arguments.length; d++) this.kd += arguments[d];
    return this
};
g.clear = function() {
    this.kd = ""
};
g.toString = function() {
    return this.kd
};

function gl(a, b, c) {
    Ae.call(this, c);
    this.h = b || hl;
    a instanceof wc || (a = zc(a), b = yc(a).replace(/(\r\n|\r|\n)/g, "<br>"), a = Ac(b, a.Hd()));
    this.Y = a;
    this.V = this.Za = !1;
    this.Bd = Gc;
    this.Xe = -1
}
t(gl, Ae);
var il = {};
g = gl.prototype;
g.Ba = function() {
    gl.w.Ba.call(this);
    this.xd && (jl(this.xd.O, this), this.xd = null);
    this.g = null
};
g.sf = function() {
    var a = this.F();
    if (a) {
        var b = kl(this);
        b && !b.id && (b.id = De(this) + ".label");
        Xe(a, "treeitem");
        Ye(a, "selected", !1);
        Ye(a, "expanded", !1);
        Ye(a, "level", this.Gd());
        b && Ye(a, "labelledby", b.id);
        (a = this.gf()) && Xe(a, "presentation");
        (a = this.ff()) && Xe(a, "presentation");
        if (a = ll(this))
            if (Xe(a, "group"), a.hasChildNodes())
                for (a = Je(this), b = 1; b <= a; b++) {
                    var c = Ke(this, b - 1).F();
                    Ye(c, "setsize", a);
                    Ye(c, "posinset", b)
                }
    }
};
g.Jd = function() {
    var a = this.Ff(),
        b = this.i.g,
        c = b.createElement("DIV");
    u ? (Kc(c, Fc(Hc, a)), c.removeChild(c.firstChild)) : Kc(c, a);
    if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
    else {
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        c = a
    }
    this.g = c
};
g.Pa = function() {
    gl.w.Pa.call(this);
    il[De(this)] = this;
    this.sf()
};
g.Hb = function() {
    gl.w.Hb.call(this);
    delete il[De(this)]
};
g.Dd = function(a, b) {
    var c = Ke(this, b - 1),
        d = Ke(this, b);
    gl.w.Dd.call(this, a, b);
    a.qd = c;
    a.Yb = d;
    c ? c.Yb = a : this.xc = a;
    d ? d.qd = a : this.Lc = a;
    var e = this.qb();
    e && ml(a, e);
    nl(a, this.Gd() + 1);
    if (this.F() && (this.Wd(), this.hb())) {
        e = ll(this);
        a.F() || a.Jd();
        var f = a.F(),
            k = d && d.F();
        e.insertBefore(f, k);
        this.qa && a.Pa();
        d || (c ? c.Wd() : (re(e, !0), this.ac(this.hb())))
    }
};
g.add = function(a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.Dd(a, b ? Ne(this, b) : Je(this));
    return a
};
g.removeChild = function(a) {
    var b = this.qb(),
        c = b ? b.s : null;
    if (c == a || a.contains(c)) b.cc ? (this.select(), ec(this.jn, 10, this)) : this.select();
    gl.w.removeChild.call(this, a);
    this.Lc == a && (this.Lc = a.qd);
    this.xc == a && (this.xc = a.Yb);
    a.qd && (a.qd.Yb = a.Yb);
    a.Yb && (a.Yb.qd = a.qd);
    c = !a.Yb;
    a.xd = null;
    a.Xe = -1;
    if (b && (jl(b.O, a), this.qa)) {
        b = ll(this);
        if (a.qa) {
            var d = a.F();
            b.removeChild(d);
            a.Hb()
        }
        c && (c = Ke(this, Je(this) - 1)) && c.Wd();
        Me(this) || (b.style.display = "none", this.Wd(), this.gf().className = this.bf())
    }
    return a
};
g.jn = function() {
    this.select()
};
g.Gd = function() {
    var a = this.Xe;
    0 > a && (a = (a = this.getParent()) ? a.Gd() + 1 : 0, nl(this, a));
    return a
};

function nl(a, b) {
    if (b != a.Xe) {
        a.Xe = b;
        var c = ol(a);
        if (c) {
            var d = pl(a) + "px";
            Le(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
        }
        Ie(a, function(a) {
            nl(a, b + 1)
        })
    }
}
g.contains = function(a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
g.hd = function() {
    var a = [];
    Ie(this, function(b) {
        a.push(b)
    });
    return a
};
g.select = function() {
    var a = this.qb();
    a && a.yb(this)
};

function ql(a, b) {
    if (a.Za != b) {
        a.Za = b;
        rl(a);
        var c = a.F();
        c && (Ye(c, "selected", b), b && (c = a.qb().F(), Ye(c, "activedescendant", De(a))))
    }
}
g.hb = function() {
    return this.V
};
g.ac = function(a) {
    var b = a != this.V;
    if (!b || cc(this, a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.V = a;
        c = this.qb();
        var d = this.F();
        if (Me(this)) {
            if (!a && c && this.contains(c.s) && this.select(), d) {
                if (c = ll(this))
                    if (re(c, a), a && this.qa && !c.hasChildNodes()) {
                        var e = [];
                        Ie(this, function(a) {
                            e.push(a.Ff())
                        });
                        Kc(c, Fc(e));
                        Ie(this, function(a) {
                            a.Pa()
                        })
                    }
                this.Wd()
            }
        } else(c = ll(this)) && re(c, !1);
        d && (this.gf().className = this.bf(), Ye(d, "expanded", a));
        b && cc(this, a ? "expand" : "collapse")
    }
};
g.Sg = function() {
    var a = this.getParent();
    a && (a.ac(!0), a.Sg())
};
g.Ff = function() {
    var a = !this.qb().oa || (this.getParent(), 0) ? this.h.Gi : this.h.Fi,
        b = this.hb() && Me(this),
        a = {
            "class": a,
            style: sl(this)
        },
        c = [];
    b && Ie(this, function(a) {
        c.push(a.Ff())
    });
    b = Ec("div", a, c);
    return Ec("div", {
        "class": this.h.Oi,
        id: De(this)
    }, [tl(this), b])
};

function pl(a) {
    return Math.max(0, (a.Gd() - 1) * a.h.Dg)
}

function tl(a) {
    var b = {};
    b["padding-" + (Le(a) ? "right" : "left")] = pl(a) + "px";
    var b = {
            "class": a.pe(),
            style: b
        },
        c = a.rg(),
        d = Ec("span", {
            style: {
                display: "inline-block"
            },
            "class": a.bf()
        }),
        e = Ec("span", {
            "class": a.h.Pi,
            title: null
        }, a.Y);
    a = Fc(e, Ec("span", {}, a.Bd));
    return Ec("div", b, [c, d, a])
}
g.pe = function() {
    return this.h.gg + (this.Za ? " " + this.h.Ri : "")
};
g.rg = function() {
    return Ec("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": ul(this)
    })
};

function ul(a) {
    var b = a.qb(),
        c = !b.oa || b == a.getParent() && !1,
        d = a.h,
        e = new fl;
    e.rb(d.fd, " ", d.ym, " ");
    if (Me(a)) {
        var f = 0;
        b.fc && (f = a.hb() ? 2 : 1);
        c || (f = a.Yb ? f + 8 : f + 4);
        switch (f) {
            case 1:
                e.rb(d.Cm);
                break;
            case 2:
                e.rb(d.Bm);
                break;
            case 4:
                e.rb(d.Ki);
                break;
            case 5:
                e.rb(d.Am);
                break;
            case 6:
                e.rb(d.zm);
                break;
            case 8:
                e.rb(d.Li);
                break;
            case 9:
                e.rb(d.Em);
                break;
            case 10:
                e.rb(d.Dm);
                break;
            default:
                e.rb(d.Ji)
        }
    } else c ? e.rb(d.Ji) : a.Yb ? e.rb(d.Li) : e.rb(d.Ki);
    return e.toString()
}

function sl(a) {
    var b = a.hb() && Me(a);
    return rc({
        "background-position": vl(a),
        display: b ? null : "none"
    })
}

function vl(a) {
    return (a.Yb ? (a.Gd() - 1) * a.h.Dg : "-100") + "px 0"
}
g.F = function() {
    var a = gl.w.F.call(this);
    a || (this.g = a = this.i.F(De(this)));
    return a
};

function ol(a) {
    return (a = a.F()) ? a.firstChild : null
}
g.ff = function() {
    var a = ol(this);
    return a ? a.firstChild : null
};
g.gf = function() {
    var a = ol(this);
    return a ? a.childNodes[1] : null
};

function kl(a) {
    return (a = ol(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function ll(a) {
    return (a = a.F()) ? a.lastChild : null
}

function rl(a) {
    var b = ol(a);
    b && (b.className = a.pe())
}
g.Wd = function() {
    var a = this.ff();
    a && (a.className = ul(this));
    if (a = ll(this)) a.style.backgroundPosition = vl(this)
};
g.Mg = function(a) {
    "expand" == a.target.getAttribute("type") && Me(this) ? this.ac(!this.hb()) : (this.select(), rl(this))
};
g.nj = function(a) {
    "expand" == a.target.getAttribute("type") && Me(this) || this.ac(!this.hb())
};

function wl(a) {
    return a.hb() && Me(a) ? wl(Ke(a, Je(a) - 1)) : a
}

function ml(a, b) {
    a.xd != b && (a.xd = b, xl(b.O, a), Ie(a, function(a) {
        ml(a, b)
    }))
}
var hl = {
    Dg: 19,
    Qi: "goog-tree-root goog-tree-item",
    Ni: "goog-tree-hide-root",
    Oi: "goog-tree-item",
    Fi: "goog-tree-children",
    Gi: "goog-tree-children-nolines",
    gg: "goog-tree-row",
    Pi: "goog-tree-item-label",
    fd: "goog-tree-icon",
    ym: "goog-tree-expand-icon",
    Cm: "goog-tree-expand-icon-plus",
    Bm: "goog-tree-expand-icon-minus",
    Em: "goog-tree-expand-icon-tplus",
    Dm: "goog-tree-expand-icon-tminus",
    Am: "goog-tree-expand-icon-lplus",
    zm: "goog-tree-expand-icon-lminus",
    Li: "goog-tree-expand-icon-t",
    Ki: "goog-tree-expand-icon-l",
    Ji: "goog-tree-expand-icon-blank",
    eg: "goog-tree-expanded-folder-icon",
    Hi: "goog-tree-collapsed-folder-icon",
    fg: "goog-tree-file-icon",
    Mi: "goog-tree-expanded-folder-icon",
    Ii: "goog-tree-collapsed-folder-icon",
    Ri: "selected"
};

function yl(a, b, c) {
    gl.call(this, a, b, c)
}
t(yl, gl);
yl.prototype.qb = function() {
    if (this.xd) return this.xd;
    var a = this.getParent();
    return a && (a = a.qb()) ? (ml(this, a), a) : null
};
yl.prototype.bf = function() {
    var a = this.hb(),
        b = this.Cd;
    if (a && b) return b;
    b = this.ee;
    if (!a && b) return b;
    b = this.h;
    if (Me(this)) {
        if (a && b.eg) return b.fd + " " + b.eg;
        if (!a && b.Hi) return b.fd + " " + b.Hi
    } else if (b.fg) return b.fd + " " + b.fg;
    return ""
};
var Ad = "",
    zd = !0,
    B = 0,
    Cg = [];

function E(a) {
    0 == B && (Cg.length || setTimeout(zl, 0), Cg.push(a))
}

function zl() {
    for (var a = Bg(Cg, !0), b = Cg.length = 0, c; c = a[b]; b++) {
        var d = wg[c.g] || null;
        if (d) {
            c.Ng && (d.j.push(c), d.G.length = 0, 1024 < d.j.length && d.j.unshift());
            for (var e = 0, f; f = d.B[e]; e++) f(c)
        }
    }
}

function Bg(a, b) {
    var c = Xa(a);
    b || c.reverse();
    for (var d = 0, e; e = c[d]; d++)
        for (var f = d + 1, k; k = c[f]; f++) e.type == k.type && e.h == k.h && e.g == k.g && ("move" == e.type ? (e.G = k.G, e.B = k.B, e.s = k.s, c.splice(f, 1), f--) : "change" == e.type && e.element == k.element && e.name == k.name ? (e.newValue = k.newValue, c.splice(f, 1), f--) : "ui" != e.type || "click" != k.element || "commentOpen" != e.element && "mutatorOpen" != e.element && "warningOpen" != e.element || (e.newValue = k.newValue, c.splice(f, 1), f--));
    for (d = c.length - 1; 0 <= d; d--) c[d].J() && c.splice(d, 1);
    b || c.reverse();
    for (d = 1; e = c[d]; d++) "change" == e.type && "mutation" == e.element && c.unshift(c.splice(d, 1)[0]);
    return c
}

function A(a) {
    Ad = "boolean" == typeof a ? a ? vg() : "" : a
}

function Al(a) {
    var b = [];
    a = a.jb();
    for (var c = 0, d; d = a[c]; c++) b[c] = d.id;
    return b
}

function Bl(a) {
    a && (this.h = a.id, this.g = a.A.id);
    this.i = Ad;
    this.Ng = zd
}
Bl.prototype.J = function() {
    return !1
};
Bl.prototype.j = function() {};

function tg(a) {
    a && (tg.w.constructor.call(this, a), this.L = Eg(a), this.H = Al(a))
}
t(tg, Bl);
tg.prototype.type = "create";
tg.prototype.j = function(a) {
    var b = wg[this.g] || null;
    if (a) a = x("xml"), a.appendChild(this.L), Lg(a, b);
    else {
        a = 0;
        for (var c; c = this.H[a]; a++) {
            var d = b.gc[c] || null;
            d ? d.D(!1, !1) : c == this.h && console.warn("Can't uncreate non-existant block: " + c)
        }
    }
};

function lj(a) {
    if (a) {
        if (a.getParent()) throw "Connected blocks cannot be deleted.";
        lj.w.constructor.call(this, a);
        this.L = Eg(a);
        this.H = Al(a)
    }
}
t(lj, Bl);
lj.prototype.type = "delete";
lj.prototype.j = function(a) {
    var b = wg[this.g] || null;
    if (a) {
        a = 0;
        for (var c; c = this.H[a]; a++) {
            var d = b.gc[c] || null;
            d ? d.D(!1, !1) : c == this.h && console.warn("Can't delete non-existant block: " + c)
        }
    } else a = x("xml"), a.appendChild(this.L), Lg(a, b)
};

function Ci(a, b, c, d, e) {
    a && (Ci.w.constructor.call(this, a), this.element = b, this.name = c, this.H = d, this.newValue = e)
}
t(Ci, Bl);
Ci.prototype.type = "change";
Ci.prototype.J = function() {
    return this.H == this.newValue
};
Ci.prototype.j = function(a) {
    var b = (wg[this.g] || null).gc[this.h] || null;
    if (b) switch (b.wb && b.wb.ga(!1), a = a ? this.newValue : this.H, this.element) {
        case "field":
            (b = Sg(b, this.name)) ? b.ha(a): console.warn("Can't set non-existant field: " + this.name);
            break;
        case "comment":
            b.td(a || null);
            break;
        case "collapsed":
            b.$c(a);
            break;
        case "disabled":
            b.Vd(a);
            break;
        case "inline":
            b.kb(a);
            break;
        case "mutation":
            var c = "";
            b.Ja && (c = (c = b.Ja()) && Jg(c));
            if (b.gb) {
                a = a || "<mutation></mutation>";
                var d = Kg("<xml>" + a + "</xml>");
                b.gb(d.firstChild)
            }
            E(new Ci(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existant block: " + this.h)
};

function Dd(a) {
    a && (Dd.w.constructor.call(this, a), a = Cl(this), this.O = a.pj, this.L = a.hj, this.H = a.Ei)
}
t(Dd, Bl);
Dd.prototype.type = "move";

function Fd(a) {
    var b = Cl(a);
    a.G = b.pj;
    a.B = b.hj;
    a.s = b.Ei
}

function Cl(a) {
    var b = (wg[a.g] || null).gc[a.h] || null;
    a = {};
    var c = b.getParent();
    if (c) {
        a.pj = c.id;
        a: {
            for (var d = 0, e; e = c.h[d]; d++)
                if (e.I && z(e.I) == b) {
                    b = e;
                    break a
                }
            b = null
        }
        b && (a.hj = b.name)
    } else a.Ei = b.ya();
    return a
}
Dd.prototype.J = function() {
    return this.O == this.G && this.L == this.B && Rc(this.H, this.s)
};
Dd.prototype.j = function(a) {
    var b = wg[this.g] || null,
        c = b.gc[this.h] || null;
    if (c) {
        var d = a ? this.G : this.O,
            e = a ? this.B : this.L;
        a = a ? this.s : this.H;
        var f = null;
        if (d && (f = b.gc[d] || null, !f)) {
            console.warn("Can't connect to non-existant block: " + d);
            return
        }
        c.getParent() && Rd(c);
        if (a) e = c.ya(), c.moveBy(a.x - e.x, a.y - e.y);
        else {
            var c = c.K || c.T,
                k;
            if (e) {
                if (b = I(f, e)) k = b.I
            } else 4 == c.type && (k = f.g);
            k ? c.connect(k) : console.warn("Can't connect to non-existant input: " + e)
        }
    } else console.warn("Can't move non-existant block: " + this.h)
};

function Bi(a, b, c, d) {
    Bi.w.constructor.call(this, a);
    this.element = b;
    this.newValue = d;
    this.Ng = !1
}
t(Bi, Bl);
Bi.prototype.type = "ui";

function Yh(a) {
    a.Ia = this.oe.bind(this);
    a.ad = this.on.bind(this);
    this.m = new Ph(a);
    this.m.Eg = !0;
    this.o = !!a.o;
    this.g = a.Hc;
    this.i = a.ra;
    this.L = [];
    this.H = [];
    this.j = [];
    this.O = []
}
var Dl, El, Fl, Gl, Hl, Il;
g = Yh.prototype;
g.ie = !0;
g.X = 8;
g.wc = Yh.prototype.X;
g.ea = 0;
g.bc = 0;

function Zh(a) {
    a.v = F("g", {
        "class": "blocklyFlyout"
    }, null);
    a.h = F("path", {
        "class": "blocklyFlyoutBackground"
    }, a.v);
    a.v.appendChild(Qh(a.m));
    return a.v
}
g.C = function(a) {
    this.B = a;
    this.m.L = a;
    this.s = new qh(this.m, this.g, !1);
    this.Fc();
    Array.prototype.push.apply(this.L, G(this.v, "wheel", this, this.zn));
    this.ie || (this.G = this.qg.bind(this), this.B.yc(this.G));
    Array.prototype.push.apply(this.L, G(this.v, "mousedown", this, this.Ej))
};
g.D = function() {
    this.Fc();
    J(this.L);
    this.G && (this.B.Td(this.G), this.G = null);
    this.s && (this.s.D(), this.s = null);
    this.m && (this.m.L = null, this.m.D(), this.m = null);
    this.v && (y(this.v), this.v = null);
    this.B = this.h = null
};
g.Xb = function() {
    return this.ea
};
g.jd = function() {
    return this.bc
};
g.oe = function() {
    if (!this.$()) return null;
    try {
        var a = this.m.cb.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = 2,
        c = 2;
    if (this.g) {
        1 == this.i && (b = 0);
        var d = this.bc;
        0 == this.i && (d += this.wc - 2);
        var e = this.ea - 4
    } else c = 0, d = this.bc - 4, e = this.ea, this.o || (e -= 2);
    return {
        Ca: d,
        ma: e,
        fb: (a.height + 2 * this.wc) * this.m.scale,
        ib: (a.width + 2 * this.wc) * this.m.scale,
        rc: -this.m.scrollY,
        Ma: -this.m.scrollX,
        Fb: 0,
        Eb: 0,
        $a: b,
        Na: c
    }
};
g.on = function(a) {
    var b = this.oe();
    b && (!this.g && q(a.y) ? this.m.scrollY = -b.fb * a.y : this.g && q(a.x) && (this.m.scrollX = -b.ib * a.x), this.m.translate(this.m.scrollX + b.Na, this.m.scrollY + b.$a))
};
g.position = function() {
    if (this.$()) {
        var a = this.B.Ia();
        if (a) {
            var b = this.g ? a.ma : this.ea,
                b = b - this.X;
            3 == this.i && (b *= -1);
            var c = this.g ? this.bc : a.Ca;
            if (this.g) {
                var d = 0 == this.i,
                    e = ["M 0," + (d ? 0 : this.X)];
                d ? (e.push("h", b + this.X), e.push("v", c), e.push("a", this.X, this.X, 0, 0, 1, -this.X, this.X), e.push("h", -1 * (b - this.X)), e.push("a", this.X, this.X, 0, 0, 1, -this.X, -this.X)) : (e.push("a", this.X, this.X, 0, 0, 1, this.X, -this.X), e.push("h", b - this.X), e.push("a", this.X, this.X, 0, 0, 1, this.X, this.X), e.push("v", c - this.X), e.push("h", -b -
                    this.X))
            } else d = 3 == this.i, e = ["M " + (d ? this.ea : 0) + ",0"], e.push("h", b), e.push("a", this.X, this.X, 0, 0, d ? 0 : 1, d ? -this.X : this.X, this.X), e.push("v", Math.max(0, c - 2 * this.X)), e.push("a", this.X, this.X, 0, 0, d ? 0 : 1, d ? this.X : -this.X, this.X), e.push("h", -b);
            e.push("z");
            this.h.setAttribute("d", e.join(" "));
            b = a.Na;
            3 == this.i && (b += a.ma, b -= this.ea);
            c = a.$a;
            1 == this.i && (c += a.Ca, c -= this.bc);
            this.v.setAttribute("transform", "translate(" + b + "," + c + ")");
            this.g ? this.ea = a.ma : this.bc = a.Ca;
            this.s && this.s.resize()
        }
    }
};

function Fk(a) {
    a.s.set(a.g && a.o ? Infinity : 0)
}
g.zn = function(a) {
    var b = this.g ? a.deltaX : a.deltaY;
    if (b) {
        qb && (b *= 10);
        var c = this.oe(),
            b = this.g ? c.Ma + b : c.rc + b,
            b = Math.min(b, this.g ? c.ib - c.ma : c.fb - c.Ca),
            b = Math.max(b, 0);
        this.s.set(b)
    }
    a.preventDefault();
    a.stopPropagation()
};
g.$ = function() {
    return this.v && "block" == this.v.style.display
};
g.Fc = function() {
    if (this.$()) {
        this.v.style.display = "none";
        for (var a = 0, b; b = this.j[a]; a++) J(b);
        this.j.length = 0;
        this.J && (this.m.Td(this.J), this.J = null)
    }
};
g.show = function(a) {
    this.Fc();
    Jl(this);
    "VARIABLE" == a ? a = qk(this.m.L) : "PROCEDURE" == a && (a = Wk(this.m.L));
    this.v.style.display = "block";
    for (var b = [], c = [], d = this.O.length = 0, e; e = a[d]; d++)
        if (e.tagName && "BLOCK" == e.tagName.toUpperCase()) {
            var f = Pd(e, this.m);
            f.disabled && this.O.push(f);
            b.push(f);
            e = parseInt(e.getAttribute("gap"), 10);
            c.push(isNaN(e) ? 3 * this.wc : e)
        }
    Kl(this, b, c);
    this.j.push(G(this.h, "mouseover", this, function() {
        for (var a = yg(this.m, !1), b = 0, c; c = a[b]; b++) c.yf()
    }));
    this.g ? this.bc = 0 : this.ea = 0;
    this.Pg();
    Ll(this,
        yg(this.m, !1));
    this.qg();
    this.position();
    this.J = this.Pg.bind(this);
    this.m.yc(this.J)
};

function Kl(a, b, c) {
    for (var d = a.wc * a.m.scale, e = a.o ? d : d + 8, f = 0, k; k = b[f]; f++) {
        for (var l = k.jb(), p = 0, n; n = l[p]; p++) n.G = !0;
        k.U();
        p = k.v;
        l = pi(k);
        n = k.K ? 8 : 0;
        a.g && (e += n);
        k.moveBy(a.g && a.o ? -e : e, d);
        a.g ? e += l.width + c[f] - n : d += l.height + c[f];
        n = F("rect", {
            "fill-opacity": 0
        }, null);
        n.sa = k;
        Qi(n);
        a.m.cb.insertBefore(n, k.v);
        k.B = n;
        a.H[f] = n;
        l = a;
        l.ie ? (l.j.push(G(p, "mousedown", null, Ml(l, k))), l.j.push(G(n, "mousedown", null, Ml(l, k)))) : (l.j.push(G(p, "mousedown", null, Nl(l, k))), l.j.push(G(n, "mousedown", null, Nl(l, k))));
        l.j.push(G(p, "mouseover",
            k, k.Xf));
        l.j.push(G(p, "mouseout", k, k.yf));
        l.j.push(G(n, "mouseover", k, k.Xf));
        l.j.push(G(n, "mouseout", k, k.yf))
    }
}

function Jl(a) {
    for (var b = yg(a.m, !1), c = 0, d; d = b[c]; c++) d.A == a.m && d.D(!1, !1);
    for (b = 0; c = a.H[b]; b++) y(c);
    a.H.length = 0
}

function Nl(a, b) {
    return function(c) {
        fi();
        jh();
        dh(c) ? Mj(b, c) : (fh(gh), Dl = c, El = b, Fl = a, Gl = G(document, "mouseup", this, a.Gj), Hl = G(document, "mousemove", this, a.fn));
        c.stopPropagation()
    }
}
g.Ej = function(a) {
    dh(a) || (jh(!0), Ol(), this.Y = a.clientY, this.V = a.clientX, Il = G(document, "mousemove", this, this.Fj), Gl = G(document, "mouseup", this, Ol), a.preventDefault(), a.stopPropagation())
};
g.Gj = function() {
    2 == Ud || Vi || E(new Bi(El, "click", 0, void 0));
    fi()
};
g.Fj = function(a) {
    var b = this.oe();
    if (this.g) {
        if (!(0 > b.ib - b.ma)) {
            var c = a.clientX - this.V;
            this.V = a.clientX;
            a = b.Ma - c;
            a = Oc(a, 0, b.ib - b.ma);
            this.s.set(a)
        }
    } else 0 > b.fb - b.Ca || (c = a.clientY - this.Y, this.Y = a.clientY, a = b.rc - c, a = Oc(a, 0, b.fb - b.Ca), this.s.set(a))
};
g.fn = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = a.clientX - Dl.clientX;
        a = a.clientY - Dl.clientY;
        Math.sqrt(b * b + a * a) > oh && Ml(Fl, El)(Dl)
    }
};

function Ml(a, b) {
    return function(c) {
        if (!dh(c) && !b.disabled) {
            B++;
            var d = a.B,
                e = b.v;
            if (!e) throw "originBlock is not rendered.";
            var e = Bh(e, d),
                f = a.m.scrollX,
                k = a.m.scale;
            e.x += f / k - f;
            3 == a.i && (f = d.Ia().ma - a.ea, k = d.scale, e.x += f / k - f);
            f = a.m.scrollY;
            k = a.m.scale;
            e.y += f / k - f;
            1 == a.i && (f = d.Ia().Ca - a.bc, k = d.scale, e.y += f / k - f);
            k = vd(b);
            k = Pd(k, d);
            f = k.v;
            if (!f) throw "block is not rendered.";
            f = Bh(f, d);
            f.x += d.scrollX / d.scale - d.scrollX;
            f.y += d.scrollY / d.scale - d.scrollY;
            d.Z && !d.Ka && (f.x += d.Z.Xb() / d.scale, f.y += d.Z.jd() / d.scale);
            k.moveBy(e.x -
                f.x, e.y - f.y);
            B--;
            0 == B && (A(!0), E(new tg(k)));
            a.ie ? a.Fc() : a.qg();
            k.Zd(c);
            Ud = 2;
            Ij(k, !0)
        }
    }
}
g.qg = function() {
    for (var a = Ag(this.B), b = yg(this.m, !1), c = 0, d; d = b[c]; c++)
        if (-1 == this.O.indexOf(d)) {
            var e = d.jb();
            d.Vd(e.length > a)
        }
};
g.ne = function() {
    var a = this.v.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 0 == this.i ? new ie(-1E9, c - 1E9, 2E9, 1E9 + a) : 1 == this.i ? new ie(-1E9, c, 2E9, 1E9 + a) : 2 == this.i ? new ie(b - 1E9, -1E9, 1E9 + d, 2E9) : new ie(b, -1E9, 1E9 + d, 2E9)
};

function Ol() {
    Gl && (J(Gl), Gl = null);
    Hl && (J(Hl), Hl = null);
    Il && (J(Il), Il = null);
    Gl && (J(Gl), Gl = null);
    Fl = El = Dl = null
}
g.Pg = function() {
    var a = yg(this.m, !1);
    if (this.g) {
        this.m.scale = this.B.scale;
        for (var b = 0, c = 0, d; d = a[c]; c++) b = Math.max(b, pi(d).height);
        b += 1.5 * this.wc;
        b *= this.m.scale;
        b += K;
        if (this.bc != b) {
            for (c = 0; d = a[c]; c++) {
                var e = pi(d);
                if (d.B) {
                    d.B.setAttribute("width", e.width);
                    d.B.setAttribute("height", e.height);
                    var f = d.K ? 8 : 0,
                        k = d.ya();
                    d.B.setAttribute("y", k.y);
                    d.B.setAttribute("x", this.o ? k.x - e.width + f : k.x - f);
                    (e = d.Cd ? 15 : 0) && d.moveBy(0, e);
                    d.B.setAttribute("y", k.y)
                }
            }
            this.bc = b;
            Qg(this.m)
        }
    } else {
        this.m.scale = this.B.scale;
        for (c =
            b = 0; d = a[c]; c++) k = pi(d).width, d.K && (k -= 8), b = Math.max(b, k);
        b += 1.5 * this.wc + 8;
        b *= this.m.scale;
        b += K;
        if (this.ea != b) {
            for (c = 0; d = a[c]; c++) k = pi(d), this.o && (e = d.ya().x, f = b - this.wc, f /= this.m.scale, f -= 8, d.moveBy(f - e, 0)), d.B && (d.B.setAttribute("width", k.width), d.B.setAttribute("height", k.height), f = d.K ? 8 : 0, e = d.ya(), d.B.setAttribute("x", this.o ? e.x - k.width + f : e.x - f), (k = d.Cd ? 15 : 0) && d.moveBy(0, k), d.B.setAttribute("y", e.y));
            this.ea = b;
            Qg(this.m)
        }
    }
};

function Ll(a, b) {
    if (a.g && a.o) {
        a.position();
        try {
            var c = a.m.cb.getBBox()
        } catch (f) {
            c = {
                height: 0,
                y: 0,
                width: 0,
                x: 0
            }
        }
        for (var c = Math.max(-c.x + a.wc, a.ea / a.m.scale), d = 0, e; e = b[d]; d++) e.moveBy(c, 0), e.B && e.B.setAttribute("x", c + Number(e.B.getAttribute("x")))
    }
};

function Pl(a) {
    if (a.qe && "function" == typeof a.qe) return a.qe();
    if (m(a)) return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b
};

function Ql(a) {
    this.i = void 0;
    this.eb = {};
    if (a) {
        var b;
        if (a.hf && "function" == typeof a.hf) b = a.hf();
        else if (a.qe && "function" == typeof a.qe) b = void 0;
        else if (ea(a) || m(a)) {
            b = [];
            for (var c = a.length, d = 0; d < c; d++) b.push(d)
        } else
            for (d in b = [], c = 0, a) b[c++] = d;
        a = Pl(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
g = Ql.prototype;
g.set = function(a, b) {
    Rl(this, a, b, !1)
};
g.add = function(a, b) {
    Rl(this, a, b, !0)
};

function Rl(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.eb[f] || (a.eb[f] = new Ql);
        a = a.eb[f]
    }
    if (d && void 0 !== a.i) throw Error('The collection already contains the key "' + b + '"');
    a.i = c
}

function Sl(a, b) {
    var c;
    a: {
        c = a;
        for (var d = 0; d < b.length; d++)
            if (c = c.eb[b.charAt(d)], !c) {
                c = void 0;
                break a
            }
    }
    return c ? c.i : void 0
}
g.qe = function() {
    var a = [];
    Tl(this, a);
    return a
};

function Tl(a, b) {
    void 0 !== a.i && b.push(a.i);
    for (var c in a.eb) Tl(a.eb[c], b)
}
g.hf = function(a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!c.eb[e]) return [];
            c = c.eb[e]
        }
        Ul(c, a, b)
    } else Ul(this, "", b);
    return b
};

function Ul(a, b, c) {
    void 0 !== a.i && c.push(b);
    for (var d in a.eb) Ul(a.eb[d], b + d, c)
}
g.clear = function() {
    this.eb = {};
    this.i = void 0
};
g.clone = function() {
    return new Ql(this)
};
g.jj = function() {
    var a;
    if (a = void 0 === this.i) a: {
        a = this.eb;
        for (var b in a) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function Vl() {
    this.h = new Ql;
    this.g = "";
    this.s = this.B = null;
    this.i = this.j = 0
}

function xl(a, b) {
    var c = Ba(yc(b.Y));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = Sl(a.h, c);
        d ? d.push(b) : a.h.set(c, [b])
    }
}

function jl(a, b) {
    var c = Ba(yc(b.Y));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = Sl(a.h, c);
        if (d) {
            for (var e = Je(b), f = 0; f < e; f++) jl(a, Ke(b, f));
            Va(d, b);
            if (!d.length) {
                for (var e = c, f = a.h, c = [], k = 0; k < e.length; k++) {
                    d = e.charAt(k);
                    if (!f.eb[d]) throw Error('The collection does not have the key "' + e + '"');
                    c.push([f, d]);
                    f = f.eb[d]
                }
                for (delete f.i; 0 < c.length;)
                    if (d = c.pop(), e = d[0], d = d[1], e.eb[d].jj()) delete e.eb[d];
                    else break
            }
        }
    }
}

function Wl(a, b) {
    var c = !1,
        d = a.h.hf(b);
    d && d.length && (a.i = 0, a.j = 0, c = Xl(a, Sl(a.h, d[0]))) && (a.B = d);
    return c
}

function Xl(a, b) {
    var c;
    b && (a.i < b.length && (c = b[a.i], a.s = b), c && (c.Sg(), c.select()));
    return !!c
}
Vl.prototype.clear = function() {
    this.g = ""
};
var Yl = "StopIteration" in h ? h.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function Zl() {}
Zl.prototype.next = function() {
    throw Yl;
};
Zl.prototype.ri = function() {
    return this
};

function $l(a) {
    if (a instanceof Zl) return a;
    if ("function" == typeof a.ri) return a.ri();
    if (ea(a)) {
        var b = 0,
            c = new Zl;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw Yl;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function am(a) {
    try {
        return $l(a).next()
    } catch (b) {
        if (b != Yl) throw b;
        return null
    }
};

function bm(a) {
    bc.call(this);
    this.g = a;
    a = u ? "focusout" : "blur";
    this.h = Rb(this.g, u ? "focusin" : "focus", this, !u);
    this.i = Rb(this.g, a, this, !u)
}
t(bm, bc);
bm.prototype.handleEvent = function(a) {
    var b = new Lb(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    cc(this, b)
};
bm.prototype.Ba = function() {
    bm.w.Ba.call(this);
    Yb(this.h);
    Yb(this.i);
    delete this.g
};

function cm(a, b, c) {
    gl.call(this, a, b, c);
    this.V = !0;
    ql(this, !0);
    this.s = this;
    this.O = new Vl;
    this.Db = this.dc = null;
    this.cc = !1;
    this.H = this.fc = this.oa = !0;
    if (u) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (d) {}
}
t(cm, gl);
g = cm.prototype;
g.qb = function() {
    return this
};
g.Gd = function() {
    return 0
};
g.Sg = function() {};
g.Rm = function() {
    this.cc = !0;
    Qe(this.F(), "focused");
    this.s && this.s.select()
};
g.Nm = function() {
    this.cc = !1;
    Se(this.F(), "focused")
};
g.hb = function() {
    return !this.H || cm.w.hb.call(this)
};
g.ac = function(a) {
    this.H ? cm.w.ac.call(this, a) : this.V = a
};
g.rg = function() {
    return Gc
};
g.gf = function() {
    var a = ol(this);
    return a ? a.firstChild : null
};
g.ff = function() {
    return null
};
g.Wd = function() {};
g.pe = function() {
    return cm.w.pe.call(this) + (this.H ? "" : " " + this.h.Ni)
};
g.bf = function() {
    var a = this.hb(),
        b = this.Cd;
    if (a && b) return b;
    b = this.ee;
    if (!a && b) return b;
    b = this.h;
    return a && b.Mi ? b.fd + " " + b.Mi : !a && b.Ii ? b.fd + " " + b.Ii : ""
};
g.yb = function(a) {
    if (this.s != a) {
        var b = !1;
        this.s && (b = null == this.s, ql(this.s, !1));
        if (this.s = a) ql(a, !0), b && a.select();
        cc(this, "change")
    }
};

function dm(a) {
    0 != a.oa && (a.oa = !1, a.qa && em(a))
}

function em(a) {
    function b(a) {
        var e = ll(a);
        if (e) {
            var f = !c || (a.getParent(), 0) ? a.h.Gi : a.h.Fi;
            e.className = f;
            if (e = a.ff()) e.className = ul(a)
        }
        Ie(a, b)
    }
    var c = a.oa;
    b(a)
}

function fm(a) {
    0 != a.fc && (a.fc = !1, a.qa && em(a))
}

function gm(a) {
    if (0 != a.H) {
        a.H = !1;
        if (a.qa) {
            var b = ol(a);
            b && (b.className = a.pe())
        }
        a.s == a && Ke(a, 0) && a.yb(Ke(a, 0))
    }
}
g.sf = function() {
    cm.w.sf.call(this);
    var a = this.F();
    Xe(a, "tree");
    Ye(a, "labelledby", kl(this).id)
};
g.Pa = function() {
    cm.w.Pa.call(this);
    var a = this.F();
    a.className = this.h.Qi;
    a.setAttribute("hideFocus", "true");
    a = this.F();
    a.tabIndex = 0;
    var b = this.dc = new pf(a),
        c = this.Db = new bm(a);
    Ee(this).aa(c, "focusout", this.Nm).aa(c, "focusin", this.Rm).aa(b, "key", this.Mb).aa(a, "mousedown", this.xg).aa(a, "click", this.xg).aa(a, "dblclick", this.xg);
    this.sf()
};
g.Hb = function() {
    cm.w.Hb.call(this);
    this.dc.D();
    this.dc = null;
    this.Db.D();
    this.Db = null
};
g.xg = function(a) {
    var b = hm(this, a);
    if (b) switch (a.type) {
        case "mousedown":
            b.Mg(a);
            break;
        case "click":
            a.preventDefault();
            break;
        case "dblclick":
            b.nj(a)
    }
};
g.Mb = function(a) {
    var b;
    b = this.O;
    var c = !1;
    switch (a.g) {
        case 40:
        case 38:
            if (a.ctrlKey) {
                var c = 40 == a.g ? 1 : -1,
                    d = b.B;
                if (d) {
                    var e = null,
                        f = !1;
                    if (b.s) {
                        var k = b.i + c;
                        0 <= k && k < b.s.length ? (b.i = k, e = b.s) : f = !0
                    }
                    e || (k = b.j + c, 0 <= k && k < d.length && (b.j = k), d.length > b.j && (e = Sl(b.h, d[b.j])), e && e.length && f && (b.i = -1 == c ? e.length - 1 : 0));
                    Xl(b, e) && (b.B = d)
                }
                c = !0
            }
            break;
        case 8:
            d = b.g.length - 1;
            c = !0;
            0 < d ? (b.g = b.g.substring(0, d), Wl(b, b.g)) : 0 == d ? b.g = "" : c = !1;
            break;
        case 27:
            b.g = "", c = !0
    }
    if (!(b = c) && (b = this.s)) {
        b = this.s;
        c = !0;
        switch (a.g) {
            case 39:
                if (a.altKey) break;
                Me(b) && (b.hb() ? Ke(b, 0).select() : b.ac(!0));
                break;
            case 37:
                if (a.altKey) break;
                Me(b) && b.hb() ? b.ac(!1) : (d = b.getParent(), e = b.qb(), d && (e.H || d != e) && d.select());
                break;
            case 40:
                a: if (Me(b) && b.hb()) d = Ke(b, 0);
                    else {
                        for (d = b; d != b.qb();) {
                            e = d.Yb;
                            if (null != e) {
                                d = e;
                                break a
                            }
                            d = d.getParent()
                        }
                        d = null
                    }
                d && d.select();
                break;
            case 38:
                d = b.qd;
                null != d ? d = wl(d) : (d = b.getParent(), e = b.qb(), d = !e.H && d == e || b == e ? null : d);
                d && d.select();
                break;
            default:
                c = !1
        }
        c && (a.preventDefault(), (e = b.qb()) && e.O.clear());
        b = c
    }
    b || (b = this.O, c = !1, a.ctrlKey || a.altKey ||
        (d = String.fromCharCode(a.B || a.g).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.g) && (b.g += d, c = Wl(b, b.g))), b = c);
    b && a.preventDefault();
    return b
};

function hm(a, b) {
    for (var c, d = b.target; null != d;) {
        if (c = il[d.id]) return c;
        if (d == a.F()) break;
        d = d.parentNode
    }
    return null
}
g.createNode = function(a) {
    return new yl(a || Gc, this.h, this.i)
};

function Uh(a) {
    this.m = a;
    this.o = a.options.o;
    this.h = a.options.Hc;
    this.ra = a.options.ra;
    this.g = {
        Dg: 19,
        Qi: "blocklyTreeRoot",
        Ni: "blocklyHidden",
        Oi: "",
        gg: "blocklyTreeRow",
        Pi: "blocklyTreeLabel",
        fd: "blocklyTreeIcon",
        eg: "blocklyTreeIconOpen",
        fg: "blocklyTreeIconNone",
        Ri: "blocklyTreeSelected"
    };
    this.i = {
        gg: "blocklyTreeSeparator"
    };
    this.h && (this.g.cssTreeRow += a.o ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.i.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.o ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.g.cssTreeIcon = "")
}
g = Uh.prototype;
g.width = 0;
g.height = 0;
g.we = null;
g.C = function() {
    var a = this.m;
    this.vc = x("div", "blocklyToolboxDiv");
    this.vc.setAttribute("dir", a.o ? "RTL" : "LTR");
    document.body.appendChild(this.vc);
    G(this.vc, "mousedown", this, function(a) {
        dh(a) || a.target == this.vc ? jh(!1) : jh(!0)
    });
    this.W = new Yh({
        ke: a.options.ke,
        Zb: a,
        o: a.o,
        Hc: a.Hc,
        ra: a.options.ra
    });
    fd(Zh(this.W), a.v);
    this.W.C(a);
    this.g.cleardotPath = a.options.$b + "1x1.gif";
    this.g.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (a.o ? "Rtl" : "Ltr");
    var b = new im(this, this.g);
    this.bd = b;
    gm(b);
    dm(b);
    fm(b);
    b.yb(null);
    jm(this, a.options.Pd);
    b.U(this.vc);
    km(this);
    this.position()
};
g.D = function() {
    this.W.D();
    this.bd.D();
    y(this.vc);
    this.we = this.m = null
};
g.Xb = function() {
    return this.width
};
g.jd = function() {
    return this.height
};
g.position = function() {
    var a = this.vc;
    if (a) {
        var b = Ah(this.m),
            c = oe(b),
            b = lm(b);
        this.h ? (a.style.left = c.x + "px", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, a.style.top = 0 == this.ra ? c.y + "px" : c.y + b.height - a.offsetHeight + "px") : (a.style.left = 3 == this.ra ? c.x + b.width - a.offsetWidth + "px" : c.x + "px", a.style.height = b.height + "px", a.style.top = c.y + "px", this.width = a.offsetWidth, 2 == this.ra && --this.width);
        this.W.position()
    }
};

function jm(a, b) {
    function c(a, b, p) {
        for (var n = null, r = 0, v; v = a.childNodes[r]; r++)
            if (v.tagName) switch (v.tagName.toUpperCase()) {
                case "CATEGORY":
                    n = d.createNode(v.getAttribute("name"));
                    n.Nc = [];
                    b.add(n);
                    var C = v.getAttribute("custom");
                    C ? n.Nc = C : c(v, n, p);
                    C = v.getAttribute("colour");
                    m(C) ? (C.match(/^#[0-9a-fA-F]{6}$/) ? n.qf = C : n.qf = oj(pj(C)), f = !0) : n.qf = "";
                    "true" == v.getAttribute("expanded") ? (n.Nc.length && d.yb(n), n.ac(!0)) : n.ac(!1);
                    n = v;
                    break;
                case "SEP":
                    n && ("CATEGORY" == n.tagName.toUpperCase() ? b.add(new mm(e.i)) : (v =
                        parseFloat(v.getAttribute("gap")), isNaN(v) || (C = parseFloat(n.getAttribute("gap")), n.setAttribute("gap", isNaN(C) ? v : C + v))));
                    break;
                case "BLOCK":
                case "SHADOW":
                    b.Nc.push(v), n = v
            }
    }
    var d = a.bd,
        e = a;
    d.sj();
    d.Nc = [];
    var f = !1;
    c(b, a.bd, a.m.options.$b);
    a.j = f;
    if (d.Nc.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    Qg(a.m)
}

function km(a, b) {
    for (var c = (b || a.bd).hd(), d = 0, e; e = c[d]; d++) {
        var f = ol(e);
        if (f) {
            var k = a.j ? "8px solid " + (e.qf || "#ddd") : "none";
            a.m.o ? f.style.borderRight = k : f.style.borderLeft = k
        }
        km(a, e)
    }
}
g.ne = function() {
    var a = this.vc.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 2 == this.ra ? new ie(-1E7, -1E7, 1E7 + b + d, 2E7) : 3 == this.ra ? new ie(b, -1E7, 1E7 + d, 2E7) : 0 == this.ra ? new ie(-1E7, -1E7, 2E7, 1E7 + c + a) : new ie(0, c, 2E7, 1E7 + d)
};

function im(a, b) {
    this.Z = a;
    cm.call(this, Gc, b)
}
t(im, cm);
im.prototype.Pa = function() {
    im.w.Pa.call(this);
    if (Jb) {
        var a = this.F();
        G(a, "touchstart", this, this.ce)
    }
};
im.prototype.ce = function(a) {
    a.preventDefault();
    var b = hm(this, a);
    b && "touchstart" === a.type && setTimeout(function() {
        b.Mg(a)
    }, 1)
};
im.prototype.createNode = function(a) {
    return new nm(this.Z, a ? zc(a) : Gc, this.h, this.i)
};
im.prototype.yb = function(a) {
    var b = this.Z;
    if (a != this.s && a != b.bd) {
        b.we && (ol(b.we).style.backgroundColor = "");
        if (a) {
            var c = a.qf || "#57e";
            ol(a).style.backgroundColor = c;
            km(b, a)
        }
        c = this.s;
        cm.prototype.yb.call(this, a);
        a && a.Nc && a.Nc.length ? (b.W.show(a.Nc), b.we != a && Fk(b.W)) : b.W.Fc();
        c != a && c != this && (c = new Bi(null, "category", c && yc(c.Y), a && yc(a.Y)), c.g = b.m.id, E(c));
        a && (b.we = a)
    }
};

function nm(a, b, c, d) {
    gl.call(this, b, c, d);
    a && (b = function() {
        Bk(a.m)
    }, Rb(a.bd, "expand", b), Rb(a.bd, "collapse", b))
}
t(nm, yl);
nm.prototype.rg = function() {
    return Ec("span")
};
nm.prototype.Mg = function() {
    Me(this) ? (this.ac(!this.hb()), this.select()) : this.Za ? this.qb().yb(null) : this.select();
    rl(this)
};
nm.prototype.nj = function() {};

function mm(a) {
    nm.call(this, null, "", a)
}
t(mm, nm);
var om = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function pm(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (qm.test(c)) return b.zg = rm(c), b.type = "hex", b;
    a: {
        var d = a.match(sm);
        if (d) {
            var c = Number(d[1]),
                e = Number(d[2]),
                d = Number(d[3]);
            if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                c = [c, e, d];
                break a
            }
        }
        c = []
    }
    if (c.length) return b.zg = oj(c), b.type = "rgb", b;
    if (om && (c = om[a.toLowerCase()])) return b.zg = c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
}
var tm = /#(.)(.)(.)/;

function rm(a) {
    if (!qm.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(tm, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}

function Vj(a) {
    a = rm(a);
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function oj(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = um(b.toString(16));
    c = um(c.toString(16));
    a = um(a.toString(16));
    return "#" + b + c + a
}
var qm = /^#(?:[0-9a-f]{3}){1,2}$/i,
    sm = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function um(a) {
    return 1 == a.length ? "0" + a : a
}

function pj(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = Math.floor(a / 60),
        f = a / 60 - e;
    a = 165.75 * .55;
    var k = 165.75 * (1 - .45 * f),
        f = 165.75 * (1 - .45 * (1 - f));
    switch (e) {
        case 1:
            b = k;
            c = 165.75;
            d = a;
            break;
        case 2:
            b = a;
            c = 165.75;
            d = f;
            break;
        case 3:
            b = a;
            c = k;
            d = 165.75;
            break;
        case 4:
            b = f;
            c = a;
            d = 165.75;
            break;
        case 5:
            b = 165.75;
            c = a;
            d = k;
            break;
        case 6:
        case 0:
            b = 165.75, c = f, d = a
    }
    return [Math.floor(b), Math.floor(c), Math.floor(d)]
}

function Wj(a, b, c) {
    c = Oc(c, 0, 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};

function Aj(a, b) {
    Aj.w.constructor.call(this, a, b)
}
t(Aj, uj);

function zj(a, b, c, d) {
    this.u = null;
    this.B = Number(c);
    this.ea = Number(b);
    this.s = new Ic(this.ea, this.B + 10);
    this.wa = d || "";
    this.ha(a)
}
t(zj, Zi);
g = zj.prototype;
g.Og = null;
g.yd = !1;
g.C = function() {
    if (!this.g) {
        this.g = F("g", {}, null);
        this.dd || (this.g.style.display = "none");
        this.i = F("image", {
            height: this.B + "px",
            width: this.ea + "px"
        }, this.g);
        this.ha(this.G);
        qb && (this.Og = F("rect", {
            height: this.B + "px",
            width: this.ea + "px",
            "fill-opacity": 0
        }, this.g));
        this.u.v.appendChild(this.g);
        var a = this.Og || this.i;
        a.sa = this.u;
        Qi(a)
    }
};
g.D = function() {
    y(this.g);
    this.Og = this.i = this.g = null
};
g.ab = function() {
    return this.G
};
g.ha = function(a) {
    null !== a && (this.G = a, this.i && this.i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", m(a) ? a : ""))
};
g.Cb = function(a) {
    null !== a && (this.wa = a)
};
g.Jf = function() {};

function wj(a, b) {
    wj.w.constructor.call(this, "", b);
    this.ha(a)
}
t(wj, Zi);
g = wj.prototype;
g.Pe = "default";
g.C = function() {
    this.g || (wj.w.C.call(this), this.i = F("text", {
        "class": "blocklyText blocklyCheckbox",
        x: -3,
        y: 14
    }, this.g), this.i.appendChild(document.createTextNode("\u2713")), this.i.style.display = this.va ? "block" : "none")
};
g.ab = function() {
    return String(this.va).toUpperCase()
};
g.ha = function(a) {
    a = "TRUE" == a;
    this.va !== a && (this.u && 0 == B && E(new Ci(this.u, "field", this.name, this.va, a)), this.va = a, this.i && (this.i.style.display = a ? "block" : "none"))
};
g.vd = function() {
    var a = !this.va;
    if (this.u && this.Ya) {
        var b = this.Ya(a);
        void 0 !== b && (a = b)
    }
    null !== a && this.ha(String(a).toUpperCase())
};

function vm(a) {
    bc.call(this);
    this.g = [];
    wm(this, a)
}
t(vm, bc);
g = vm.prototype;
g.Sc = null;
g.Tg = null;

function wm(a, b) {
    b && (Qa(b, function(a) {
        xm(this, a, !1)
    }, a), Ya(a.g, b))
}
g.yb = function(a) {
    a != this.Sc && (xm(this, this.Sc, !1), this.Sc = a, xm(this, a, !0));
    cc(this, "select")
};
g.clear = function() {
    var a = this.g;
    if (!da(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.Sc = null
};
g.Ba = function() {
    vm.w.Ba.call(this);
    delete this.g;
    this.Sc = null
};

function xm(a, b, c) {
    b && ("function" == typeof a.Tg ? a.Tg(b, c) : "function" == typeof b.Wg && b.Wg(c))
};

function ym(a, b, c, d, e) {
    this.g = !!b;
    this.node = null;
    this.i = 0;
    this.s = !1;
    this.j = !c;
    a && zm(this, a, d);
    this.h = void 0 != e ? e : this.i || 0;
    this.g && (this.h *= -1)
}
t(ym, Zl);

function zm(a, b, c) {
    if (a.node = b) a.i = q(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
    q(void 0) && (a.h = void 0)
}
ym.prototype.clone = function() {
    return new ym(this.node, this.g, !this.j, this.i, this.h)
};
ym.prototype.next = function() {
    var a;
    if (this.s) {
        if (!this.node || this.j && 0 == this.h) throw Yl;
        a = this.node;
        var b = this.g ? -1 : 1;
        if (this.i == b) {
            var c = this.g ? a.lastChild : a.firstChild;
            c ? zm(this, c) : zm(this, a, -1 * b)
        } else(c = this.g ? a.previousSibling : a.nextSibling) ? zm(this, c) : zm(this, a.parentNode, -1 * b);
        this.h += this.i * (this.g ? -1 : 1)
    } else this.s = !0;
    a = this.node;
    if (!this.node) throw Yl;
    return a
};
ym.prototype.splice = function(a) {
    var b = this.node,
        c = this.g ? 1 : -1;
    this.i == c && (this.i = -1 * c, this.h += this.i * (this.g ? -1 : 1));
    this.g = !this.g;
    ym.prototype.next.call(this);
    this.g = !this.g;
    for (var c = ea(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) fd(c[d], b);
    y(b)
};

function Am(a, b, c, d) {
    ym.call(this, a, b, c, null, d)
}
t(Am, ym);
Am.prototype.next = function() {
    do Am.w.next.call(this); while (-1 == this.i);
    return this.node
};

function Bm() {}
t(Bm, af);
ba(Bm);
var Cm = 0;
Bm.prototype.nf = function(a) {
    var b = df(this, a);
    a = a.i.Jb("DIV", b ? b.join(" ") : null, Dm(this, a.vb, a.Lb, a.i));
    Xe(a, "grid");
    return a
};

function Dm(a, b, c, d) {
    for (var e = [], f = 0, k = 0; f < c.height; f++) {
        for (var l = [], p = 0; p < c.width; p++) {
            var n = b && b[k++];
            l.push(Em(a, n, d))
        }
        e.push(Fm(a, l, d))
    }
    a = d.Jb("TABLE", a.xa() + "-table", d.Jb("TBODY", a.xa() + "-body", e));
    a.cellSpacing = 0;
    a.cellPadding = 0;
    return a
}

function Fm(a, b, c) {
    a = c.Jb("TR", a.xa() + "-row", b);
    Xe(a, "row");
    return a
}

function Em(a, b, c) {
    a = c.Jb("TD", {
        "class": a.xa() + "-cell",
        id: a.xa() + "-cell-" + Cm++
    }, b);
    Xe(a, "gridcell");
    Ye(a, "selected", !1);
    if (!md(a) && !$e(a, "label")) {
        var d;
        b = new Am(a);
        for (c = ""; !c && (d = am(b));) 1 == d.nodeType && (c = $e(d, "label") || d.title);
        (d = c) && Ye(a, "label", d)
    }
    return a
}
Bm.prototype.se = function(a, b) {
    if (a) {
        var c = Xc(this.xa() + "-body", a)[0];
        if (c) {
            var d = 0;
            Qa(c.rows, function(a) {
                Qa(a.cells, function(a) {
                    ed(a);
                    if (b) {
                        var c = b[d++];
                        c && a.appendChild(c)
                    }
                })
            });
            if (d < b.length) {
                for (var e = [], f = Uc(a), k = c.rows[0].cells.length; d < b.length;) {
                    var l = b[d++];
                    e.push(Em(this, l, f));
                    e.length == k && (l = Fm(this, e, f), c.appendChild(l), e.length = 0)
                }
                if (0 < e.length) {
                    for (; e.length < k;) e.push(Em(this, "", f));
                    l = Fm(this, e, f);
                    c.appendChild(l)
                }
            }
        }
        te(a, qb)
    }
};

function Gm(a, b, c) {
    for (b = b.F(); c && 1 == c.nodeType && c != b;) {
        if ("TD" == c.tagName && Pe(c, a.xa() + "-cell")) return c.firstChild;
        c = c.parentNode
    }
    return null
}
Bm.prototype.xa = function() {
    return "goog-palette"
};

function Hm(a, b, c) {
    xf.call(this, a, b || Bm.nc(), c);
    this.cg &= -89;
    this.H = new Im;
    this.H.Cf(this);
    this.Za = -1
}
t(Hm, xf);
g = Hm.prototype;
g.Lb = null;
g.Dc = -1;
g.Sa = null;
g.Ba = function() {
    Hm.w.Ba.call(this);
    this.Sa && (this.Sa.D(), this.Sa = null);
    this.Lb = null;
    this.H.D()
};
g.Af = function(a) {
    Hm.w.Af.call(this, a);
    Jm(this);
    this.Sa ? (this.Sa.clear(), wm(this.Sa, a)) : (this.Sa = new vm(a), a = ma(this.Mm, this), this.Sa.Tg = a, Ee(this).aa(this.Sa, "select", this.Wm));
    this.Dc = -1
};
g.cf = function() {
    return ""
};
g.ve = function(a) {
    Hm.w.ve.call(this, a);
    var b = Gm(this.h, this, a.target);
    b && a.s && gd(b, a.s) || b == Km(this) || (a = this.vb, Lm(this, a && b ? Pa(a, b) : -1))
};
g.Ec = function(a) {
    Hm.w.Ec.call(this, a);
    if (this.va & 4 && (a = Gm(this.h, this, a.target), a != Km(this))) {
        var b = this.vb;
        Lm(this, b && a ? Pa(b, a) : -1)
    }
};
g.Yc = function(a) {
    var b = Km(this);
    return b ? (a && (this.Sa && this.Sa.Sc ? "mouseup" != a.type || Gm(this.h, this, a.target) : 1) && this.yb(b), Hm.w.Yc.call(this, a)) : !1
};
g.Mb = function(a) {
    var b = this.vb,
        b = b ? b.length : 0,
        c = this.Lb.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.g || 32 == a.g) return this.Yc(a);
    if (36 == a.g) return Lm(this, 0), !0;
    if (35 == a.g) return Lm(this, b - 1), !0;
    var d;
    if (0 > this.Dc)
        if (this.Sa) {
            d = this.Sa;
            var e = d.Sc;
            d = e ? Pa(d.g, e) : -1
        } else d = -1;
    else d = this.Dc;
    switch (a.g) {
        case 37:
            if (-1 == d || 0 == d) d = b;
            Lm(this, d - 1);
            a.preventDefault();
            return !0;
        case 39:
            return d == b - 1 && (d = -1), Lm(this, d + 1), a.preventDefault(), !0;
        case 38:
            -1 == d && (d = b + c - 1);
            if (d >= c) return Lm(this, d - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 == d && (d = -c), d < b - c) return Lm(this, d + c), a.preventDefault(), !0
    }
    return !1
};
g.Wm = function() {};

function Mm(a, b) {
    if (a.F()) throw Error("Component already rendered");
    a.Lb = q(b) ? new Ic(b, void 0) : b;
    Jm(a)
}

function Km(a) {
    var b = a.vb;
    return b && b[a.Dc]
}

function Lm(a, b) {
    b != a.Dc && (Nm(a, a.Dc, !1), a.Za = a.Dc, a.Dc = b, Nm(a, b, !0), cc(a, "a"))
}

function Om(a, b) {
    if (a.Sa) {
        var c = a.Sa;
        c.yb(c.g[b] || null)
    }
}
g.yb = function(a) {
    this.Sa && this.Sa.yb(a)
};

function Nm(a, b, c) {
    if (a.F()) {
        var d = a.vb;
        if (d && 0 <= b && b < d.length) {
            var e;
            e = (e = Km(a)) ? e.parentNode : null;
            a.H.F() != e && (a.H.g = e);
            e = a.H;
            e.Kb(c);
            !!(e.va & 2) == c && (b = d[b]) && (b = b ? b.parentNode : null, d = a.h.xa() + "-cell-hover", c ? Qe(b, d) : Se(b, d), c ? Ye(a.g, "activedescendant", b.id) : b.id == $e(a.g, "activedescendant") && Ze(a.g))
        }
    }
}
g.Kb = function(a) {
    a && -1 == this.Dc ? Lm(this, -1 < this.Za ? this.Za : 0) : a || Lm(this, -1);
    Hm.w.Kb.call(this, a)
};
g.Mm = function(a, b) {
    if (this.F() && a) {
        var c = a.parentNode,
            d = this.h.xa() + "-cell-selected";
        b ? Qe(c, d) : Se(c, d);
        Ye(c, "selected", b)
    }
};

function Jm(a) {
    var b = a.vb;
    if (b)
        if (a.Lb && a.Lb.width) {
            if (b = Math.ceil(b.length / a.Lb.width), !q(a.Lb.height) || a.Lb.height < b) a.Lb.height = b
        } else b = Math.ceil(Math.sqrt(b.length)), a.Lb = new Ic(b, b);
    else a.Lb = new Ic(0, 0)
}

function Im() {
    xf.call(this, null);
    this.wd |= 2
}
t(Im, xf);

function Pm(a, b, c) {
    this.V = a || [];
    Hm.call(this, null, b || Bm.nc(), c);
    Qm(this, this.V)
}
t(Pm, Hm);
Pm.prototype.oa = null;
Pm.prototype.Y = null;

function Qm(a, b) {
    a.V = b;
    a.Y = null;
    a.oa = null;
    var c = Rm(a);
    a.h.se(a.F(), c);
    a.Af(c)
}
Pm.prototype.sg = function() {
    var a = this.Sa ? this.Sa.Sc : null;
    if (a) {
        var b = a.style[Ga()];
        if ("undefined" !== typeof b) a = b;
        else {
            var b = a.style,
                c = je["background-color"];
            if (!c) {
                var d = Ga(),
                    c = d;
                void 0 === a.style[d] && (d = (rb ? "Webkit" : qb ? "Moz" : u ? "ms" : ob ? "O" : null) + Ha(d), void 0 !== a.style[d] && (c = d));
                je["background-color"] = c
            }
            a = b[c] || ""
        }
        return Sm(a)
    }
    return null
};

function Tm(a, b) {
    var c = Sm(b);
    a.oa || (a.oa = Sa(a.V, function(a) {
        return Sm(a)
    }));
    Om(a, c ? Pa(a.oa, c) : -1)
}

function Rm(a) {
    return Sa(a.V, function(a, c) {
        var d = this.i.Jb("DIV", {
            "class": this.h.xa() + "-colorswatch",
            style: "background-color:" + a
        });
        d.title = this.Y && this.Y[c] ? this.Y[c] : "#" == a.charAt(0) ? "RGB (" + Vj(a).join(", ") + ")" : a;
        return d
    }, a)
}

function Sm(a) {
    if (a) try {
        return pm(a).zg
    } catch (b) {}
    return null
};

function Um(a, b) {
    Ae.call(this, a);
    this.h = b || null;
    Ee(this).aa(this, "action", this.an)
}
t(Um, Ae);

function Vm(a) {
    var b = Wm;
    a.h ? Qm(a.h, b) : Xm(a, b)
}

function Ym(a) {
    a.h || Xm(a, []);
    Mm(a.h, 7)
}
g = Um.prototype;
g.sg = function() {
    return this.h ? this.h.sg() : null
};

function Zm(a, b) {
    a.h && Tm(a.h, b)
}
g.Pa = function() {
    Um.w.Pa.call(this);
    this.h && this.h.U(this.F());
    this.F().unselectable = "on"
};
g.Ba = function() {
    Um.w.Ba.call(this);
    this.h && (this.h.D(), this.h = null)
};
g.focus = function() {
    this.h && this.h.F().focus()
};
g.an = function(a) {
    a.stopPropagation();
    cc(this, "change")
};

function Xm(a, b) {
    var c = new Pm(b, null, a.i);
    Mm(c, 5);
    c.zb(32, !0);
    a.ge(c);
    a.h = c;
    a.qa && a.h.U(a.F())
}
var Wm = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function xj(a, b) {
    xj.w.constructor.call(this, a, b);
    this.Cb("\u00a0\u00a0\u00a0")
}
var $m;
t(xj, Zi);
g = xj.prototype;
g.C = function() {
    xj.w.C.call(this);
    this.j.style.fillOpacity = 1;
    this.ha(this.ab())
};
g.Pe = "default";
g.D = function() {
    sg(this);
    xj.w.D.call(this)
};
g.ab = function() {
    return this.ic
};
g.ha = function(a) {
    this.u && 0 == B && this.ic != a && E(new Ci(this.u, "field", this.name, this.ic, a));
    this.ic = a;
    this.j && (this.j.style.fill = a)
};
g.cd = function() {
    var a = this.ic,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]);
    return a
};
g.vd = function() {
    mg(this, this.u.o, an);
    var a = new Um;
    Ym(a);
    Vm(a);
    var b = $c(),
        c = me(),
        d = oe(this.j),
        e = cj(this);
    a.U(og);
    Zm(a, this.ab());
    var f = pe(a.F());
    d.y = d.y + f.height + e.height >= b.height + c.y ? d.y - (f.height - 1) : d.y + (e.height - 1);
    this.u.o ? (d.x += e.width, d.x -= f.width, d.x < c.x && (d.x = c.x)) : d.x > b.width + c.x - f.width && (d.x = b.width + c.x - f.width);
    rg(d.x, d.y, b, c, this.u.o);
    var k = this;
    $m = Rb(a, "change", function(a) {
        a = a.target.sg() || "#000000";
        gk();
        if (k.u && k.Ya) {
            var b = k.Ya(a);
            void 0 !== b && (a = b)
        }
        null !== a && k.ha(a)
    })
};

function an() {
    $m && Yb($m)
};
var ti = null,
    L = null,
    Hd = null,
    Id = null,
    Md = [],
    ei = null,
    Oj = null,
    Ud = 0,
    ki = null;

function lm(a) {
    return {
        width: a.yi,
        height: a.xi
    }
}

function Bk(a) {
    for (; a.options.Zb;) a = a.options.Zb;
    var b = Ah(a),
        c = b.parentNode;
    if (c) {
        var d = c.offsetWidth,
            c = c.offsetHeight;
        b.yi != d && (b.setAttribute("width", d + "px"), b.yi = d);
        b.xi != c && (b.setAttribute("height", c + "px"), b.xi = c);
        a.resize()
    }
}

function li() {
    var a = ti;
    fh(Jj);
    a.Fg = !1;
    ki && (J(ki), ki = null);
    qd && (J(qd), qd = null)
}

function mi(a) {
    if (!(a.touches && 2 <= a.touches.length)) {
        var b = ti;
        if (b.Fg) {
            var c = a.clientX - b.Ta,
                d = a.clientY - b.Ua,
                e = b.Fa,
                f = b.Zg + c,
                k = b.$g + d,
                f = Math.min(f, -e.Eb),
                k = Math.min(k, -e.Fb),
                f = Math.max(f, e.ma - e.Eb - e.ib),
                k = Math.max(k, e.Ca - e.Fb - e.fb);
            b.Ka.set(-f - e.Eb, -k - e.Fb);
            Math.sqrt(c * c + d * d) > oh && Qj();
            a.stopPropagation();
            a.preventDefault()
        }
    }
}

function Hk(a) {
    if (!ti.options.i && !eh(a)) {
        var b = !1;
        if (27 == a.keyCode) jh();
        else if (8 == a.keyCode || 46 == a.keyCode) a.preventDefault(), L && Hg(L) && (b = !0);
        else if (a.altKey || a.ctrlKey || a.metaKey) L && Hg(L) && Ld(L) && (67 == a.keyCode ? (jh(), Pj(L)) : 88 == a.keyCode && (Pj(L), b = !0)), 86 == a.keyCode ? ei && di(Oj) : 90 == a.keyCode && (jh(), ti.eh(a.shiftKey));
        b && (A(!0), jh(), L.D(2 != Ud, !0), Hd && (fe(), Hd = null), A(!1))
    }
}

function fi() {
    Gj();
    Ol()
}
var bn = 0;

function Th(a, b) {
    Qj();
    bn = setTimeout(function() {
        a.button = 2;
        b.Zd(a)
    }, 750)
}

function Qj() {
    bn && (clearTimeout(bn), bn = 0)
}

function Pj(a) {
    var b = vd(a);
    if (2 != Ud)
        for (var c = 0, d; d = b.childNodes[c]; c++)
            if ("next" == d.nodeName.toLowerCase()) {
                b.removeChild(d);
                break
            }
    c = a.ya();
    b.setAttribute("x", a.o ? -c.x : c.x);
    b.setAttribute("y", c.y);
    ei = b;
    Oj = a.A
}

function jh(a) {
    Ui();
    gk();
    a || (a = ti, a.Z && a.Z.W && a.Z.W.ie && a.Z.bd.yb(null))
}

function Ck() {
    var a, b, c, d, e = lm(Ah(this));
    if (this.Z)
        if (0 == this.ra || 1 == this.ra) e.height -= this.Z.jd();
        else if (2 == this.ra || 3 == this.ra) e.width -= this.Z.Xb();
    var f = Yh.prototype.X - 1,
        k = e.width - f,
        f = e.height - f;
    a = yg(this);
    if (a.length) {
        d = Kj(a[0]);
        for (b = 1; b < a.length; b++) {
            var l = Kj(a[b]);
            l.Qb.x < d.Qb.x && (d.Qb.x = l.Qb.x);
            l.hc.x > d.hc.x && (d.hc.x = l.hc.x);
            l.Qb.y < d.Qb.y && (d.Qb.y = l.Qb.y);
            l.hc.y > d.hc.y && (d.hc.y = l.hc.y)
        }
        a = d.Qb.x;
        b = d.Qb.y;
        c = d.hc.x - d.Qb.x;
        d = d.hc.y - d.Qb.y
    } else d = c = b = a = 0;
    var p = c * this.scale,
        l = d * this.scale,
        n = a * this.scale,
        r = b * this.scale;
    this.Ka ? (a = Math.min(n - k / 2, n + p - k), k = Math.max(n + p + k / 2, n + k), b = Math.min(r - f / 2, r + l - f), f = Math.max(r + l + f / 2, r + f)) : (k = a + c, f = b + d);
    d = 0;
    this.Z && 2 == this.ra && (d = this.Z.Xb());
    l = 0;
    this.Z && 0 == this.ra && (l = this.Z.jd());
    return {
        Ca: e.height,
        ma: e.width,
        fb: f - b,
        ib: k - a,
        rc: -this.scrollY,
        Ma: -this.scrollX,
        Fb: b,
        Eb: a,
        $a: l,
        Na: d,
        Rr: this.Z ? this.Z.Xb() : 0,
        Qr: this.Z ? this.Z.jd() : 0,
        $e: this.W ? this.W.Xb() : 0,
        Zi: this.W ? this.W.jd() : 0,
        ra: this.ra
    }
}

function Dk(a) {
    if (!this.Ka) throw "Attempt to set main workspace scroll without scrollbars.";
    var b = this.Ia();
    q(a.x) && (this.scrollX = -b.ib * a.x - b.Eb);
    q(a.y) && (this.scrollY = -b.fb * a.y - b.Fb);
    a = this.scrollX + b.Na;
    b = this.scrollY + b.$a;
    this.translate(a, b);
    this.options.j && (this.options.j.setAttribute("x", a), this.options.j.setAttribute("y", b), u && Wh(this))
}
h.Blockly || (h.Blockly = {});
h.Blockly.getMainWorkspace = function() {
    return ti
};
h.Blockly.addChangeListener = function(a) {
    console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.");
    return ti.yc(a)
};
M.Bn = {};
M.Bn.Lr = {};
M.yj = "\u6dfb\u52a0\u6ce8\u91ca";
M.Cn = "\u8bf7\u6388\u6743\u8fd9\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4fdd\u5b58\u60a8\u7684\u4f5c\u54c1\u5e76\u5171\u4eab\u3002";
M.Ij = "\u66f4\u6539\u503c\uff1a";
M.Dn = "\u901a\u8fc7\u5728\u6b64\u6846\u8f93\u5165\u4e0e\u60a8\u7684\u5408\u4f5c\u8005\u6c9f\u901a\uff01";
M.Jj = "\u6e05\u7406\u5757";
M.Kj = "\u6298\u53e0\u5757";
M.Lj = "\u6298\u53e0\u5757";
M.En = "\u989c\u82721";
M.Fn = "\u989c\u82722";
M.Gn = "http://meyerweb.com/eric/tools/color-blend/";
M.Hn = "\u6bd4\u4f8b";
M.In = "\u6df7\u5408";
M.Jn = "\u7528\u4e00\u4e2a\u7ed9\u5b9a\u7684\u6bd4\u7387(0.0-1.0)\u6df7\u5408\u4e24\u79cd\u989c\u8272\u3002";
M.Kn = "https://zh.wikipedia.org/wiki/\u989c\u8272";
M.Ln = "\u4ece\u8c03\u8272\u677f\u4e2d\u9009\u62e9\u4e00\u79cd\u989c\u8272\u3002";
M.Mn = "http://randomcolour.com";
M.Nn = "\u968f\u673a\u989c\u8272";
M.On = "\u968f\u673a\u9009\u62e9\u4e00\u79cd\u989c\u8272\u3002";
M.Pn = "\u84dd\u8272";
M.Qn = "\u7eff\u8272";
M.Rn = "http://www.december.com/html/spec/colorper.html";
M.Sn = "\u7ea2\u8272";
M.Tn = "\u989c\u8272";
M.Un = "\u901a\u8fc7\u6307\u5b9a\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u7684\u91cf\u521b\u5efa\u4e00\u79cd\u989c\u8272\u3002\u6240\u6709\u7684\u503c\u5fc5\u987b\u4ecb\u4e8e0\u548c100\u4e4b\u95f4\u3002";
M.Vn = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
M.Wn = "\u4e2d\u65ad\u5faa\u73af";
M.Xn = "\u7ee7\u7eed\u4e0b\u4e00\u6b21\u5faa\u73af";
M.Yn = "\u4e2d\u65ad\u5305\u542b\u5b83\u7684\u5faa\u73af\u3002";
M.Zn = "\u8df3\u8fc7\u8fd9\u4e2a\u5faa\u73af\u7684\u5269\u4f59\u90e8\u5206\uff0c\u5e76\u7ee7\u7eed\u4e0b\u4e00\u6b21\u8fed\u4ee3\u3002";
M.$n = "\u8b66\u544a\uff1a\u6b64\u5757\u4ec5\u53ef\u7528\u4e8e\u5728\u4e00\u4e2a\u5faa\u73af\u5185\u3002";
M.ao = "https://github.com/google/blockly/wiki/Loops#for-each";
M.co = "\u4e3a\u6bcf\u4e2a\u9879\u76ee %1 \u5728\u5217\u8868\u4e2d %2";
M.eo = "\u904d\u5386\u6bcf\u4e2a\u5217\u8868\u4e2d\u7684\u9879\u76ee\uff0c\u5c06\u53d8\u91cf\u201c%1\u201d\u8bbe\u5b9a\u5230\u8be5\u9879\u4e2d\uff0c\u7136\u540e\u6267\u884c\u67d0\u4e9b\u8bed\u53e5\u3002";
M.ho = "https://github.com/google/blockly/wiki/Loops#count-with";
M.jo = "\u4f7f\u7528 %1 \u4ece\u8303\u56f4 %2 \u5230 %3 \u6bcf\u9694 %4";
M.lo = "\u4ece\u8d77\u59cb\u6570\u5230\u7ed3\u5c3e\u6570\u4e2d\u53d6\u51fa\u53d8\u91cf\u201c%1\u201d\u7684\u503c\uff0c\u6309\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u6267\u884c\u6307\u5b9a\u7684\u5757\u3002";
M.Oj = "\u5728if\u8bed\u53e5\u5757\u4e2d\u589e\u52a0\u4e00\u4e2a\u6761\u4ef6\u3002";
M.Qj = "\u6dfb\u52a0\u4e00\u4e2a\u6700\u7ec8\u7684\uff0c\u5305\u62ec\u6240\u6709\u60c5\u51b5\u7684\u8282\u5230if\u5757\u4e2d\u3002";
M.hh = "https://github.com/google/blockly/wiki/IfElse";
M.Sj = "\u589e\u52a0\u3001\u5220\u9664\u6216\u91cd\u65b0\u6392\u5217\u5404\u8282\u6765\u91cd\u65b0\u914d\u7f6e\u201cif\u201d\u5757\u3002";
M.ih = "\u5426\u5219";
M.jh = "\u5426\u5219\u5982\u679c";
M.Nf = "\u5982\u679c";
M.lh = "\u5982\u679c\u503c\u4e3a\u771f\uff0c\u6267\u884c\u4e00\u4e9b\u8bed\u53e5\u3002";
M.mh = "\u5982\u679c\u503c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u8bed\u53e5\u7684\u7b2c\u4e00\u5757\u3002\u5426\u5219\uff0c\u5219\u6267\u884c\u8bed\u53e5\u7684\u7b2c\u4e8c\u5757\u3002";
M.nh = "\u5982\u679c\u7b2c\u4e00\u4e2a\u503c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u8bed\u53e5\u7684\u7b2c\u4e00\u4e2a\u5757\u3002\u5426\u5219\uff0c\u5982\u679c\u7b2c\u4e8c\u4e2a\u503c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u8bed\u53e5\u7684\u7b2c\u4e8c\u5757\u3002";
M.oh = "\u5982\u679c\u7b2c\u4e00\u4e2a\u503c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u8bed\u53e5\u7684\u7b2c\u4e00\u5757\u3002\u5426\u5219\uff0c\u5982\u679c\u7b2c\u4e8c\u4e2a\u503c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u8bed\u53e5\u7684\u7b2c\u4e8c\u5757\u3002\u5982\u679c\u6ca1\u6709\u503c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u8bed\u53e5\u7684\u6700\u540e\u4e00\u5757\u3002";
M.mo = "https://zh.wikipedia.org/wiki/For\u5faa\u73af";
M.Oe = "\u6267\u884c";
M.no = "\u91cd\u590d %1 \u6b21";
M.oo = "\u591a\u6b21\u6267\u884c\u4e00\u4e9b\u8bed\u53e5\u3002";
M.Tj = "https://github.com/google/blockly/wiki/Loops#repeat";
M.qo = "\u91cd\u590d\u76f4\u5230";
M.so = "\u91cd\u590d\u5f53";
M.to = "\u53ea\u8981\u503c\u4e3a\u5047\uff0c\u6267\u884c\u4e00\u4e9b\u8bed\u53e5\u3002";
M.Uj = "\u53ea\u8981\u503c\u4e3a\u771f\uff0c\u6267\u884c\u4e00\u4e9b\u8bed\u53e5\u3002";
M.Vj = "\u5220\u9664\u6240\u6709%1\u5757\u5417\uff1f";
M.ph = "\u5220\u9664\u5757";
M.qh = "\u5220\u9664 %1 \u5757";
M.Wj = "\u7981\u7528\u5757";
M.Xj = "\u590d\u5236";
M.Yj = "\u542f\u7528\u5757";
M.Zj = "\u5c55\u5f00\u5757";
M.$j = "\u5c55\u5f00\u5757";
M.ak = "\u5916\u90e8\u8f93\u5165";
M.ck = "\u5e2e\u52a9";
M.dk = "\u5355\u884c\u8f93\u5165";
M.yo = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
M.zo = "\u521b\u5efa\u7a7a\u5217\u8868";
M.Ao = "\u8fd4\u56de\u4e00\u4e2a\u5217\u8868\uff0c\u957f\u5ea6\u4e3a 0\uff0c\u4e0d\u5305\u542b\u4efb\u4f55\u6570\u636e\u8bb0\u5f55";
M.Bo = "\u5217\u8868";
M.Co = "\u589e\u52a0\u3001\u5220\u9664\u6216\u91cd\u65b0\u6392\u5217\u5404\u90e8\u5206\u4ee5\u6b64\u91cd\u65b0\u914d\u7f6e\u8fd9\u4e2a\u5217\u8868\u5757\u3002";
M.Do = "https://github.com/google/blockly/wiki/Lists#create-list-with";
M.Eo = "\u5efa\u7acb\u5b57\u4e32\u4f7f\u7528";
M.Go = "\u5c06\u4e00\u4e2a\u9879\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\u3002";
M.Ho = "\u5efa\u7acb\u4e00\u4e2a\u5177\u6709\u4efb\u610f\u6570\u91cf\u9879\u76ee\u7684\u5217\u8868\u3002";
M.Io = "\u7b2c\u4e00";
M.Jo = "\u5012\u6570\u7b2c#";
M.Ko = "#";
M.Lo = "\u83b7\u5f97";
M.Mo = "\u53d6\u51fa\u5e76\u79fb\u9664";
M.Po = "\u6700\u540e";
M.Qo = "\u968f\u673a";
M.Ro = "\u79fb\u9664";
M.So = "\u7a7a\u767d";
M.To = "\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\u3002";
M.Uo = "\u8fd4\u56de\u5728\u5217\u8868\u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1\u662f\u6700\u540e\u4e00\u9879\u3002";
M.Vo = "\u8fd4\u56de\u5728\u5217\u8868\u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1\u662f\u7b2c\u4e00\u4e2a\u9879\u76ee\u3002";
M.Wo = "\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6700\u540e\u4e00\u9879\u3002";
M.Xo = "\u968f\u673a\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u9879\u76ee\u3002";
M.Yo = "\u79fb\u9664\u5e76\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\u3002";
M.Zo = "\u79fb\u9664\u5e76\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1 \u662f\u6700\u540e\u4e00\u9879\u3002";
M.$o = "\u79fb\u9664\u5e76\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1 \u662f\u7b2c\u4e00\u9879\u3002";
M.ap = "\u79fb\u9664\u5e76\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u9879\u76ee\u3002";
M.bp = "\u79fb\u9664\u5e76\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u968f\u673a\u9879\u76ee\u4e2d\u3002";
M.cp = "\u79fb\u9664\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u9879";
M.ep = "\u5220\u9664\u5728\u5217\u8868\u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1\u662f\u6700\u540e\u4e00\u9879\u3002";
M.fp = "\u79fb\u9664\u5728\u5217\u8868\u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1 \u662f\u7b2c\u4e00\u9879\u3002";
M.gp = "\u79fb\u9664\u5217\u8868\u4e2d\u7684\u6700\u540e\u4e00\u9879";
M.hp = "\u5220\u9664\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u968f\u673a\u7684\u9879\u3002";
M.ip = "\u5230\u5012\u6570\u7b2c#";
M.jp = "\u5230#";
M.kp = "\u5230\u6700\u540e";
M.lp = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
M.np = "\u4ece\u5934\u83b7\u5f97\u5b50\u5217\u8868";
M.op = "\u4ece\u5012\u6570#\u53d6\u5f97\u5b50\u5217\u8868";
M.pp = "\u4ece#\u53d6\u5f97\u5b50\u5217\u8868";
M.qp = "\u7a7a\u767d";
M.rp = "\u590d\u5236\u5217\u8868\u4e2d\u6307\u5b9a\u7684\u90e8\u5206\u3002";
M.sp = "\u627e\u51fa\u7b2c\u4e00\u4e2a\u9879\u51fa\u73b0";
M.ek = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
M.up = "\u627e\u51fa\u6700\u540e\u4e00\u4e2a\u9879\u51fa\u73b0";
M.vp = "\u8fd4\u56de\u5728\u5217\u8868\u4e2d\u7684\u7b2c\u4e00/\u6700\u540e\u4e00\u4e2a\u5339\u914d\u9879\u7684\u7d22\u5f15\u503c\u3002\u5982\u679c\u627e\u4e0d\u5230\u9879\u76ee\u5219\u8fd4\u56de0\u3002";
M.Qe = "\u5728\u5217\u8868\u4e2d";
M.wp = "https://github.com/google/blockly/wiki/Lists#is-empty";
M.xp = "%1\u662f\u7a7a\u7684";
M.yp = "\u5982\u679c\u6539\u5217\u8868\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.zp = "https://github.com/google/blockly/wiki/Lists#length-of";
M.Ap = "%1\u7684\u957f\u5ea6";
M.Bp = "\u8fd4\u56de\u5217\u8868\u7684\u957f\u5ea6\u3002";
M.Cp = "https://github.com/google/blockly/wiki/Lists#create-list-with";
M.Dp = "\u5efa\u7acb\u5217\u8868\u4f7f\u7528\u9879 %1 \u91cd\u590d %2 \u6b21";
M.Ep = "\u5efa\u7acb\u5305\u542b\u6307\u5b9a\u91cd\u590d\u6b21\u6570\u7684\u503c\u7684\u5217\u8868\u3002";
M.Fp = "https://github.com/google/blockly/wiki/Lists#in-list--set";
M.Hp = "\u4e3a";
M.Ip = "\u63d2\u5165\u5728";
M.Jp = "\u8bbe\u7f6e";
M.Kp = "\u5728\u5217\u8868\u7684\u8d77\u59cb\u5904\u6dfb\u52a0\u8be5\u9879\u3002";
M.Lp = "\u63d2\u5165\u5728\u5217\u8868\u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1\u662f\u6700\u540e\u4e00\u9879\u3002";
M.Mp = "\u63d2\u5165\u5728\u5217\u8868\u4e2d\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1\u662f\u7b2c\u4e00\u9879\u3002";
M.Np = "\u5c06\u8be5\u9879\u8ffd\u52a0\u5230\u5217\u8868\u7684\u672b\u5c3e\u3002";
M.Op = "\u5728\u5217\u8868\u4e2d\u968f\u673a\u63d2\u5165\u9879\u3002";
M.Pp = "\u8bbe\u7f6e\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\u3002";
M.Qp = "\u8bbe\u7f6e\u5728\u5217\u8868\u4e2d\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1\u662f\u6700\u540e\u4e00\u9879\u3002";
M.Rp = "\u8bbe\u7f6e\u5728\u5217\u8868\u4e2d\u6307\u5b9a\u4f4d\u7f6e\u7684\u9879\u3002#1\u662f\u7b2c\u4e00\u9879\u3002";
M.Sp = "\u8bbe\u7f6e\u5217\u8868\u4e2d\u7684\u6700\u540e\u4e00\u9879\u3002";
M.Tp = "\u8bbe\u7f6e\u5217\u8868\u4e2d\u4e00\u4e2a\u968f\u673a\u7684\u9879\u76ee\u3002";
M.Vp = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
M.Wp = "\u5347\u5e8f";
M.Xp = "\u964d\u5e8f";
M.Yp = "\u6392\u5e8f%1 %2 %3";
M.Zp = "\u6392\u5e8f\u4e00\u4e2a\u5217\u8868\u7684\u62f7\u8d1d\u3002";
M.$p = "\u6309\u5b57\u6bcd\u6392\u5e8f\uff0c\u5ffd\u7565\u5927\u5c0f\u5199";
M.aq = "\u6309\u6570\u5b57\u6392\u5e8f";
M.bq = "\u6309\u5b57\u6bcd\u6392\u5e8f";
M.cq = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
M.eq = "\u4ece\u6587\u672c\u5236\u4f5c\u5217\u8868";
M.fq = "\u4ece\u5217\u8868\u62c6\u51fa\u6587\u672c";
M.gq = "\u52a0\u5165\u6587\u672c\u5217\u8868\u81f3\u4e00\u4e2a\u6587\u672c\uff0c\u7531\u5206\u9694\u7b26\u5206\u9694\u3002";
M.hq = "\u62c6\u5206\u6587\u672c\u5230\u6587\u672c\u5217\u8868\uff0c\u6309\u6bcf\u4e2a\u5206\u9694\u7b26\u62c6\u5206\u3002";
M.iq = "\u7528\u5206\u9694\u7b26";
M.rh = "\u5047";
M.fk = "https://github.com/google/blockly/wiki/Logic#values";
M.gk = "\u8fd4\u56de\u771f\u6216\u5047\u3002";
M.sh = "\u771f";
M.uh = "https://zh.wikipedia.org/wiki/\u4e0d\u7b49";
M.vh = "\u5982\u679c\u4e24\u4e2a\u8f93\u5165\u7ed3\u679c\u76f8\u7b49\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.wh = "\u5982\u679c\u7b2c\u4e00\u4e2a\u8f93\u5165\u7ed3\u679c\u6bd4\u7b2c\u4e8c\u4e2a\u5927\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.xh = "\u5982\u679c\u7b2c\u4e00\u4e2a\u8f93\u5165\u7ed3\u679c\u5927\u4e8e\u6216\u7b49\u4e8e\u7b2c\u4e8c\u4e2a\u8f93\u5165\u7ed3\u679c\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.yh = "\u5982\u679c\u7b2c\u4e00\u4e2a\u8f93\u5165\u7ed3\u679c\u6bd4\u7b2c\u4e8c\u4e2a\u5c0f\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.zh = "\u5982\u679c\u7b2c\u4e00\u4e2a\u8f93\u5165\u7ed3\u679c\u5c0f\u4e8e\u6216\u7b49\u4e8e\u7b2c\u4e8c\u4e2a\u8f93\u5165\u7ed3\u679c\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.Ah = "\u5982\u679c\u4e24\u4e2a\u8f93\u5165\u7ed3\u679c\u4e0d\u76f8\u7b49\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.hk = "https://github.com/google/blockly/wiki/Logic#not";
M.ik = "\u975e%1";
M.jk = "\u5982\u679c\u8f93\u5165\u7ed3\u679c\u4e3a\u5047\uff0c\u5219\u8fd4\u56de\u771f\uff1b\u5982\u679c\u8f93\u5165\u7ed3\u679c\u4e3a\u771f\uff0c\u5219\u8fd4\u56de\u5047\u3002";
M.kk = "\u7a7a";
M.lk = "https://en.wikipedia.org/wiki/Nullable_type";
M.nk = "\u8fd4\u56de\u7a7a\u503c\u3002";
M.Bh = "\u548c";
M.pk = "https://github.com/google/blockly/wiki/Logic#logical-operations";
M.Ch = "\u6216";
M.qk = "\u5982\u679c\u4e24\u4e2a\u8f93\u5165\u7ed3\u679c\u90fd\u4e3a\u771f\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.rk = "\u5982\u679c\u81f3\u5c11\u6709\u4e00\u4e2a\u8f93\u5165\u7ed3\u679c\u4e3a\u771f\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.tk = "\u6d4b\u8bd5";
M.vk = "https://zh.wikipedia.org/wiki/\u6761\u4ef6\u8fd0\u7b97\u7b26";
M.wk = "\u5982\u679c\u4e3a\u5047";
M.xk = "\u5982\u679c\u4e3a\u771f";
M.yk = "\u68c0\u67e5\u201ctest\u201d\u4e2d\u7684\u6761\u4ef6\u3002\u5982\u679c\u6761\u4ef6\u4e3a\u771f\uff0c\u5219\u8fd4\u56de\u201cif true\u201d\u7684\u503c\uff0c\u5426\u5219\uff0c\u5219\u8fd4\u56de\u201cif false\u201d\u7684\u503c\u3002";
M.zk = "+";
M.Dh = "https://zh.wikipedia.org/wiki/\u7b97\u672f";
M.Eh = "\u8fd4\u56de\u4e24\u4e2a\u6570\u5b57\u7684\u548c\u3002";
M.Fh = "\u8fd4\u56de\u4e24\u4e2a\u6570\u5b57\u7684\u5546\u3002";
M.Gh = "\u8fd4\u56de\u4e24\u4e2a\u6570\u5b57\u7684\u533a\u522b\u3002";
M.Hh = "\u8fd4\u56de\u4e24\u4e2a\u6570\u5b57\u7684\u4e58\u79ef\u3002";
M.Ak = "\u8fd4\u56de\u7b2c\u4e00\u4e2a\u6570\u7684\u7b2c\u4e8c\u4e2a\u6570\u6b21\u5e42\u3002";
M.Ih = "https://zh.wikipedia.org/wiki/%E5%8A%A0%E6%B3%95";
M.Bk = "\u66f4\u6539 %1 \u7531 %2";
M.Jh = "\u5c06\u4e00\u4e2a\u6570\u6dfb\u52a0\u5230\u53d8\u91cf\u201c%1\u201d\u3002";
M.Dk = "https://zh.wikipedia.org/wiki/\u6570\u5b66\u5e38\u6570";
M.Ek = "\u8fd4\u56de\u4e00\u4e2a\u5e38\u89c1\u5e38\u91cf\uff1a\u03c0 (3.141......)\uff0ce (2.718...)\u3001\u03c6 (1.618...)\u3001 sqrt(2) (1.414......)\u3001sqrt(\u00bd) (0.707......)\u6216 \u221e\uff08\u65e0\u7a77\u5927\uff09\u3002";
M.Fk = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";
M.Gk = "\u9650\u5236\u6570\u5b57 %1 \u4ecb\u4e8e (\u4f4e) %2 \u5230 (\u9ad8) %3";
M.Hk = "\u9650\u5236\u6570\u5b57\u4ecb\u4e8e\u4e24\u4e2a\u6307\u5b9a\u7684\u6570\u5b57\u4e4b\u95f4";
M.Ik = "\u00f7";
M.Jk = "\u53ef\u88ab\u6574\u9664";
M.Kk = "\u662f\u5076\u6570";
M.Lk = "\u4e3a\u8d1f";
M.Mk = "\u662f\u5947\u6570";
M.Nk = "\u4e3a\u6b63";
M.Ok = "\u662f\u8d28\u6570";
M.Pk = "\u5982\u679c\u6570\u5b57\u662f\u5076\u6570\u3001\u5947\u6570\u3001\u975e\u8d1f\u6574\u6570\u3001\u6b63\u6570\u3001\u8d1f\u6570\u6216\u5982\u679c\u5b83\u53ef\u88ab\u67d0\u6570\u5b57\u6574\u9664\uff0c\u5219\u8fd4\u56de\u771f\u6216\u5047\u3002";
M.Qk = "\u4e3a\u6574\u6570";
M.Rk = "https://zh.wikipedia.org/wiki/\u6a21\u9664";
M.Sk = "\u53d6\u4f59\u6570\u81ea %1 \u00f7 %2";
M.Tk = "\u8fd4\u56de\u8fd9\u4e24\u4e2a\u6570\u5b57\u76f8\u9664\u540e\u7684\u4f59\u6570\u3002";
M.Uk = "\u00d7";
M.Kh = "https://zh.wikipedia.org/wiki/\u6570";
M.Lh = "\u4e00\u4e2a\u6570\u5b57\u3002";
M.Vk = "";
M.Wk = "\u5217\u8868\u4e2d\u7684\u5e73\u5747\u6570";
M.Xk = "\u5217\u8868\u4e2d\u7684\u6700\u5927\u503c";
M.Yk = "\u5217\u8868\u4e2d\u4f4d\u6570";
M.Zk = "\u5217\u8868\u4e2d\u7684\u6700\u5c0f\u503c";
M.$k = "\u5217\u8868\u6a21\u5f0f";
M.al = "\u5217\u8868\u7684\u968f\u673a\u9879";
M.bl = "\u5217\u8868\u4e2d\u7684\u6807\u51c6\u5dee";
M.cl = "\u5217\u8868\u4e2d\u7684\u6570\u7684\u603b\u548c";
M.dl = "\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6570\u503c\u7684\u5e73\u5747\u503c\u3002";
M.fl = "\u8fd4\u56de\u5217\u8868\u4e2d\u6700\u5927\u6570\u3002";
M.hl = "\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u4e2d\u4f4d\u6570\u3002";
M.il = "\u8fd4\u56de\u5217\u8868\u4e2d\u6700\u5c0f\u6570\u3002";
M.jl = "\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6700\u5e38\u89c1\u7684\u9879\u7684\u5217\u8868\u3002";
M.kl = "\u4ece\u5217\u8868\u4e2d\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u7684\u5143\u7d20\u3002";
M.ll = "\u8fd4\u56de\u5217\u8868\u7684\u6807\u51c6\u504f\u5dee\u3002";
M.ol = "\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6240\u6709\u6570\u5b57\u7684\u548c\u3002";
M.ql = "^";
M.rl = "https://zh.wikipedia.org/wiki/\u968f\u673a\u6570\u751f\u6210\u5668";
M.Mh = "\u968f\u673a\u5206\u6570";
M.sl = "\u8fd4\u56de\u4ecb\u4e8e\uff08\u5305\u542b\uff090.0\u52301.0\u4e4b\u95f4\u7684\u968f\u673a\u6570\u3002";
M.ul = "https://zh.wikipedia.org/wiki/\u968f\u673a\u6570\u751f\u6210\u5668";
M.vl = "\u4ece %1 \u5230 %2 \u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570";
M.wl = "\u8fd4\u56de\u4e24\u4e2a\u6307\u5b9a\u7684\u8303\u56f4\uff08\u542b\uff09\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570\u3002";
M.xl = "https://zh.wikipedia.org/wiki/\u6570\u503c\u4fee\u7ea6";
M.yl = "\u5411\u4e0b\u820d\u5165";
M.zl = "\u5411\u4e0b\u820d\u5165";
M.Al = "\u5411\u4e0a\u820d\u5165";
M.Bl = "\u6570\u5b57\u5411\u4e0a\u6216\u5411\u4e0b\u820d\u5165\u3002";
M.Nh = "https://zh.wikipedia.org/wiki/\u5e73\u65b9\u6839";
M.Cl = "\u7edd\u5bf9";
M.Dl = "\u5e73\u65b9\u6839";
M.Oh = "\u8fd4\u56de\u4e00\u4e2a\u6570\u7684\u7edd\u5bf9\u503c\u3002";
M.El = "\u8fd4\u56de\u6570\u7684e\u6b21\u5e42\u3002";
M.Fl = "\u8fd4\u56de\u4e00\u4e2a\u6570\u7684\u81ea\u7136\u5bf9\u6570\u3002";
M.Gl = "\u8fd4\u56de\u6570\u5b57\u7684\u5bf9\u6570\u3002";
M.Hl = "\u8fd4\u56de\u6570\u7684\u903b\u8f91\u975e\u3002";
M.Il = "\u8fd4\u56de\u6570\u768410\u6b21\u5e42\u3002";
M.Ph = "\u8fd4\u56de\u6570\u7684\u5e73\u65b9\u6839\u3002";
M.Jl = "-";
M.Kl = "acos";
M.Ll = "asin";
M.Ml = "atan";
M.Nl = "cos";
M.Ol = "https://zh.wikipedia.org/wiki/\u4e09\u89d2\u51fd\u6570";
M.Pl = "sin";
M.Ql = "tan";
M.Qh = "\u8fd4\u56de\u4e00\u4e2a\u6570\u7684\u53cd\u4f59\u5f26\u503c\u3002";
M.Rh = "\u8fd4\u56de\u4e00\u4e2a\u6570\u7684\u53cd\u6b63\u5f26\u503c\u3002";
M.Sh = "\u8fd4\u56de\u6307\u5b9a\u89d2\u5ea6\u7684\u53cd\u6b63\u5207\u503c\u3002";
M.Th = "\u8fd4\u56de\u6307\u5b9a\u89d2\u5ea6\u7684\u4f59\u5f26\u503c(\u975e\u5f27\u5ea6\uff09\u3002";
M.Uh = "\u8fd4\u56de\u6307\u5b9a\u89d2\u5ea6\u7684\u6b63\u5f26\u503c(\u975e\u5f27\u5ea6\uff09\u3002";
M.Vh = "\u8fd4\u56de\u6307\u5b9a\u89d2\u5ea6\u7684\u6b63\u5207\u503c(\u975e\u5f27\u5ea6\uff09\u3002";
M.lq = "\u6211";
M.Pf = "\u65b0\u53d8\u91cf...";
M.Rl = "\u65b0\u53d8\u91cf\u7684\u540d\u79f0\uff1a";
M.nq = "\u7a7a\u767d";
M.Sl = "\u5141\u8bb8\u58f0\u660e";
M.Xh = "\u4e0e\uff1a";
M.Yh = "https://zh.wikipedia.org/wiki/\u5b50\u7a0b\u5e8f";
M.Zh = "\u8fd0\u884c\u7528\u6237\u5b9a\u4e49\u7684\u51fd\u6570\u201c%1\u201d\u3002";
M.$h = "https://zh.wikipedia.org/wiki/\u5b50\u7a0b\u5e8f";
M.ai = "\u8fd0\u884c\u7528\u6237\u5b9a\u4e49\u7684\u51fd\u6570\u201c%1\u201d\uff0c\u5e76\u4f7f\u7528\u5b83\u7684\u8f93\u51fa\u503c\u3002";
M.Tl = "\u4e0e\uff1a";
M.Ul = "\u521b\u5efa\u201c%1\u201d";
M.Qf = "\u63cf\u8ff0\u8be5\u529f\u80fd...";
M.bi = "\u7a7a\u767d";
M.ci = "https://zh.wikipedia.org/wiki/\u5b50\u7a0b\u5e8f";
M.Rf = "\u505a\u70b9\u4ec0\u4e48";
M.di = "\u81f3";
M.ei = "\u521b\u5efa\u4e00\u4e2a\u4e0d\u5e26\u8f93\u51fa\u503c\u7684\u51fd\u6570\u3002";
M.ii = "https://zh.wikipedia.org/wiki/\u5b50\u7a0b\u5e8f";
M.ae = "\u8fd4\u56de";
M.ki = "\u521b\u5efa\u4e00\u4e2a\u6709\u8f93\u51fa\u503c\u7684\u51fd\u6570\u3002";
M.Wl = "\u8b66\u544a: \u6b64\u51fd\u6570\u5177\u6709\u91cd\u590d\u53c2\u6570\u3002";
M.Xl = "\u7a81\u51fa\u663e\u793a\u51fd\u6570\u5b9a\u4e49";
M.Yl = "http://c2.com/cgi/wiki?GuardClause";
M.Zl = "\u5982\u679c\u503c\u4e3a\u771f\uff0c\u5219\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u503c\u3002";
M.$l = "\u8b66\u544a: \u4ec5\u5728\u5b9a\u4e49\u51fd\u6570\u5185\u53ef\u4f7f\u7528\u6b64\u5757\u3002";
M.am = "\u8f93\u5165\u540d\u79f0\uff1a";
M.bm = "\u6dfb\u52a0\u51fd\u6570\u8f93\u5165\u3002";
M.cm = "\u8f93\u5165";
M.dm = "\u6dfb\u52a0\u3001\u5220\u9664\u6216\u91cd\u65b0\u6392\u6b64\u51fd\u6570\u7684\u8f93\u5165\u3002";
M.em = "\u91cd\u505a";
M.gm = "\u5220\u9664\u6ce8\u91ca";
M.Sf = "\u91cd\u547d\u540d\u53d8\u91cf...";
M.hm = "\u5c06\u6240\u6709\u201c%1\u201d\u53d8\u91cf\u91cd\u547d\u540d\u4e3a:";
M.pq = "\u8ffd\u52a0\u6587\u672c";
M.qq = "https://github.com/google/blockly/wiki/Text#text-modification";
M.rq = "\u5728";
M.sq = "\u5c06\u4e00\u4e9b\u6587\u672c\u8ffd\u52a0\u5230\u53d8\u91cf\u201c%1\u201d\u3002";
M.uq = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
M.vq = "\u4e3a\u5c0f\u5199";
M.wq = "\u4e3a\u9996\u5b57\u6bcd\u5927\u5199";
M.xq = "\u4e3a\u5927\u5199";
M.yq = "\u4f7f\u7528\u4e0d\u540c\u7684\u5927\u5c0f\u5199\u590d\u5236\u8fd9\u6bb5\u6587\u5b57\u3002";
M.zq = "\u83b7\u5f97\u7b2c\u4e00\u4e2a\u5b57\u7b26";
M.Aq = "\u83b7\u5f97\u5012\u6570\u7b2c#\u4e2a\u5b57\u7b26";
M.Bq = "\u83b7\u5f97\u5b57\u7b26#";
M.Cq = "https://github.com/google/blockly/wiki/Text#extracting-text";
M.Dq = "\u4e8e\u6587\u672c\u4e2d";
M.Eq = "\u83b7\u5f97\u6700\u540e\u4e00\u4e2a\u5b57\u7b26";
M.Fq = "\u83b7\u53d6\u968f\u673a\u7684\u5b57\u6bcd";
M.Gq = "\u7a7a\u767d";
M.Hq = "\u8fd4\u56de\u4f4d\u4e8e\u6307\u5b9a\u4f4d\u7f6e\u7684\u5b57\u6bcd\u3002";
M.Jq = "\u5c06\u4e00\u4e2a\u9879\u6dfb\u52a0\u5230\u6587\u672c\u4e2d\u3002";
M.Kq = "\u52a0\u5165";
M.Lq = "\u6dfb\u52a0\u3001\u79fb\u9664\u6216\u91cd\u65b0\u6392\u5217\u5404\u8282\u6765\u91cd\u65b0\u914d\u7f6e\u8fd9\u4e2a\u6587\u672c\u5757\u3002";
M.Mq = "\u5230\u5012\u6570\u7b2c#\u4e2a\u5b57\u7b26";
M.Nq = "\u5230\u5b57\u7b26#";
M.Oq = "\u5230\u6700\u540e\u4e00\u4e2a\u5b57\u7b26";
M.Pq = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
M.Qq = "\u81ea\u6587\u672c";
M.Rq = "\u53d6\u5f97\u4e00\u6bb5\u5b57\u4e32\u81ea\u7b2c\u4e00\u4e2a\u5b57\u7b26";
M.Sq = "\u53d6\u5f97\u4e00\u6bb5\u5b57\u4e32\u81ea#\u5230\u672b\u5c3e";
M.Tq = "\u53d6\u5f97\u4e00\u6bb5\u5b57\u4e32\u81ea#";
M.Uq = "\u7a7a\u767d";
M.Vq = "\u8fd4\u56de\u6307\u5b9a\u7684\u90e8\u5206\u6587\u672c\u3002";
M.Wq = "https://github.com/google/blockly/wiki/Text#finding-text";
M.Xq = "\u81ea\u6587\u672c";
M.Yq = "\u5bfb\u627e\u7b2c\u4e00\u4e2a\u51fa\u73b0\u7684\u6587\u672c";
M.Zq = "\u5bfb\u627e\u6700\u540e\u4e00\u4e2a\u51fa\u73b0\u7684\u6587\u672c";
M.$q = "\u7a7a\u767d";
M.cr = "\u8fd4\u56de\u5728\u7b2c\u4e8c\u4e2a\u5b57\u4e32\u4e2d\u7684\u7b2c\u4e00/\u6700\u540e\u4e00\u4e2a\u5339\u914d\u9879\u7684\u7d22\u5f15\u503c\u3002\u5982\u679c\u672a\u627e\u5230\u5219\u8fd4\u56de 0\u3002";
M.dr = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
M.er = "%1\u662f\u7a7a\u7684";
M.gr = "\u5982\u679c\u63d0\u4f9b\u7684\u6587\u672c\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u771f\u3002";
M.ir = "https://github.com/google/blockly/wiki/Text#text-creation";
M.jr = "\u5efa\u7acb\u5b57\u4e32\u4f7f\u7528";
M.kr = "\u901a\u8fc7\u4e32\u8d77\u4efb\u610f\u6570\u91cf\u7684\u9879\u4ee5\u5efa\u7acb\u4e00\u6bb5\u6587\u5b57\u3002";
M.lr = "https://github.com/google/blockly/wiki/Text#text-modification";
M.nr = "%1\u7684\u957f\u5ea6";
M.or = "\u8fd4\u56de\u63d0\u4f9b\u6587\u672c\u7684\u5b57\u6bcd\u6570\uff08\u5305\u62ec\u7a7a\u683c\uff09\u3002";
M.pr = "https://github.com/google/blockly/wiki/Text#printing-text";
M.qr = "\u6253\u5370%1";
M.rr = "\u6253\u5370\u6307\u5b9a\u7684\u6587\u5b57\u3001\u6570\u5b57\u6216\u5176\u4ed6\u503c\u3002";
M.ur = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
M.vr = "\u63d0\u793a\u7528\u6237\u8f93\u5165\u6570\u5b57\u3002";
M.wr = "\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u6587\u672c\u3002";
M.xr = "\u8f93\u5165\u6570\u5b57\u5e76\u663e\u793a\u63d0\u793a\u6d88\u606f";
M.yr = "\u8f93\u5165\u6570\u5b57\u5e76\u663e\u793a\u63d0\u793a\u6d88\u606f";
M.zr = "https://zh.wikipedia.org/wiki/\u5b57\u7b26\u4e32";
M.Ar = "\u4e00\u4e2a\u5b57\u6bcd\u3001\u5355\u8bcd\u6216\u4e00\u884c\u6587\u672c\u3002";
M.Br = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
M.Cr = "\u6d88\u9664\u4e24\u4fa7\u7a7a\u683c";
M.Dr = "\u6d88\u9664\u5de6\u4fa7\u7a7a\u683c";
M.Er = "\u6d88\u9664\u53f3\u4fa7\u7a7a\u683c";
M.Fr = "\u590d\u5236\u8fd9\u6bb5\u6587\u5b57\u7684\u540c\u65f6\u5220\u9664\u4e24\u7aef\u591a\u4f59\u7684\u7a7a\u683c\u3002";
M.Gr = "\u4eca\u5929";
M.mm = "\u64a4\u9500";
M.Mc = "\u9879\u76ee";
M.li = "\u521b\u5efa\u201c\u8bbe\u5b9a%1\u201d";
M.mi = "https://github.com/google/blockly/wiki/Variables#get";
M.ni = "\u8fd4\u56de\u6b64\u53d8\u91cf\u7684\u503c\u3002";
M.nm = "\u8d4b\u503c %1 \u5230 %2";
M.Tf = "\u521b\u5efa\u201c\u83b7\u5f97%1\u201d";
M.oi = "https://github.com/google/blockly/wiki/Variables#set";
M.pi = "\u8bbe\u7f6e\u6b64\u53d8\u91cf\uff0c\u4ee5\u4f7f\u5b83\u548c\u8f93\u5165\u503c\u76f8\u7b49\u3002";
M.Vl = M.di;
M.Rj = M.Nf;
M.po = M.Oe;
M.kh = M.Oe;
M.Pj = M.ih;
M.ji = M.Rf;
M.mp = M.Qe;
M.Oo = M.Qe;
M.Ck = M.Mc;
M.oq = M.bi;
M.Nj = M.jh;
M.No = M.ek;
M.bo = M.Oe;
M.Gp = M.Qe;
M.io = M.Oe;
M.Fo = M.Mc;
M.tq = M.Mc;
M.Iq = M.Mc;
M.tp = M.Qe;
M.gi = M.Qf;

function cn(a, b) {
    var c;
    c = a.className;
    for (var d = c = m(c) && c.match(/\S+/g) || [], e = $a(arguments, 1), f = 0; f < e.length; f++) Ua(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ")
};
var dn = {
        ace: "\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",
        af: "Afrikaans",
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        az: "Az\u0259rbaycanca",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        br: "Brezhoneg",
        ca: "Catal\u00e0",
        cdo: "\u95a9\u6771\u8a9e",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        frr: "Frasch",
        gl: "Galego",
        hak: "\u5ba2\u5bb6\u8a71",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hrx: "Hunsrik",
        hu: "Magyar",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
        km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
        ko: "\ud55c\uad6d\uc5b4",
        ksh: "Ripoar\u0117sch",
        ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
        la: "Latine",
        lb: "L\u00ebtzebuergesch",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        mg: "Malagasy",
        ml: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
        mk: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
        mr: "\u092e\u0930\u093e\u0920\u0940",
        ms: "Bahasa Melayu",
        mzn: "\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        oc: "Lenga d'\u00f2c",
        pa: "\u092a\u0902\u091c\u093e\u092c\u0940",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        ps: "\u067e\u069a\u062a\u0648",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sco: "Scots",
        si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
        sk: "Sloven\u010dina",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        sw: "Kishwahili",
        ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tl: "Tagalog",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7c21\u9ad4\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    en = "ace ar fa he mzn ps".split(" "),
    fn = window.BlocklyGamesLang,
    gn = window.BlocklyGamesLanguages,
    hn = !!window.location.pathname.match(/\.html$/),
    bi = null,
    W, jn = Number,
    kn, ln = window.location.search.match(/[?&]level=([^&]+)/);
kn = ln ? decodeURIComponent(ln[1].replace(/\+/g, "%20")) : "NaN";
var mn = jn(kn);
W = isNaN(mn) ? 1 : Oc(1, mn, 10);

function nn() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != en.indexOf(fn) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", fn);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < gn.length; c++) {
            var d = gn[c];
            b.push([dn[d], d])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var e = b[c],
                d = e[1],
                e = new Option(e[0], d);
            d == fn && (e.selected = !0);
            a.options.add(e)
        }
        1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!on(c), a && b && cn(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(pn, 1)
}

function on(a) {
    var b = qn,
        c;
    try {
        c = window.localStorage[b + a]
    } catch (d) {}
    return c
}

function rn(a) {
    var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    return null === b ? "[Unknown message: " + a + "]" : b
}

function sn(a, b) {
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function pn() {
    if (!hn) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function() {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
var Y = {
    Vb: null,
    C: function() {
        nn();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = rn("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = rn("Games_linkAlert"), BlocklyStorage.HASH_ERROR = rn("Games_hashError"), BlocklyStorage.XML_ERROR = rn("Games_xmlError"), BlocklyStorage.alert = X.rn, a && sn(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Y.vm, !0)
    },
    lj: function(a, b) {
        if ("BlocklyStorage" in
            window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.g
            } catch (f) {}
            c && delete window.sessionStorage.g;
            var d = on(W),
                e = b && on(W - 1);
            (c = c || d || e || a) && Y.uj(c)
        }
    },
    uj: function(a) {
        Y.Vb ? Y.Vb.setValue(a, -1) : (a = Kg(a), bi.clear(), Lg(a, bi), bi.Ai())
    },
    $i: function() {
        if (Y.Vb) var a = Y.Vb.getValue();
        else a = Dg(bi), a = Jg(a);
        return a
    },
    mn: function() {
        window.localStorage && (window.localStorage[qn + W] = Y.$i())
    },
    rf: function() {
        window.location = (hn ?
            "index.html" : "./") + "?lang=" + fn
    },
    vm: function() {
        if (window.sessionStorage) {
            if (Y.Vb) var a = Y.Vb.getValue();
            else a = Dg(bi), a = Jg(a);
            window.sessionStorage.g = a
        }
        var a = document.getElementById("languageMenu"),
            a = encodeURIComponent(a.options[a.selectedIndex].value),
            b = window.location.search,
            b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    gj: function(a) {
        if (a) {
            var b =
                a.match(/^block_id_([^']+)$/);
            b && (a = b[1])
        }
        ai(a)
    },
    Mr: function(a, b) {
        var c = document.getElementById(a);
        c.firstChild || (c = yk(c, {
            rtl: -1 != en.indexOf(fn),
            readOnly: !0
        }), "string" != typeof b && (b = b.join("")), Lg(Kg(b), c))
    },
    sn: function(a) {
        return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "")
    },
    lc: function(a) {
        if ("click" == a.type && "touchend" == Y.lc.h && Y.lc.g + 2E3 > Date.now() || Y.lc.h == a.type && Y.lc.g + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        Y.lc.h = a.type;
        Y.lc.g = Date.now();
        return !1
    }
};
Y.lc.h = null;
Y.lc.g = 0;
Y.Ym = function() {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
Y.Zm = function() {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = Y;
Y.setCode = Y.uj;
Y.getCode = Y.$i;
var X = {
    od: !1,
    Ti: null,
    Ye: null,
    He: function(a, b, c, d, e, f) {
        function k() {
            X.od && (l.style.visibility = "visible", l.style.zIndex = 10, p.style.visibility = "hidden")
        }
        X.od && X.Gc(!1);
        jh(!0);
        X.od = !0;
        X.Ti = b;
        X.Ye = f;
        var l = document.getElementById("dialog");
        f = document.getElementById("dialogShadow");
        var p = document.getElementById("dialogBorder"),
            n;
        for (n in e) l.style[n] = e[n];
        d && (f.style.visibility = "visible", f.style.opacity = .3, f.style.zIndex = 9, d = document.createElement("div"), d.id = "dialogHeader", l.appendChild(d), X.ig = G(d, "mousedown",
            null, X.Fm));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (X.Xc(b, !1, .2), X.Xc(l, !0, .8), setTimeout(k, 175)) : k()
    },
    Ui: 0,
    Vi: 0,
    Fm: function(a) {
        X.lg();
        if (!dh(a)) {
            var b = document.getElementById("dialog");
            X.Ui = b.offsetLeft - a.clientX;
            X.Vi = b.offsetTop - a.clientY;
            X.kg = G(document, "mouseup", null, X.lg);
            X.jg = G(document, "mousemove", null, X.Gm);
            a.stopPropagation()
        }
    },
    Gm: function(a) {
        var b = document.getElementById("dialog"),
            c = X.Ui + a.clientX;
        a = X.Vi + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight -
            b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    lg: function() {
        X.kg && (J(X.kg), X.kg = null);
        X.jg && (J(X.jg), X.jg = null)
    },
    Gc: function(a) {
        function b() {
            d.style.zIndex = -1;
            d.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (X.od) {
            X.lg();
            X.ig && (J(X.ig), X.ig = null);
            X.od = !1;
            X.Ye && X.Ye();
            X.Ye = null;
            var c = !1 === a ? null : X.Ti;
            a = document.getElementById("dialog");
            var d = document.getElementById("dialogShadow");
            d.style.opacity = 0;
            c ? (X.Xc(a, !1, .8), X.Xc(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    Xc: function(a, b, c) {
        function d() {
            e.style.width = f.width + "px";
            e.style.height = f.height + "px";
            e.style.left = f.x + "px";
            e.style.top = f.y + "px";
            e.style.opacity = c
        }
        if (a) {
            var e = document.getElementById("dialogBorder"),
                f = X.Im(a);
            b ? (e.className = "dialogAnimate", setTimeout(d, 1)) : (e.className = "", d());
            e.style.visibility = "visible"
        }
    },
    Im: function(a) {
        var b = oe(a);
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        return b
    },
    rn: function(a) {
        var b = document.getElementById("containerStorage");
        b.textContent = "";
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("p");
            d.appendChild(document.createTextNode(a[c]));
            b.appendChild(d)
        }
        b = document.getElementById("dialogStorage");
        a = document.getElementById("linkButton");
        X.He(b, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, X.ah);
        X.Yg()
    },
    om: function() {
        if (!on(W))
            if (X.od || 0 != Ud) setTimeout(X.om, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", X.Gc, !0);
                b.addEventListener("touchend", X.Gc, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Y.rf, !0);
                b.addEventListener("touchend", Y.rf, !0);
                X.He(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown",
                        X.ui, !0)
                });
                document.body.addEventListener("keydown", X.ui, !0)
            }
    },
    xm: function() {
        var a = document.getElementById("dialogDone");
        if (bi) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = Jk(),
                c = Y.sn(c),
                d = c.split("\n").length,
                e = document.getElementById("containerCode");
            e.textContent = c;
            "function" == typeof prettyPrintOne && (c = e.innerHTML, c = prettyPrintOne(c, "js"), e.innerHTML = c);
            c = 1 == d ? rn("Games_linesOfCode1") : rn("Games_linesOfCode2").replace("%1", d);
            b.appendChild(document.createTextNode(c))
        }
        c =
            10 > W ? rn("Games_nextLevel").replace("%1", W + 1) : rn("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", X.Gc, !0);
        b.addEventListener("touchend", X.Gc, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Y.Lg, !0);
        b.addEventListener("touchend", Y.Lg, !0);
        X.He(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", X.Di, !0)
        });
        document.body.addEventListener("keydown", X.Di, !0);
        document.getElementById("dialogDoneText").textContent =
            c
    },
    Si: function(a) {
        !X.od || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (X.Gc(!0), a.stopPropagation(), a.preventDefault())
    },
    Yg: function() {
        document.body.addEventListener("keydown", X.Si, !0)
    },
    ah: function() {
        document.body.removeEventListener("keydown", X.Si, !0)
    },
    Di: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.Gc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.Lg()
    },
    ui: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.Gc(!0), a.stopPropagation(), a.preventDefault(), 27 !=
            a.keyCode && Y.rf()
    }
};
window.BlocklyDialogs = X;
X.hideDialog = X.Gc;

function tn(a, b, c, d, e) {
    this.name = a;
    this.h = b;
    this.j = c;
    this.s = d || 0;
    this.g = e;
    this.ba = new w;
    this.reset();
    console.log(this + " loaded.")
}
g = tn.prototype;
g.qn = !1;
g.Ub = !1;
g.na = 0;
g.Bc = 0;
g.facing = 0;
g.speed = 0;
g.kc = 0;
g.ba = null;
g.Ig = 0;
g.toString = function() {
    return "[" + this.name + "]"
};
g.reset = function() {
    delete this.qn;
    delete this.Ub;
    delete this.speed;
    delete this.kc;
    delete this.Ig;
    this.na = this.s;
    this.ba.x = this.j.x;
    this.ba.y = this.j.y;
    this.facing = this.Bc = Pc(180 * Math.atan2(50 - this.ba.y, 50 - this.ba.x) / Math.PI);
    var a = this.h;
    if (fa(a)) a = a();
    else if (!m(a)) throw "Avatar " + this.name + " has invalid code: " + a;
    "Interpreter" in window ? this.i = new Interpreter(a, this.g.$m) : this.i = null
};

function un(a, b) {
    a.na += b;
    100 <= a.na && vn(a)
}

function vn(a) {
    a.speed = 0;
    a.Ub = !0;
    a.na = 100;
    a.g.be.unshift(a);
    a.g.Sb.push({
        type: "DIE",
        avatar: a
    });
    console.log(a + " sinks.")
}

function wn(a, b) {
    var c = Z.Tb,
        d;
    d = void 0 === b || null === b ? 5 : b;
    if (!q(a) || isNaN(a) || !q(d) || isNaN(d)) throw TypeError;
    a = Pc(a);
    d = Oc(d, 0, 20);
    c.g.Sb.push({
        type: "SCAN",
        avatar: c,
        degree: a,
        resolution: d
    });
    var e = Pc(a - d / 2);
    d = Pc(a + d / 2);
    e > d && (d += 360);
    for (var f = c.ba.x, k = c.ba.y, l = Infinity, p = 0, n; n = c.g.pb[p]; p++)
        if (n != c && !n.Ub) {
            var r = n.ba.x,
                v = n.ba.y;
            n = Math.sqrt((v - k) * (v - k) + (r - f) * (r - f));
            n >= l || (r = Math.atan2(v - k, r - f), r = Pc(180 * r / Math.PI), r < e && (r += 360), e <= r && r <= d && (l = n))
        }
    return l
}
g.stop = function() {
    this.kc = 0
};

function xn(a, b) {
    var c = Z.Tb;
    if (!q(a) || isNaN(a) || !q(b) || isNaN(b)) throw TypeError;
    var d = Date.now();
    if (c.Ig + 1E3 * c.g.fm > d) return !1;
    c.Ig = d;
    d = c.ba.clone();
    a = Pc(a);
    c.facing = a;
    b = Oc(b, 0, 70);
    d = {
        rm: c,
        Ie: d,
        Bc: a,
        xf: b,
        me: new w(d.x + b * Math.cos(Qc(a)), d.y + b * Math.sin(Qc(a))),
        Ae: 0
    };
    c.g.zd.push(d);
    c.g.Sb.push({
        type: "BANG",
        avatar: c,
        degree: d.Bc
    });
    return !0
};
var Z = {
    pb: [],
    be: [],
    Sb: [],
    zd: [],
    bk: 50,
    jm: 100,
    fm: .5,
    Tb: null,
    zj: 1,
    Wh: 3,
    gh: 5,
    Mj: 5,
    Mf: 3,
    qj: 0,
    Ze: 0,
    bh: 0,
    lm: 3E5,
    og: null
};
Z.im = [new w(10, 90), new w(90, 10), new w(10, 10), new w(90, 90), new w(50, 99), new w(50, 1), new w(1, 50), new w(99, 50), new w(50, 49)];
Z.reset = function() {
    clearTimeout(Z.qj);
    Z.Sb.length = 0;
    Z.zd.length = 0;
    Z.be.length = 0;
    for (var a = Z.bh = 0, b; b = Z.pb[a]; a++) b.reset()
};
Z.pm = function(a, b, c, d) {
    c || (c = Z.im[Z.pb.length]);
    a = new tn(a, b, c, d, Z);
    Z.pb.push(a)
};
Z.start = function(a) {
    Z.og = a;
    Z.Ze = Date.now() + Z.lm;
    console.log("Starting battle with " + Z.pb.length + " avatars.");
    Z.update()
};
Z.update = function() {
    Z.vn();
    Z.wn();
    Z.un();
    Z.pb.length <= Z.be.length + 1 && (Z.Ze = Math.min(Z.Ze, Date.now() + 1E3));
    Date.now() > Z.Ze ? Z.stop() : Z.qj = setTimeout(Z.update, 1E3 / Z.bk)
};
Z.stop = function() {
    for (var a = [], b = 0, c; c = Z.pb[b]; b++) c.Ub || a.push(c);
    b = a.length;
    for (a.sort(function(a, b) {
            return a.na - b.na
        }); a.length;) Z.be.unshift(a.pop());
    Z.og && Z.og(b)
};
Z.wn = function() {
    for (var a = Z.zd.length - 1; 0 <= a; a--) {
        var b = Z.zd[a];
        b.Ae += Z.Wh;
        var c = 0;
        if (b.xf - b.Ae < Z.Wh / 2) {
            Z.zd.splice(a, 1);
            for (var d = 0, e; e = Z.pb[d]; d++)
                if (!e.Ub) {
                    var f = 10 * (1 - Sc(e.ba, b.me) / 4);
                    0 < f && (un(e, f), c = Math.max(c, f))
                }
            Z.Sb.push({
                type: "BOOM",
                damage: c,
                x: b.me.x,
                y: b.me.y
            })
        }
    }
};
Z.un = function() {
    for (var a = 0, b; b = Z.pb[a]; a++)
        if (!b.Ub && (b.speed < b.kc ? b.speed = Math.min(b.speed + Z.gh, b.kc) : b.speed > b.kc && (b.speed = Math.max(b.speed - Z.gh, b.kc)), 0 < b.speed)) {
            var c = Z.Bi(b),
                d = c[1],
                e = Qc(b.Bc),
                f = b.speed / 100 * Z.zj,
                k = Math.cos(e) * f,
                f = Math.sin(e) * f;
            b.ba.x += k;
            b.ba.y += f;
            0 > b.ba.x || 100 < b.ba.x || 0 > b.ba.y || 100 < b.ba.y ? (b.ba.x = Oc(b.ba.x, 0, 100), b.ba.y = Oc(b.ba.y, 0, 100), d = b.speed / 100 * Z.Mf, un(b, d), b.speed = 0, b.kc = 0, Z.Sb.push({
                type: "CRASH",
                avatar: b,
                damage: d
            })) : (c = Z.Bi(b), e = c[0], c = c[1], c < Z.Mj && d > c && (b.ba.x -= k,
                b.ba.y -= f, d = Math.max(b.speed, e.speed) / 100 * Z.Mf, un(b, d), b.speed = 0, b.kc = 0, un(e, d), e.speed = 0, e.kc = 0, Z.Sb.push({
                    type: "CRASH",
                    avatar: b,
                    damage: d
                }), Z.Sb.push({
                    type: "CRASH",
                    avatar: e,
                    damage: d
                })))
        }
};
Z.vn = function() {
    for (var a = 0; a < Z.jm; a++) {
        Z.bh++;
        for (var b = 0, c; c = Z.pb[b]; b++)
            if (!c.Ub) {
                Z.Tb = c;
                try {
                    c.i.step()
                } catch (d) {
                    console.log(c + " throws an error: " + d), vn(c)
                }
                Z.Tb = null
            }
    }
};
Z.$m = function(a, b) {
    var c;
    c = function(b, c) {
        return a.createPrimitive(wn(b && b.valueOf(), c && c.valueOf()))
    };
    a.setProperty(b, "scan", a.createNativeFunction(c));
    c = function(b, c) {
        return a.createPrimitive(xn(b && b.valueOf(), c && c.valueOf()))
    };
    a.setProperty(b, "cannon", a.createNativeFunction(c));
    c = function(a, b) {
        var c = a && a.valueOf(),
            d = b && b.valueOf(),
            p = Z.Tb,
            d = void 0 === d || null === d ? 50 : d;
        if (!q(c) || isNaN(c) || !q(d) || isNaN(d)) throw TypeError;
        p.Bc != Pc(c) && (50 >= p.speed ? (p.Bc = Pc(c), p.facing = p.Bc) : d = 0);
        0 == p.speed && 0 < d && (p.speed =
            .1);
        p.kc = Oc(d, 0, 100)
    };
    a.setProperty(b, "drive", a.createNativeFunction(c));
    a.setProperty(b, "swim", a.createNativeFunction(c));
    a.setProperty(b, "stop", a.createNativeFunction(function() {
        Z.Tb.stop()
    }));
    a.setProperty(b, "damage", a.createNativeFunction(function() {
        return a.createPrimitive(Z.Tb.na)
    }));
    a.setProperty(b, "health", a.createNativeFunction(function() {
        return a.createPrimitive(100 - Z.Tb.na)
    }));
    a.setProperty(b, "speed", a.createNativeFunction(function() {
        return a.createPrimitive(Z.Tb.speed)
    }));
    a.setProperty(b,
        "loc_x", a.createNativeFunction(function() {
            return a.createPrimitive(Z.Tb.ba.x)
        }));
    a.setProperty(b, "loc_y", a.createNativeFunction(function() {
        return a.createPrimitive(Z.Tb.ba.y)
    }));
    var d = a.getProperty(b, "Math");
    d != a.UNDEFINED && (c = function(b) {
        return a.createPrimitive(Math.sin((b && b.valueOf()) / 180 * Math.PI))
    }, a.setProperty(d, "sin_deg", a.createNativeFunction(c)), c = function(b) {
        return a.createPrimitive(Math.cos((b && b.valueOf()) / 180 * Math.PI))
    }, a.setProperty(d, "cos_deg", a.createNativeFunction(c)), c = function(b) {
        return a.createPrimitive(Math.tan((b &&
            b.valueOf()) / 180 * Math.PI))
    }, a.setProperty(d, "tan_deg", a.createNativeFunction(c)), c = function(b) {
        return a.createPrimitive(Math.asin(b && b.valueOf()) / Math.PI * 180)
    }, a.setProperty(d, "asin_deg", a.createNativeFunction(c)), c = function(b) {
        return a.createPrimitive(Math.acos(b && b.valueOf()) / Math.PI * 180)
    }, a.setProperty(d, "acos_deg", a.createNativeFunction(c)), c = function(b) {
        return a.createPrimitive(Math.atan(b && b.valueOf()) / Math.PI * 180)
    }, a.setProperty(d, "atan_deg", a.createNativeFunction(c)))
};
Z.Bi = function(a) {
    for (var b = null, c = Infinity, d = 0, e; e = Z.pb[d]; d++)
        if (!e.Ub && a != e) {
            var f = Math.min(c, Sc(a.ba, e.ba));
            f < c && (c = f, b = e)
        }
    return [b, c]
};
// Copyright 2012 Google Inc.  Apache License 2.0
var U = new Ik;
Nk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
U.G = 0;
U.J = 1;
U.wi = 1;
U.i = 2;
U.fh = 3;
U.Uf = 3;
U.Ua = 4;
U.Cd = 4;
U.Hm = 4;
U.Za = 4;
U.Xi = 4;
U.Kr = 4;
U.Vf = 4;
U.fc = 5;
U.O = 5;
U.H = 5;
U.Fa = 6;
U.Lc = 6;
U.ee = 7;
U.xc = 8;
U.Wf = 8;
U.ti = 8;
U.Ta = 9;
U.Bd = 10;
U.fe = 11;
U.ce = 12;
U.dc = 13;
U.ec = 14;
U.L = 15;
U.B = 16;
U.h = 17;
U.j = 99;
U.C = function(a) {
    U.s = Object.create(null);
    U.Y = Object.create(null);
    U.g ? U.g.reset() : U.g = new Qk(U.V);
    var b = [];
    a = ok(a);
    if (a.length) {
        for (var c = 0; c < a.length; c++) b[c] = U.g.getName(a[c], "VARIABLE");
        U.s.variables = "var " + b.join(", ") + ";"
    }
};
U.finish = function(a) {
    var b = [],
        c;
    for (c in U.s) b.push(U.s[c]);
    delete U.s;
    delete U.Y;
    U.g.reset();
    return b.join("\n\n") + "\n\n\n" + a
};
U.Db = function(a) {
    return a + ";\n"
};
U.Or = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
U.oa = function(a, b) {
    var c = "";
    if (!a.K || !a.K.N) {
        var d = a.ef();
        d && (c += Lk(d, "// ") + "\n");
        for (var e = 0; e < a.h.length; e++)
            if (1 == a.h[e].type) {
                var f = z(a.h[e].I);
                if (f) {
                    for (var d = [], f = f.jb(), k = 0; k < f.length; k++) {
                        var l = f[k].ef();
                        l && d.push(l)
                    }
                    d.length && d.push("");
                    (d = d.join("\n")) && (c += Lk(d, "// "))
                }
            }
    }
    e = Kk(U, a.g && z(a.g));
    return c + b + e
};
U.Xd = {};
U.variables_get = function(a) {
    return [U.g.getName(P(a, "VAR"), "VARIABLE"), U.G]
};
U.variables_set = function(a) {
    var b = V(a, "VALUE", U.B) || "0";
    return U.g.getName(P(a, "VAR"), "VARIABLE") + " = " + b + ";\n"
};
N.Xd = {};
N.Xd.R = 330;
N.variables_get = {
    C: function() {
        this.i = M.mi;
        this.ua(N.Xd.R);
        O(R(this), new qj(M.Mc), "VAR");
        this.mb(!0);
        this.sa = M.ni;
        this.cc = M.li
    },
    dc: "variables_set",
    jc: function(a) {
        var b = {
                enabled: !0
            },
            c = P(this, "VAR");
        b.text = this.cc.replace("%1", c);
        c = x("field", null, c);
        c.setAttribute("name", "VAR");
        c = x("block", null, c);
        c.setAttribute("type", this.dc);
        b.Oa = ng.dg(this, c);
        a.push(b)
    }
};
N.variables_set = {
    C: function() {
        S(this, {
            message0: M.nm,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: M.Mc
            }, {
                type: "input_value",
                name: "VALUE"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: N.Xd.R,
            tooltip: M.pi,
            helpUrl: M.oi
        });
        this.cc = M.Tf
    },
    dc: "variables_get",
    jc: N.variables_get.jc
};
U.Qa = {};
U.math_number = function(a) {
    return [parseFloat(P(a, "NUM")), U.G]
};
U.math_arithmetic = function(a) {
    var b = {
            ADD: [" + ", U.Fa],
            MINUS: [" - ", U.Lc],
            MULTIPLY: [" * ", U.fc],
            DIVIDE: [" / ", U.O],
            POWER: [null, U.h]
        }[P(a, "OP")],
        c = b[0],
        b = b[1],
        d = V(a, "A", b) || "0";
    a = V(a, "B", b) || "0";
    return c ? [d + c + a, b] : ["Math.pow(" + d + ", " + a + ")", U.i]
};
U.math_single = function(a) {
    var b = P(a, "OP"),
        c;
    if ("NEG" == b) return a = V(a, "NUM", U.Za) || "0", "-" == a[0] && (a = " " + a), ["-" + a, U.Za];
    a = "SIN" == b || "COS" == b || "TAN" == b ? V(a, "NUM", U.O) || "0" : V(a, "NUM", U.j) || "0";
    switch (b) {
        case "ABS":
            c = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            c = "Math.sqrt(" + a + ")";
            break;
        case "LN":
            c = "Math.log(" + a + ")";
            break;
        case "EXP":
            c = "Math.exp(" + a + ")";
            break;
        case "POW10":
            c = "Math.pow(10," + a + ")";
            break;
        case "ROUND":
            c = "Math.round(" + a + ")";
            break;
        case "ROUNDUP":
            c = "Math.ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            c = "Math.floor(" +
                a + ")";
            break;
        case "SIN":
            c = "Math.sin(" + a + " / 180 * Math.PI)";
            break;
        case "COS":
            c = "Math.cos(" + a + " / 180 * Math.PI)";
            break;
        case "TAN":
            c = "Math.tan(" + a + " / 180 * Math.PI)"
    }
    if (c) return [c, U.i];
    switch (b) {
        case "LOG10":
            c = "Math.log(" + a + ") / Math.log(10)";
            break;
        case "ASIN":
            c = "Math.asin(" + a + ") / Math.PI * 180";
            break;
        case "ACOS":
            c = "Math.acos(" + a + ") / Math.PI * 180";
            break;
        case "ATAN":
            c = "Math.atan(" + a + ") / Math.PI * 180";
            break;
        default:
            throw "Unknown math operator: " + b;
    }
    return [c, U.O]
};
U.math_constant = function(a) {
    return {
        PI: ["Math.PI", U.J],
        E: ["Math.E", U.J],
        GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", U.O],
        SQRT2: ["Math.SQRT2", U.J],
        SQRT1_2: ["Math.SQRT1_2", U.J],
        INFINITY: ["Infinity", U.G]
    }[P(a, "CONSTANT")]
};
U.math_number_property = function(a) {
    var b = V(a, "NUMBER_TO_CHECK", U.H) || "0",
        c = P(a, "PROPERTY"),
        d;
    if ("PRIME" == c) return d = Ok("mathIsPrime", ["function {leCUI8hutHZI4480Dc}(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
        "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"
    ]) + "(" + b + ")", [d, U.i];
    switch (c) {
        case "EVEN":
            d = b + " % 2 == 0";
            break;
        case "ODD":
            d = b + " % 2 == 1";
            break;
        case "WHOLE":
            d = b + " % 1 == 0";
            break;
        case "POSITIVE":
            d = b + " > 0";
            break;
        case "NEGATIVE":
            d = b + " < 0";
            break;
        case "DIVISIBLE_BY":
            a = V(a, "DIVISOR", U.H) || "0", d = b + " % " + a + " == 0"
    }
    return [d, U.Ta]
};
U.math_change = function(a) {
    var b = V(a, "DELTA", U.Fa) || "0";
    a = U.g.getName(P(a, "VAR"), "VARIABLE");
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n"
};
U.math_round = U.math_single;
U.math_trig = U.math_single;
U.math_on_list = function(a) {
    var b = P(a, "OP");
    switch (b) {
        case "SUM":
            a = V(a, "LIST", U.J) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = V(a, "LIST", U.h) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = V(a, "LIST", U.h) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            b = Ok("mathMean", ["function {leCUI8hutHZI4480Dc}(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = V(a, "LIST", U.j) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MEDIAN":
            b = Ok("mathMedian", ["function {leCUI8hutHZI4480Dc}(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = V(a, "LIST", U.j) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MODE":
            b = Ok("mathModes", ["function {leCUI8hutHZI4480Dc}(values) {",
                "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);", "  }",
                "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
            ]);
            a = V(a, "LIST", U.j) || "[]";
            a = b + "(" + a + ")";
            break;
        case "STD_DEV":
            b = Ok("mathStandardDeviation", ["function {leCUI8hutHZI4480Dc}(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"
            ]);
            a = V(a, "LIST", U.j) || "[]";
            a = b + "(" + a + ")";
            break;
        case "RANDOM":
            b = Ok("mathRandomList", ["function {leCUI8hutHZI4480Dc}(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = V(a, "LIST", U.j) || "[]";
            a = b + "(" + a + ")";
            break;
        default:
            throw "Unknown operator: " + b;
    }
    return [a, U.i]
};
U.math_modulo = function(a) {
    var b = V(a, "DIVIDEND", U.H) || "0";
    a = V(a, "DIVISOR", U.H) || "0";
    return [b + " % " + a, U.H]
};
U.math_constrain = function(a) {
    var b = V(a, "VALUE", U.h) || "0",
        c = V(a, "LOW", U.h) || "0";
    a = V(a, "HIGH", U.h) || "Infinity";
    return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", U.i]
};
U.math_random_int = function(a) {
    var b = V(a, "FROM", U.h) || "0";
    a = V(a, "TO", U.h) || "0";
    return [Ok("mathRandomInt", ["function {leCUI8hutHZI4480Dc}(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", U.i]
};
U.math_random_float = function() {
    return ["Math.random()", U.i]
};
N.xb = {};
N.xb.R = 290;
N.procedures_defnoreturn = {
    C: function() {
        var a = new uj(M.Rf, Vk);
        a.Df = !1;
        O(O(O(R(this), M.di), a, "NAME"), "", "PARAMS");
        this.ud(new yi(["procedures_mutatorarg"]));
        M.Qf && this.td(M.Qf);
        this.ua(N.xb.R);
        this.sa = M.ei;
        this.i = M.ci;
        this.M = [];
        this.Ic(!0);
        this.H = null
    },
    Gf: function() {
        var a = Tk(P(this, "NAME"), this);
        Sg(this, "NAME").ha(a)
    },
    Ic: function(a) {
        this.fc !== a && (a ? (O(this.ub(3, "STACK"), M.bi), I(this, "RETURN") && Bj(this, "STACK", "RETURN")) : this.Wa("STACK", !0), this.fc = a)
    },
    Je: function() {
        for (var a = !1, b = {}, c = 0; c < this.M.length; c++) {
            if (b["arg_" +
                    this.M[c].toLowerCase()]) {
                a = !0;
                break
            }
            b["arg_" + this.M[c].toLowerCase()] = !0
        }
        a ? this.Xa(M.Wl) : this.Xa(null);
        a = "";
        this.M.length && (a = M.Xh + " " + this.M.join(", "));
        B++;
        Sg(this, "PARAMS").ha(a);
        B--
    },
    Ja: function(a) {
        var b = document.createElement("mutation");
        a && b.setAttribute("name", P(this, "NAME"));
        for (var c = 0; c < this.M.length; c++) {
            var d = document.createElement("arg");
            d.setAttribute("name", this.M[c]);
            a && this.Ad && d.setAttribute("paramId", this.Ad[c]);
            b.appendChild(d)
        }
        this.fc || b.setAttribute("statements", "false");
        return b
    },
    gb: function(a) {
        this.M = [];
        for (var b = 0, c; c = a.childNodes[b]; b++) "arg" == c.nodeName.toLowerCase() && this.M.push(c.getAttribute("name"));
        this.Je();
        Yk(this);
        this.Ic("false" !== a.getAttribute("statements"))
    },
    Fd: function(a) {
        var b = a.pd("procedures_mutatorcontainer");
        b.pc();
        I(this, "RETURN") ? Sg(b, "STATEMENTS").ha(this.fc ? "TRUE" : "FALSE") : I(b, "STATEMENT_INPUT").ga(!1);
        for (var c = I(b, "STACK").I, d = 0; d < this.M.length; d++) {
            var e = a.pd("procedures_mutatorarg");
            e.pc();
            Sg(e, "NAME").ha(this.M[d]);
            e.Hm = d;
            c.connect(e.T);
            c = e.g
        }
        Yk(this);
        return b
    },
    Ed: function(a) {
        this.M = [];
        this.Ad = [];
        for (var b = Cj(a, "STACK"); b;) this.M.push(P(b, "NAME")), this.Ad.push(b.id), b = b.g && z(b.g);
        this.Je();
        Yk(this);
        a = P(a, "STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.fc != a))
            if (a) this.Ic(!0), Di(this.H, this, "STACK"), this.H = null;
            else {
                a = I(this, "STACK").I;
                if (this.H = a.N) a = z(a), Rd(a), Sd(a);
                this.Ic(!1)
            }
    },
    D: function() {
        for (var a = P(this, "NAME"), a = Xk(a, this.A), b = 0; b < a.length; b++) a[b].D(!0, !1);
        this.constructor.prototype.D.apply(this, arguments)
    },
    oa: function() {
        return [P(this, "NAME"),
            this.M, !1
        ]
    },
    lf: function() {
        return this.M
    },
    sd: function(a, b) {
        for (var c = !1, d = 0; d < this.M.length; d++) rj(a, this.M[d]) && (this.M[d] = b, c = !0);
        if (c && (this.Je(), this.wb.$()))
            for (var c = this.wb.m.Ib(), d = 0, e; e = c[d]; d++) "procedures_mutatorarg" == e.type && rj(a, P(e, "NAME")) && Sg(e, "NAME").ha(b)
    },
    jc: function(a) {
        var b = {
                enabled: !0
            },
            c = P(this, "NAME");
        b.text = M.Ul.replace("%1", c);
        var d = x("mutation");
        d.setAttribute("name", c);
        for (var e = 0; e < this.M.length; e++) c = x("arg"), c.setAttribute("name", this.M[e]), d.appendChild(c);
        d = x("block",
            null, d);
        d.setAttribute("type", this.ce);
        b.Oa = ng.dg(this, d);
        a.push(b);
        if (!this.j)
            for (e = 0; e < this.M.length; e++) b = {
                enabled: !0
            }, c = this.M[e], b.text = M.Tf.replace("%1", c), d = x("field", null, c), d.setAttribute("name", "VAR"), d = x("block", null, d), d.setAttribute("type", "variables_get"), b.Oa = ng.dg(this, d), a.push(b)
    },
    ce: "procedures_callnoreturn"
};
N.procedures_defreturn = {
    C: function() {
        var a = new uj(M.ji, Vk);
        a.Df = !1;
        O(O(O(R(this), M.Vl), a, "NAME"), "", "PARAMS");
        O(ij(Q(this, "RETURN"), 1), M.ae);
        this.ud(new yi(["procedures_mutatorarg"]));
        M.gi && this.td(M.gi);
        this.ua(N.xb.R);
        this.sa = M.ki;
        this.i = M.ii;
        this.M = [];
        this.Ic(!0);
        this.H = null
    },
    Ic: N.procedures_defnoreturn.Ic,
    Gf: N.procedures_defnoreturn.Gf,
    Je: N.procedures_defnoreturn.Je,
    Ja: N.procedures_defnoreturn.Ja,
    gb: N.procedures_defnoreturn.gb,
    Fd: N.procedures_defnoreturn.Fd,
    Ed: N.procedures_defnoreturn.Ed,
    D: N.procedures_defnoreturn.D,
    oa: function() {
        return [P(this, "NAME"), this.M, !0]
    },
    lf: N.procedures_defnoreturn.lf,
    sd: N.procedures_defnoreturn.sd,
    jc: N.procedures_defnoreturn.jc,
    ce: "procedures_callreturn"
};
N.procedures_mutatorcontainer = {
    C: function() {
        O(R(this), M.cm);
        this.ub(3, "STACK");
        O(O(R(this, "STATEMENT_INPUT"), M.Sl), new wj("TRUE"), "STATEMENTS");
        this.ua(N.xb.R);
        this.sa = M.dm;
        this.Ta = !1
    }
};
N.procedures_mutatorarg = {
    C: function() {
        O(O(R(this), M.am), new uj("x", this.Ya), "NAME");
        this.Pb(!0);
        this.Ob(!0);
        this.ua(N.xb.R);
        this.sa = M.bm;
        this.Ta = !1
    },
    Ya: function(a) {
        return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null
    }
};
N.procedures_callnoreturn = {
    C: function() {
        O(R(this, "TOPROW"), this.id, "NAME");
        this.Pb(!0);
        this.Ob(!0);
        this.ua(N.xb.R);
        this.i = M.Yh;
        this.M = [];
        this.Y = {};
        this.J = null
    },
    Cc: function() {
        return P(this, "NAME")
    },
    Ce: function(a, b) {
        rj(a, this.Cc()) && (Sg(this, "NAME").ha(b), this.sa = (this.K ? M.ai : M.Zh).replace("%1", b))
    },
    Vg: function(a, b) {
        var c = Zk(this.Cc(), this.A),
            c = c && c.wb && c.wb.$();
        c || (this.Y = {}, this.J = null);
        if (b) {
            var d;
            a: if (d = this.M, ea(d) && ea(a) && d.length == a.length) {
                for (var e = d.length, f = 0; f < e; f++)
                    if (d[f] !== a[f]) {
                        d = !1;
                        break a
                    }
                d = !0
            } else d = !1;
            if (d) this.J = b;
            else {
                if (b.length != a.length) throw "Error: paramNames and paramIds must be the same length.";
                this.$c(!1);
                this.J || (this.Y = {}, a.join("\n") == this.M.join("\n") ? this.J = b : this.J = []);
                d = this.P;
                this.P = !1;
                for (e = 0; e < this.M.length; e++)
                    if (f = I(this, "ARG" + e)) f = f.I.N, this.Y[this.J[e]] = f, c && f && -1 == b.indexOf(this.J[e]) && (ud(f), Sd(f.u));
                this.M = [].concat(a);
                this.Ab();
                if (this.J = b)
                    for (e = 0; e < this.M.length; e++) c = this.J[e], c in this.Y && (f = this.Y[c], Di(f, this, "ARG" + e) || delete this.Y[c]);
                (this.P =
                    d) && this.U()
            }
        }
    },
    Ab: function() {
        for (var a = 0; a < this.M.length; a++) {
            var b = Sg(this, "ARGNAME" + a);
            b ? (B++, b.ha(this.M[a]), B--) : (b = new dj(this.M[a]), O(ij(Q(this, "ARG" + a), 1), b, "ARGNAME" + a).C())
        }
        for (; I(this, "ARG" + a);) this.Wa("ARG" + a), a++;
        if (a = I(this, "TOPROW")) this.M.length ? Sg(this, "WITH") || (O(a, M.Tl, "WITH"), a.C()) : Sg(this, "WITH") && fj(a, "WITH")
    },
    Ja: function() {
        var a = document.createElement("mutation");
        a.setAttribute("name", this.Cc());
        for (var b = 0; b < this.M.length; b++) {
            var c = document.createElement("arg");
            c.setAttribute("name",
                this.M[b]);
            a.appendChild(c)
        }
        return a
    },
    gb: function(a) {
        var b = a.getAttribute("name");
        this.Ce(this.Cc(), b);
        for (var b = [], c = [], d = 0, e; e = a.childNodes[d]; d++) "arg" == e.nodeName.toLowerCase() && (b.push(e.getAttribute("name")), c.push(e.getAttribute("paramId")));
        this.Vg(b, c)
    },
    sd: function(a, b) {
        for (var c = 0; c < this.M.length; c++) rj(a, this.M[c]) && (this.M[c] = b, Sg(this, "ARGNAME" + c).ha(b))
    },
    jc: function(a) {
        var b = {
            enabled: !0
        };
        b.text = M.Xl;
        var c = this.Cc(),
            d = this.A;
        b.Oa = function() {
            var a = Zk(c, d);
            a && a.select()
        };
        a.push(b)
    }
};
N.procedures_callreturn = {
    C: function() {
        O(R(this, "TOPROW"), "", "NAME");
        this.mb(!0);
        this.ua(N.xb.R);
        this.i = M.$h;
        this.M = [];
        this.Y = {};
        this.J = null
    },
    Cc: N.procedures_callnoreturn.Cc,
    Ce: N.procedures_callnoreturn.Ce,
    Vg: N.procedures_callnoreturn.Vg,
    Ab: N.procedures_callnoreturn.Ab,
    Ja: N.procedures_callnoreturn.Ja,
    gb: N.procedures_callnoreturn.gb,
    sd: N.procedures_callnoreturn.sd,
    jc: N.procedures_callnoreturn.jc
};
N.procedures_ifreturn = {
    C: function() {
        O(hj(Q(this, "CONDITION"), "Boolean"), M.Nf);
        O(Q(this, "VALUE"), M.ae);
        this.kb(!0);
        this.Pb(!0);
        this.Ob(!0);
        this.ua(N.xb.R);
        this.sa = M.Zl;
        this.i = M.Yl;
        this.Tc = !0
    },
    Ja: function() {
        var a = document.createElement("mutation");
        a.setAttribute("value", Number(this.Tc));
        return a
    },
    gb: function(a) {
        this.Tc = 1 == a.getAttribute("value");
        this.Tc || (this.Wa("VALUE"), O(R(this, "VALUE"), M.ae))
    },
    onchange: function() {
        var a = !1,
            b = this;
        do {
            if (-1 != this.fh.indexOf(b.type)) {
                a = !0;
                break
            }
            b = mj(b)
        } while (b);
        a ? ("procedures_defnoreturn" ==
            b.type && this.Tc ? (this.Wa("VALUE"), O(R(this, "VALUE"), M.ae), this.Tc = !1) : "procedures_defreturn" != b.type || this.Tc || (this.Wa("VALUE"), O(Q(this, "VALUE"), M.ae), this.Tc = !0), this.Xa(null)) : this.Xa(M.$l)
    },
    fh: ["procedures_defnoreturn", "procedures_defreturn"]
};
N.Qa = {};
N.Qa.R = 230;
N.math_number = {
    C: function() {
        this.i = M.Kh;
        this.ua(N.Qa.R);
        O(R(this), new Aj("0", hk), "NUM");
        this.mb(!0, "Number");
        var a = this;
        nj(this, function() {
            var b = a.getParent();
            return b && sj(b) && b.sa || M.Lh
        })
    }
};
N.math_arithmetic = {
    C: function() {
        S(this, {
            message0: "%1 %2 %3",
            args0: [{
                type: "input_value",
                name: "A",
                check: "Number"
            }, {
                type: "field_dropdown",
                name: "OP",
                options: [
                    [M.zk, "ADD"],
                    [M.Jl, "MINUS"],
                    [M.Uk, "MULTIPLY"],
                    [M.Ik, "DIVIDE"],
                    [M.ql, "POWER"]
                ]
            }, {
                type: "input_value",
                name: "B",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: N.Qa.R,
            helpUrl: M.Dh
        });
        var a = this;
        nj(this, function() {
            var b = P(a, "OP");
            return {
                ADD: M.Eh,
                MINUS: M.Gh,
                MULTIPLY: M.Hh,
                DIVIDE: M.Fh,
                POWER: M.Ak
            }[b]
        })
    }
};
N.math_single = {
    C: function() {
        S(this, {
            message0: "%1 %2",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [
                    [M.Dl, "ROOT"],
                    [M.Cl, "ABS"],
                    ["-", "NEG"],
                    ["ln", "LN"],
                    ["log10", "LOG10"],
                    ["e^", "EXP"],
                    ["10^", "POW10"]
                ]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            output: "Number",
            colour: N.Qa.R,
            helpUrl: M.Nh
        });
        var a = this;
        nj(this, function() {
            var b = P(a, "OP");
            return {
                ROOT: M.Ph,
                ABS: M.Oh,
                NEG: M.Hl,
                LN: M.Fl,
                LOG10: M.Gl,
                EXP: M.El,
                POW10: M.Il
            }[b]
        })
    }
};
N.math_trig = {
    C: function() {
        S(this, {
            message0: "%1 %2",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [
                    [M.Pl, "SIN"],
                    [M.Nl, "COS"],
                    [M.Ql, "TAN"],
                    [M.Ll, "ASIN"],
                    [M.Kl, "ACOS"],
                    [M.Ml, "ATAN"]
                ]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            output: "Number",
            colour: N.Qa.R,
            helpUrl: M.Ol
        });
        var a = this;
        nj(this, function() {
            var b = P(a, "OP");
            return {
                SIN: M.Uh,
                COS: M.Th,
                TAN: M.Vh,
                ASIN: M.Rh,
                ACOS: M.Qh,
                ATAN: M.Sh
            }[b]
        })
    }
};
N.math_constant = {
    C: function() {
        S(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "CONSTANT",
                options: [
                    ["\u03c0", "PI"],
                    ["e", "E"],
                    ["\u03c6", "GOLDEN_RATIO"],
                    ["sqrt(2)", "SQRT2"],
                    ["sqrt(\u00bd)", "SQRT1_2"],
                    ["\u221e", "INFINITY"]
                ]
            }],
            output: "Number",
            colour: N.Qa.R,
            tooltip: M.Ek,
            helpUrl: M.Dk
        })
    }
};
N.math_number_property = {
    C: function() {
        var a = [
            [M.Kk, "EVEN"],
            [M.Mk, "ODD"],
            [M.Ok, "PRIME"],
            [M.Qk, "WHOLE"],
            [M.Nk, "POSITIVE"],
            [M.Lk, "NEGATIVE"],
            [M.Jk, "DIVISIBLE_BY"]
        ];
        this.ua(N.Qa.R);
        hj(Q(this, "NUMBER_TO_CHECK"), "Number");
        a = new yj(a, function(a) {
            this.u.Ab("DIVISIBLE_BY" == a)
        });
        O(R(this), a, "PROPERTY");
        this.kb(!0);
        this.mb(!0, "Boolean");
        this.sa = M.Pk
    },
    Ja: function() {
        var a = document.createElement("mutation"),
            b = "DIVISIBLE_BY" == P(this, "PROPERTY");
        a.setAttribute("divisor_input", b);
        return a
    },
    gb: function(a) {
        a = "true" ==
            a.getAttribute("divisor_input");
        this.Ab(a)
    },
    Ab: function(a) {
        var b = I(this, "DIVISOR");
        a ? b || hj(Q(this, "DIVISOR"), "Number") : b && this.Wa("DIVISOR")
    }
};
N.math_change = {
    C: function() {
        S(this, {
            message0: M.Bk,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: M.Ck
            }, {
                type: "input_value",
                name: "DELTA",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: N.Qa.R,
            helpUrl: M.Ih
        });
        var a = this;
        nj(this, function() {
            return M.Jh.replace("%1", P(a, "VAR"))
        })
    }
};
N.math_round = {
    C: function() {
        S(this, {
            message0: "%1 %2",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [
                    [M.yl, "ROUND"],
                    [M.Al, "ROUNDUP"],
                    [M.zl, "ROUNDDOWN"]
                ]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            output: "Number",
            colour: N.Qa.R,
            tooltip: M.Bl,
            helpUrl: M.xl
        })
    }
};
N.math_on_list = {
    C: function() {
        var a = [
                [M.cl, "SUM"],
                [M.Zk, "MIN"],
                [M.Xk, "MAX"],
                [M.Wk, "AVERAGE"],
                [M.Yk, "MEDIAN"],
                [M.$k, "MODE"],
                [M.bl, "STD_DEV"],
                [M.al, "RANDOM"]
            ],
            b = this;
        this.i = M.Vk;
        this.ua(N.Qa.R);
        this.mb(!0, "Number");
        a = new yj(a, function(a) {
            b.Vf(a)
        });
        O(hj(Q(this, "LIST"), "Array"), a, "OP");
        nj(this, function() {
            var a = P(b, "OP");
            return {
                SUM: M.ol,
                MIN: M.il,
                MAX: M.fl,
                AVERAGE: M.dl,
                MEDIAN: M.hl,
                MODE: M.jl,
                STD_DEV: M.ll,
                RANDOM: M.kl
            }[a]
        })
    },
    Vf: function(a) {
        "MODE" == a ? Qd(this.K, "Array") : Qd(this.K, "Number")
    },
    Ja: function() {
        var a =
            document.createElement("mutation");
        a.setAttribute("op", P(this, "OP"));
        return a
    },
    gb: function(a) {
        this.Vf(a.getAttribute("op"))
    }
};
N.math_modulo = {
    C: function() {
        S(this, {
            message0: M.Sk,
            args0: [{
                type: "input_value",
                name: "DIVIDEND",
                check: "Number"
            }, {
                type: "input_value",
                name: "DIVISOR",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: N.Qa.R,
            tooltip: M.Tk,
            helpUrl: M.Rk
        })
    }
};
N.math_constrain = {
    C: function() {
        S(this, {
            message0: M.Gk,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }, {
                type: "input_value",
                name: "LOW",
                check: "Number"
            }, {
                type: "input_value",
                name: "HIGH",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: N.Qa.R,
            tooltip: M.Hk,
            helpUrl: M.Fk
        })
    }
};
N.math_random_int = {
    C: function() {
        S(this, {
            message0: M.vl,
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: N.Qa.R,
            tooltip: M.wl,
            helpUrl: M.ul
        })
    }
};
N.math_random_float = {
    C: function() {
        S(this, {
            message0: M.Mh,
            output: "Number",
            colour: N.Qa.R,
            tooltip: M.sl,
            helpUrl: M.rl
        })
    }
};
U.xb = {};
U.procedures_defreturn = function(a) {
    var b = U.g.getName(P(a, "NAME"), "PROCEDURE"),
        c = Mk(a, "STACK"),
        d = V(a, "RETURN", U.j) || "";
    d && (d = "  return " + d + ";\n");
    for (var e = [], f = 0; f < a.M.length; f++) e[f] = U.g.getName(a.M[f], "VARIABLE");
    c = "function " + b + "(" + e.join(", ") + ") {\n" + c + d + "}";
    c = U.oa(a, c);
    U.s[b] = c;
    return null
};
U.procedures_defnoreturn = U.procedures_defreturn;
U.procedures_callreturn = function(a) {
    for (var b = U.g.getName(P(a, "NAME"), "PROCEDURE"), c = [], d = 0; d < a.M.length; d++) c[d] = V(a, "ARG" + d, U.h) || "null";
    return [b + "(" + c.join(", ") + ")", U.i]
};
U.procedures_callnoreturn = function(a) {
    for (var b = U.g.getName(P(a, "NAME"), "PROCEDURE"), c = [], d = 0; d < a.M.length; d++) c[d] = V(a, "ARG" + d, U.h) || "null";
    return b + "(" + c.join(", ") + ");\n"
};
U.procedures_ifreturn = function(a) {
    var b = "if (" + (V(a, "CONDITION", U.j) || "false") + ") {\n";
    a.Tc ? (a = V(a, "VALUE", U.j) || "null", b += "  return " + a + ";\n") : b += "  return;\n";
    return b + "}\n"
};
N.sb = {};
N.sb.R = 210;
N.controls_if = {
    C: function() {
        this.i = M.hh;
        this.ua(N.sb.R);
        O(hj(Q(this, "IF0"), "Boolean"), M.Nf);
        O(this.ub(3, "DO0"), M.kh);
        this.Pb(!0);
        this.Ob(!0);
        this.ud(new yi(["controls_if_elseif", "controls_if_else"]));
        var a = this;
        nj(this, function() {
            if (a.Ha || a.Va) {
                if (!a.Ha && a.Va) return M.mh;
                if (a.Ha && !a.Va) return M.nh;
                if (a.Ha && a.Va) return M.oh
            } else return M.lh;
            return ""
        });
        this.Va = this.Ha = 0
    },
    Ja: function() {
        if (!this.Ha && !this.Va) return null;
        var a = document.createElement("mutation");
        this.Ha && a.setAttribute("elseif", this.Ha);
        this.Va && a.setAttribute("else", 1);
        return a
    },
    gb: function(a) {
        this.Ha = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.Va = parseInt(a.getAttribute("else"), 10) || 0;
        this.Ab()
    },
    Fd: function(a) {
        var b = a.pd("controls_if_if");
        b.pc();
        for (var c = b.g, d = 1; d <= this.Ha; d++) {
            var e = a.pd("controls_if_elseif");
            e.pc();
            c.connect(e.T);
            c = e.g
        }
        this.Va && (a = a.pd("controls_if_else"), a.pc(), c.connect(a.T));
        return b
    },
    Ed: function(a) {
        var b = z(a.g);
        this.Va = this.Ha = 0;
        a = [null];
        for (var c = [null], d = null; b;) {
            switch (b.type) {
                case "controls_if_elseif":
                    this.Ha++;
                    a.push(b.Xi);
                    c.push(b.H);
                    break;
                case "controls_if_else":
                    this.Va++;
                    d = b.H;
                    break;
                default:
                    throw "Unknown block type.";
            }
            b = b.g && z(b.g)
        }
        this.Ab();
        for (b = 1; b <= this.Ha; b++) Di(a[b], this, "IF" + b), Di(c[b], this, "DO" + b);
        Di(d, this, "ELSE")
    },
    Ee: function(a) {
        a = z(a.g);
        for (var b = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var c = I(this, "IF" + b),
                        d = I(this, "DO" + b);
                    a.Xi = c && c.I.N;
                    a.H = d && d.I.N;
                    b++;
                    break;
                case "controls_if_else":
                    d = I(this, "ELSE");
                    a.H = d && d.I.N;
                    break;
                default:
                    throw "Unknown block type.";
            }
            a = a.g && z(a.g)
        }
    },
    Ab: function() {
        I(this,
            "ELSE") && this.Wa("ELSE");
        for (var a = 1; I(this, "IF" + a);) this.Wa("IF" + a), this.Wa("DO" + a), a++;
        for (a = 1; a <= this.Ha; a++) O(hj(Q(this, "IF" + a), "Boolean"), M.jh), O(this.ub(3, "DO" + a), M.kh);
        this.Va && O(this.ub(3, "ELSE"), M.ih)
    }
};
N.controls_if_if = {
    C: function() {
        this.ua(N.sb.R);
        O(R(this), M.Rj);
        this.Ob(!0);
        this.sa = M.Sj;
        this.Ta = !1
    }
};
N.controls_if_elseif = {
    C: function() {
        this.ua(N.sb.R);
        O(R(this), M.Nj);
        this.Pb(!0);
        this.Ob(!0);
        this.sa = M.Oj;
        this.Ta = !1
    }
};
N.controls_if_else = {
    C: function() {
        this.ua(N.sb.R);
        O(R(this), M.Pj);
        this.Pb(!0);
        this.sa = M.Qj;
        this.Ta = !1
    }
};
N.logic_compare = {
    C: function() {
        var a = [
                ["=", "EQ"],
                ["\u2260", "NEQ"],
                [">", "LT"],
                ["\u2265", "LTE"],
                ["<", "GT"],
                ["\u2264", "GTE"]
            ],
            b = [
                ["=", "EQ"],
                ["\u2260", "NEQ"],
                ["<", "LT"],
                ["\u2264", "LTE"],
                [">", "GT"],
                ["\u2265", "GTE"]
            ],
            a = this.o ? a : b;
        this.i = M.uh;
        this.ua(N.sb.R);
        this.mb(!0, "Boolean");
        Q(this, "A");
        O(Q(this, "B"), new yj(a), "OP");
        this.kb(!0);
        var c = this;
        nj(this, function() {
            var a = P(c, "OP");
            return {
                EQ: M.vh,
                NEQ: M.Ah,
                LT: M.yh,
                LTE: M.zh,
                GT: M.wh,
                GTE: M.xh
            }[a]
        });
        this.Za = [null, null]
    },
    onchange: function(a) {
        var b = Cj(this, "A"),
            c = Cj(this,
                "B");
        if (b && c && !yd(b.K, c.K)) {
            A(a.i);
            for (a = 0; a < this.Za.length; a++) {
                var d = this.Za[a];
                if (d === b || d === c) Rd(d), Sd(d)
            }
            A(!1)
        }
        this.Za[0] = b;
        this.Za[1] = c
    }
};
N.logic_operation = {
    C: function() {
        var a = [
            [M.Bh, "AND"],
            [M.Ch, "OR"]
        ];
        this.i = M.pk;
        this.ua(N.sb.R);
        this.mb(!0, "Boolean");
        hj(Q(this, "A"), "Boolean");
        O(hj(Q(this, "B"), "Boolean"), new yj(a), "OP");
        this.kb(!0);
        var b = this;
        nj(this, function() {
            var a = P(b, "OP");
            return {
                AND: M.qk,
                OR: M.rk
            }[a]
        })
    }
};
N.logic_negate = {
    C: function() {
        S(this, {
            message0: M.ik,
            args0: [{
                type: "input_value",
                name: "BOOL",
                check: "Boolean"
            }],
            output: "Boolean",
            colour: N.sb.R,
            tooltip: M.jk,
            helpUrl: M.hk
        })
    }
};
N.logic_boolean = {
    C: function() {
        S(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "BOOL",
                options: [
                    [M.sh, "TRUE"],
                    [M.rh, "FALSE"]
                ]
            }],
            output: "Boolean",
            colour: N.sb.R,
            tooltip: M.gk,
            helpUrl: M.fk
        })
    }
};
N.logic_null = {
    C: function() {
        S(this, {
            message0: M.kk,
            output: null,
            colour: N.sb.R,
            tooltip: M.nk,
            helpUrl: M.lk
        })
    }
};
N.logic_ternary = {
    C: function() {
        this.i = M.vk;
        this.ua(N.sb.R);
        O(hj(Q(this, "IF"), "Boolean"), M.tk);
        O(Q(this, "THEN"), M.xk);
        O(Q(this, "ELSE"), M.wk);
        this.mb(!0);
        this.sa = M.yk;
        this.Uf = null
    },
    onchange: function(a) {
        var b = Cj(this, "THEN"),
            c = Cj(this, "ELSE"),
            d = this.K.N;
        if ((b || c) && d)
            for (var e = 0; 2 > e; e++) {
                var f = 1 == e ? b : c;
                f && !yd(f.K, d) && (A(a.i), d === this.Uf ? (Rd(this), Sd(d.u)) : (Rd(f), Sd(f)), A(!1))
            }
        this.Uf = d
    }
};
U.Nr = {};
U.controls_repeat_ext = function(a) {
    var b = Sg(a, "TIMES") ? String(Number(P(a, "TIMES"))) : V(a, "TIMES", U.B) || "0";
    a = Mk(a, "DO");
    var c = "",
        d = Pk(U.g, "count", "VARIABLE"),
        e = b;
    b.match(/^\w+$/) || al(b) || (e = Pk(U.g, "repeat_end", "VARIABLE"), c += "var " + e + " = " + b + ";\n");
    return c + ("for (var " + d + " = 0; " + d + " < " + e + "; " + d + "++) {\n" + a + "}\n")
};
U.controls_repeat = U.controls_repeat_ext;
U.controls_whileUntil = function(a) {
    var b = "UNTIL" == P(a, "MODE"),
        c = V(a, "BOOL", b ? U.Ua : U.j) || "false";
    a = Mk(a, "DO");
    b && (c = "!" + c);
    return "while (" + c + ") {\n" + a + "}\n"
};
U.controls_for = function(a) {
    var b = U.g.getName(P(a, "VAR"), "VARIABLE"),
        c = V(a, "FROM", U.B) || "0",
        d = V(a, "TO", U.B) || "0",
        e = V(a, "BY", U.B) || "1";
    a = Mk(a, "DO");
    var f;
    if (al(c) && al(d) && al(e)) {
        var k = parseFloat(c) <= parseFloat(d);
        f = "for (" + b + " = " + c + "; " + b + (k ? " <= " : " >= ") + d + "; " + b;
        b = Math.abs(parseFloat(e));
        f = (1 == b ? f + (k ? "++" : "--") : f + ((k ? " += " : " -= ") + b)) + (") {\n" + a + "}\n")
    } else f = "", k = c, c.match(/^\w+$/) || al(c) || (k = Pk(U.g, b + "_start", "VARIABLE"), f += "var " + k + " = " + c + ";\n"), c = d, d.match(/^\w+$/) || al(d) || (c = Pk(U.g, b + "_end",
        "VARIABLE"), f += "var " + c + " = " + d + ";\n"), d = Pk(U.g, b + "_inc", "VARIABLE"), f += "var " + d + " = ", f = al(e) ? f + (Math.abs(e) + ";\n") : f + ("Math.abs(" + e + ");\n"), f = f + ("if (" + k + " > " + c + ") {\n") + ("  " + d + " = -" + d + ";\n"), f += "}\n", f += "for (" + b + " = " + k + ";\n     " + d + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + ";\n     " + b + " += " + d + ") {\n" + a + "}\n";
    return f
};
U.controls_forEach = function(a) {
    var b = U.g.getName(P(a, "VAR"), "VARIABLE"),
        c = V(a, "LIST", U.B) || "[]";
    a = Mk(a, "DO");
    var d = "",
        e = c;
    c.match(/^\w+$/) || (e = Pk(U.g, b + "_list", "VARIABLE"), d += "var " + e + " = " + c + ";\n");
    c = Pk(U.g, b + "_index", "VARIABLE");
    return d + ("for (var " + c + " in " + e + ") {\n" + ("  " + b + " = " + e + "[" + c + "];\n" + a) + "}\n")
};
U.controls_flow_statements = function(a) {
    switch (P(a, "FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n"
    }
    throw "Unknown flow statement.";
};
U.sb = {};
U.controls_if = function(a) {
    for (var b = 0, c = V(a, "IF" + b, U.j) || "false", d = Mk(a, "DO" + b), e = "if (" + c + ") {\n" + d + "}", b = 1; b <= a.Ha; b++) c = V(a, "IF" + b, U.j) || "false", d = Mk(a, "DO" + b), e += " else if (" + c + ") {\n" + d + "}";
    a.Va && (d = Mk(a, "ELSE"), e += " else {\n" + d + "}");
    return e + "\n"
};
U.logic_compare = function(a) {
    var b = {
            EQ: "==",
            NEQ: "!=",
            LT: "<",
            LTE: "<=",
            GT: ">",
            GTE: ">="
        }[P(a, "OP")],
        c = "==" == b || "!=" == b ? U.Ta : U.xc,
        d = V(a, "A", c) || "0";
    a = V(a, "B", c) || "0";
    return [d + " " + b + " " + a, c]
};
U.logic_operation = function(a) {
    var b = "AND" == P(a, "OP") ? "&&" : "||",
        c = "&&" == b ? U.dc : U.ec,
        d = V(a, "A", c);
    a = V(a, "B", c);
    if (d || a) {
        var e = "&&" == b ? "true" : "false";
        d || (d = e);
        a || (a = e)
    } else a = d = "false";
    return [d + " " + b + " " + a, c]
};
U.logic_negate = function(a) {
    var b = U.Ua;
    return ["!" + (V(a, "BOOL", b) || "true"), b]
};
U.logic_boolean = function(a) {
    return ["TRUE" == P(a, "BOOL") ? "true" : "false", U.G]
};
U.logic_null = function() {
    return ["null", U.G]
};
U.logic_ternary = function(a) {
    var b = V(a, "IF", U.L) || "false",
        c = V(a, "THEN", U.L) || "null";
    a = V(a, "ELSE", U.L) || "null";
    return [b + " ? " + c + " : " + a, U.L]
};
N.pond_scan = {
    C: function() {
        S(this, {
            message0: "scan(%1)",
            args0: [{
                type: "input_value",
                name: "DEGREE",
                check: ["Number", "Angle"]
            }],
            inputsInline: !0,
            output: "Number",
            colour: 290,
            tooltip: rn("Pond_scanTooltip")
        })
    }
};
U.pond_scan = function(a) {
    return ["scan(" + (V(a, "DEGREE", U.h) || 0) + ")", U.i]
};
N.pond_cannon = {
    C: function() {
        S(this, {
            message0: "cannon(%1, %2);",
            args0: [{
                type: "input_value",
                name: "DEGREE",
                check: ["Number", "Angle"]
            }, {
                type: "input_value",
                name: "RANGE",
                check: "Number"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: rn("Pond_cannonTooltip")
        })
    }
};
U.pond_cannon = function(a) {
    var b = V(a, "DEGREE", U.h) || 0;
    a = V(a, "RANGE", U.h) || 0;
    return "cannon(" + b + ", " + a + ");\n"
};
N.pond_swim = {
    C: function() {
        S(this, {
            message0: "swim(%1);",
            args0: [{
                type: "input_value",
                name: "DEGREE",
                check: ["Number", "Angle"]
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: rn("Pond_swimTooltip")
        })
    }
};
U.pond_swim = function(a) {
    return "swim(" + (V(a, "DEGREE", U.h) || 0) + ");\n"
};
N.pond_stop = {
    C: function() {
        S(this, {
            message0: "stop();",
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: rn("Pond_stopTooltip")
        })
    }
};
U.pond_stop = function() {
    return "stop();\n"
};
N.pond_health = {
    C: function() {
        S(this, {
            message0: "health()",
            output: "Number",
            colour: 290,
            tooltip: rn("Pond_healthTooltip")
        })
    }
};
U.pond_health = function() {
    return ["health()", U.i]
};
N.pond_speed = {
    C: function() {
        S(this, {
            message0: "speed()",
            output: "Number",
            colour: 290,
            tooltip: rn("Pond_speedTooltip")
        })
    }
};
U.pond_speed = function() {
    return ["speed()", U.i]
};
N.pond_loc_x = {
    C: function() {
        S(this, {
            message0: "loc_x()",
            output: "Number",
            colour: 290,
            tooltip: rn("Pond_locXTooltip")
        })
    }
};
U.pond_loc_x = function() {
    return ["loc_x()", U.i]
};
N.pond_loc_y = {
    C: function() {
        S(this, {
            message0: "loc_y()",
            output: "Number",
            colour: 290,
            tooltip: rn("Pond_locYTooltip")
        })
    }
};
U.pond_loc_y = function() {
    return ["loc_y()", U.i]
};
N.pond_controls_if = {
    C: function() {
        this.i = M.hh;
        this.ua(N.sb.R);
        O(hj(Q(this, "IF0"), "Boolean"), "if (");
        O(R(this), ") {");
        this.ub(3, "DO0");
        O(R(this, "TAIL"), "}");
        this.kb(!0);
        this.Pb(!0);
        this.Ob(!0);
        this.ud(new yi(["controls_if_elseif", "controls_if_else"]));
        var a = this;
        nj(this, function() {
            if (a.Ha || a.Va) {
                if (!a.Ha && a.Va) return M.mh;
                if (a.Ha && !a.Va) return M.nh;
                if (a.Ha && a.Va) return M.oh
            } else return M.lh;
            return ""
        });
        this.Va = this.Ha = 0
    },
    Ab: function() {
        I(this, "ELSE") && (this.Wa("ELSEMSG"), this.Wa("ELSE"));
        for (var a = 1; I(this,
                "IF" + a);) this.Wa("IF" + a), this.Wa("TAIL" + a), this.Wa("DO" + a), a++;
        for (a = 1; a <= this.Ha; a++) O(hj(Q(this, "IF" + a), "Boolean"), "} else if ("), O(R(this, "TAIL" + a), ") {"), this.ub(3, "DO" + a);
        this.Va && (O(R(this, "ELSEMSG"), "} else {"), this.ub(3, "ELSE"));
        Bj(this, "TAIL", null)
    },
    Ja: N.controls_if.Ja,
    gb: N.controls_if.gb,
    Fd: N.controls_if.Fd,
    Ed: N.controls_if.Ed,
    Ee: N.controls_if.Ee
};
U.pond_controls_if = U.controls_if;
N.logic_compare.C = function() {
    this.i = M.uh;
    this.ua(N.sb.R);
    this.mb(!0, "Boolean");
    Q(this, "A");
    O(Q(this, "B"), new yj([
        ["==", "EQ"],
        ["!=", "NEQ"],
        ["<", "LT"],
        ["<=", "LTE"],
        [">", "GT"],
        [">=", "GTE"]
    ]), "OP");
    this.kb(!0);
    var a = this;
    nj(this, function() {
        var b = P(a, "OP");
        return {
            uo: M.vh,
            mq: M.Ah,
            jq: M.yh,
            kq: M.zh,
            vo: M.wh,
            wo: M.xh
        }[b]
    });
    this.Za = [null, null]
};
M.Bh = "&&";
M.Ch = "||";
M.sh = "true";
M.rh = "false";
N.pond_loops_while = {
    C: function() {
        S(this, {
            message0: "while ( %1 ) { %2 %3 }",
            args0: [{
                type: "input_value",
                name: "BOOL",
                check: "Boolean"
            }, {
                type: "input_dummy"
            }, {
                type: "input_statement",
                name: "DO"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: 120,
            tooltip: M.Uj,
            helpUrl: M.Tj
        })
    }
};
U.pond_loops_while = U.controls_whileUntil;
N.pond_math_number = {
    C: function() {
        this.i = M.Kh;
        this.ua(N.Qa.R);
        O(R(this, "DUMMY"), new uj("0", hk), "NUM");
        this.mb(!0, "Number");
        this.sa = M.Lh
    },
    onchange: function() {
        if (this.A && this.K.N && this.K.N.zc) {
            var a = I(this, "DUMMY"),
                b = Sg(this, "NUM"),
                c = b.ab(); - 1 != this.K.N.zc.indexOf("Angle") ? b.constructor != vj && (B++, fj(a, "NUM"), b = new vj(""), O(a, b, "NUM"), b.Cb(c), this.U(), B--) : b.constructor != uj && (B++, fj(a, "NUM"), O(a, new uj(c, hk), "NUM"), B--)
        }
    }
};
U.pond_math_number = U.math_number;
N.pond_math_arithmetic = {
    C: function() {
        S(this, {
            message0: "%1 %2 %3",
            args0: [{
                type: "input_value",
                name: "A",
                check: "Number"
            }, {
                type: "field_dropdown",
                name: "OP",
                options: [
                    ["+", "ADD"],
                    ["-", "MINUS"],
                    ["*", "MULTIPLY"],
                    ["/", "DIVIDE"]
                ]
            }, {
                type: "input_value",
                name: "B",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: N.Qa.R,
            helpUrl: M.Dh
        });
        var a = this;
        nj(this, function() {
            var b = P(a, "OP");
            return {
                ADD: M.Eh,
                MINUS: M.Gh,
                MULTIPLY: M.Hh,
                DIVIDE: M.Fh
            }[b]
        })
    }
};
U.pond_math_arithmetic = U.math_arithmetic;
N.pond_math_single = {
    C: function() {
        S(this, {
            message0: "%1 (%2)",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [
                    ["Math.sqrt", "ROOT"],
                    ["Math.abs", "ABS"],
                    ["Math.sin_deg", "SIN"],
                    ["Math.cos_deg", "COS"],
                    ["Math.tan_deg", "TAN"],
                    ["Math.asin_deg", "ASIN"],
                    ["Math.acos_deg", "ACOS"],
                    ["Math.atan_deg", "ATAN"]
                ]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: N.Qa.R,
            helpUrl: M.Nh
        });
        var a = this;
        nj(this, function() {
            var b = P(a, "OP");
            return {
                ROOT: M.Ph,
                ABS: M.Oh,
                SIN: M.Uh,
                COS: M.Th,
                TAN: M.Vh,
                ASIN: M.Rh,
                ACOS: M.Qh,
                ATAN: M.Sh
            }[b]
        })
    }
};
U.pond_math_single = function(a) {
    var b = P(a, "OP");
    a = V(a, "NUM", U.j) || "0";
    switch (b) {
        case "ABS":
            b = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            b = "Math.sqrt(" + a + ")";
            break;
        case "SIN":
            b = "Math.sin_deg(" + a + ")";
            break;
        case "COS":
            b = "Math.cos_deg(" + a + ")";
            break;
        case "TAN":
            b = "Math.tan_deg(" + a + ")";
            break;
        case "ASIN":
            b = "Math.asin_deg(" + a + ")";
            break;
        case "ACOS":
            b = "Math.acos_deg(" + a + ")";
            break;
        case "ATAN":
            b = "Math.atan_deg(" + a + ")";
            break;
        default:
            throw "Unknown math operator: " + b;
    }
    return [b, U.i]
};
N.pond_math_change = {
    C: function() {
        S(this, {
            message0: "%1 += %2;",
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: "name"
            }, {
                type: "input_value",
                name: "DELTA",
                check: "Number"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: N.Qa.R,
            helpUrl: M.Ih
        });
        var a = this;
        nj(this, function() {
            return M.Jh.replace("%1", P(a, "VAR"))
        })
    }
};
U.pond_math_change = U.math_change;
M.Mh = "Math.random()";
N.variables_get.C = function() {
    this.i = M.mi;
    this.ua(N.Xd.R);
    O(R(this), new qj("name"), "VAR");
    this.mb(!0);
    this.sa = M.ni;
    this.cc = M.li;
    this.dc = "variables_set"
};
N.variables_set.C = function() {
    this.i = M.oi;
    this.ua(N.Xd.R);
    O(O(O(Q(this, "VALUE"), "var"), new qj("name"), "VAR"), "=");
    O(R(this), ";");
    this.kb(!0);
    this.Pb(!0);
    this.Ob(!0);
    this.sa = M.pi;
    this.cc = M.Tf;
    this.dc = "variables_get"
};
N.procedures_defnoreturn.C = function() {
    this.i = M.ci;
    this.ua(N.xb.R);
    var a = Tk(M.Rf, this);
    O(O(O(O(O(R(this), "function"), new uj(a, Vk), "NAME"), "("), "", "PARAMS"), ") {");
    this.Ic(!0);
    O(R(this), "}");
    this.ud(new yi(["procedures_mutatorarg"]));
    this.sa = M.ei;
    this.M = [];
    this.H = null
};
N.procedures_defreturn.C = function() {
    this.i = M.ii;
    this.ua(N.xb.R);
    var a = Tk(M.ji, this);
    O(O(O(O(O(R(this), "function"), new uj(a, Vk), "NAME"), "("), "", "PARAMS"), ") {");
    O(ij(Q(this, "RETURN"), 1), "return");
    O(R(this), "}");
    this.ud(new yi(["procedures_mutatorarg"]));
    this.sa = M.ki;
    this.M = [];
    this.Ic(!0);
    this.H = null
};
M.Xh = "";
N.procedures_callnoreturn.C = function() {
    this.i = M.Yh;
    this.ua(N.xb.R);
    O(O(R(this), "", "NAME"), "(");
    O(R(this, "TAIL"), ");");
    this.kb(!0);
    this.Pb(!0);
    this.Ob(!0);
    this.sa = M.Zh;
    this.M = [];
    this.Y = {}
};
N.procedures_callnoreturn.Ab = function() {
    for (var a = 0; a < this.M.length; a++)
        if (!I(this, "ARG" + a)) {
            new dj(this.M[a]);
            var b = Q(this, "ARG" + a);
            0 < a && O(b, ",");
            b.C()
        }
    for (; I(this, "ARG" + a);) this.Wa("ARG" + a), a++;
    Bj(this, "TAIL", null)
};
N.procedures_callreturn.C = function() {
    this.i = M.$h;
    this.ua(N.xb.R);
    O(O(R(this), "", "NAME"), "(");
    O(R(this, "TAIL"), ")");
    this.kb(!0);
    this.mb(!0);
    this.sa = M.ai;
    this.M = [];
    this.Y = {}
};
N.procedures_callreturn.Ab = N.procedures_callnoreturn.Ab;
delete N.procedures_ifreturn;
var yn, zn, An, Bn = {},
    Cn = [],
    Dn = new Image;
Dn.src = "pond/sprites.png";
var En = ["#ff8b00", "#c90015", "#166c0b", "#11162a"],
    Fn = 0,
    Gn = Object.create(null);

function Hn() {
    yn = document.getElementById("scratch").getContext("2d");
    var a = document.getElementById("display").getContext("2d");
    zn = a;
    An = a.canvas.width;
    a.globalCompositeOperation = "copy";
    In(["pond/whack.mp3", "pond/whack.ogg"], "whack");
    In(["pond/boom.mp3", "pond/boom.ogg"], "boom");
    In(["pond/splash.mp3", "pond/splash.ogg"], "splash");
    if (!wb && !vb)
        for (var b in Gn) a = Gn[b], a.volume = .01, a.play(), a.pause()
}

function Jn() {
    clearTimeout(Fn);
    Cn.length = 0;
    var a = document.getElementById("avatarStatRow");
    a.innerHTML = "";
    for (var b = [], c = [], d = 0, e; e = Z.pb[d]; d++) {
        var f = En[d % En.length];
        e.wj = d;
        var k = document.createElement("td");
        k.style.borderColor = f;
        var l = document.createElement("div");
        l.className = "avatarStatHealth";
        l.style.background = f;
        e.xn = l;
        c[d] = l;
        k.appendChild(l);
        l = document.createElement("div");
        l.className = "avatarStatName";
        e = document.createTextNode(e.name);
        l.appendChild(e);
        b[d] = l;
        k.appendChild(l);
        l = document.createElement("div");
        e = document.createTextNode("\u00a0");
        l.appendChild(e);
        k.appendChild(l);
        a.appendChild(k)
    }
    for (d = 0; l = b[d]; d++) l.style.width = l.parentNode.offsetWidth - 2 + "px";
    for (d = 0; l = c[d]; d++) l.style.height = l.parentNode.offsetHeight - 2 + "px";
    Kn()
}
var Ln = 0,
    Mn = 0;

function Nn() {
    Kn();
    var a = Date.now(),
        b = Math.max(1, 1E3 / 36 - (a - Ln - Mn));
    Fn = setTimeout(Nn, b);
    Ln = a;
    Mn = b
}

function On(a) {
    return a / 100 * (An - 35) + 17.5
}

function Kn() {
    var a = yn;
    a.beginPath();
    a.rect(0, 0, a.canvas.width, a.canvas.height);
    a.fillStyle = "#527dbf";
    a.fill();
    for (var b = [], c = 0, d; d = Z.pb[c]; c++) d.Ub && b.push(d);
    for (c = 0; d = Z.pb[c]; c++) d.Ub || b.push(d);
    for (c = 0; d = b[c]; c++) {
        a.save();
        var e = On(d.ba.x),
            f = On(100 - d.ba.y);
        a.translate(e, f);
        var k = d.wj % En.length * 35;
        d.Ub && (a.globalAlpha = .25);
        0 < d.speed && (a.save(), e = 50 < d.speed ? 0 : 25 < d.speed ? 35 : 70, a.rotate(-d.Bc / 180 * Math.PI), a.drawImage(Dn, 455, e, 35, 35, -45.5, -17.5, 35, 35), a.restore());
        a.drawImage(Dn, 0, k, 35, 35, -17.5, -17.5,
            35, 35);
        e = d.facing / 180 * Math.PI;
        a.translate(12 * Math.cos(e), 12 * -Math.sin(e) - 2);
        e = (14 - Math.round(d.facing / 360 * 12)) % 12 + 1;
        d = d.facing % 30;
        15 <= d && (d -= 30);
        d /= 1.5;
        a.rotate(-d / 180 * Math.PI);
        a.drawImage(Dn, 35 * e, k, 35, 35, -15.5, -15.5, 35, 35);
        a.restore()
    }
    for (c = 0; d = Z.zd[c]; c++) {
        a.save();
        var f = d.Ae / d.xf,
            k = (d.me.y - d.Ie.y) * -f,
            e = d.xf / 2,
            l = .15 * d.xf,
            e = l - Math.pow((d.Ae - e) / Math.sqrt(l) * l / e, 2),
            f = On(d.Ie.x + (d.me.x - d.Ie.x) * f),
            l = On(100 - d.Ie.y + k - e),
            k = On(100 - d.Ie.y + k);
        a.beginPath();
        a.arc(f, k, 5 * Math.max(0, 1 - e / 10), 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = "rgba(128, 128, 128, " + Math.max(0, 1 - e / 10) + ")";
        a.fill();
        a.beginPath();
        a.arc(f, l, 5, 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = En[d.rm.wj % En.length];
        a.fill()
    }
    for (c = 0; c < Z.Sb.length; c++)
        if (e = Z.Sb[c], d = e.avatar, "CRASH" == e.type) {
            if (k = Bn[d.id], !k || k + 1E3 < oa()) Pn("whack", e.damage / Z.Mf), Bn[d.id] = oa()
        } else "SCAN" == e.type ? (f = Math.max(e.resolution / 2, .5), k = -Qc(e.degree + f), l = -Qc(e.degree - f), a.beginPath(), e = On(d.ba.x), f = On(100 - d.ba.y), a.moveTo(e, f), a.lineTo(e + 200 * Math.cos(k), f + 200 * Math.sin(k)), a.arc(e, f,
            200, k, l), a.lineTo(e, f), d = a.createRadialGradient(e, f, 17.5, e, f, 200), d.addColorStop(0, "rgba(255, 255, 255, 0.3)"), d.addColorStop(1, "rgba(255, 255, 255, 0)"), a.fillStyle = d, a.fill()) : "BANG" != e.type && ("BOOM" == e.type ? (e.damage && Pn("boom", e.damage / 10), Cn.push({
            x: e.x,
            y: e.y,
            t: 0
        })) : "DIE" == e.type && Pn("splash"));
    Z.Sb.length = 0;
    for (c = Cn.length - 1; 0 <= c; c--) d = Cn[c], e = On(d.x), f = On(100 - d.y), a.beginPath(), a.arc(e, f, d.t + 1, 0, 2 * Math.PI, !0), a.closePath(), a.lineWidth = 5, a.strokeStyle = "rgba(255, 255, 255, " + (1 - d.t / 10) + ")", a.stroke(),
        d.t += 2, 10 < d.t && Cn.splice(c, 1);
    zn.drawImage(a.canvas, 0, 0);
    for (c = 0; d = b[c]; c++) a = d.xn, a.parentNode.title = d.name + ": " + Math.round(100 - d.na) + "%", a.style.width = Math.max(0, a.parentNode.offsetWidth * (1 - d.na / 100) - 2) + "px"
}

function In(a, b) {
    if (window.Audio && a.length) {
        for (var c, d = new window.Audio, e = 0; e < a.length; e++) {
            var f = a[e],
                k = f.match(/\.(\w+)$/);
            if (k && d.canPlayType("audio/" + k[1])) {
                c = new window.Audio(f);
                break
            }
        }
        c && c.play && (Gn[b] = c)
    }
}

function Pn(a, b) {
    var c = Gn[a],
        c = Fb && 9 === Fb || wb || ub ? c : c.cloneNode();
    c.volume = void 0 === b ? 1 : b;
    c.play()
};
var Qn = {},
    Rn = {};

function Sn() {
    throw Error("Do not instantiate directly");
}
Sn.prototype.Ue = null;
Sn.prototype.toString = function() {
    return this.content
};
Sn.prototype.Ff = function() {
    if (this.Ve === Rn) return zc(this.toString());
    if (this.Ve !== Qn) throw Error("Sanitized content was not of kind TEXT or HTML.");
    return Ac(this.toString(), this.Ue || null)
};
u && Db(8);

function Tn(a) {
    if (null != a) switch (a.Ue) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Un() {
    Sn.call(this)
}
t(Un, Sn);
Un.prototype.Ve = Qn;

function Vn(a) {
    return null != a && a.Ve === Qn ? a : Wn(String(String(a)).replace(Xn, Yn), Tn(a))
}

function Zn() {
    Sn.call(this)
}
t(Zn, Sn);
Zn.prototype.Ve = {}.xo;

function $n(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Ue = d);
        return e
    }
}
var Wn = $n(Un);
$n(Zn);
(function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        if (!String(a)) return "";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Ue = d);
        return e
    }
})(Un);
var ao = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function Yn(a) {
    return ao[a]
}
var Xn = /[\x00\x22\x26\x27\x3c\x3e]/g;

function bo() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u786e\u8ba4</button></div>'
};

function co() {
    for (var a = '<div style="display: none"><span id="Games_name">Blockly \u6e38\u620f</span><span id="Games_puzzle">\u62fc\u56fe</span><span id="Games_maze">\u8ff7\u5bab</span><span id="Games_bird">\u9e1f</span><span id="Games_turtle">\u4e4c\u9f9f</span><span id="Games_movie">\u7535\u5f71</span><span id="Games_pondTutor">\u6c60\u5858\u5bfc\u5e08</span><span id="Games_pond">\u6c60\u5858</span><span id="Games_linesOfCode1">\u60a8\u901a\u8fc7\u4e00\u884cJavaScript\u901a\u8fc7\u4e86\u8fd9\u4e2a\u7b49\u7ea7\uff1a</span><span id="Games_linesOfCode2">\u60a8\u901a\u8fc7%1\u884cJavaScript\u901a\u8fc7\u4e86\u8fd9\u4e2a\u7b49\u7ea7\uff1a</span><span id="Games_nextLevel">\u51c6\u5907\u597d\u7b49\u7ea7%1\u4e86\u4e48?</span><span id="Games_finalLevel">\u60a8\u51c6\u5907\u597d\u4e0b\u4e00\u4e2a\u6311\u6218\u4e86\u4e48\uff1f</span><span id="Games_linkTooltip">\u4fdd\u5b58\u5e76\u94fe\u63a5\u81f3\u5757\u3002</span><span id="Games_runTooltip">\u8fd0\u884c\u60a8\u5199\u7684\u7a0b\u5e8f\u3002</span><span id="Games_runProgram">\u8fd0\u884c\u7a0b\u5e8f</span><span id="Games_resetTooltip">\u505c\u6b62\u8fd0\u884c\u7a0b\u5e8f\u5e76\u91cd\u7f6e\u7b49\u7ea7\u3002</span><span id="Games_resetProgram">\u91cd\u7f6e</span><span id="Games_help">\u5e2e\u52a9</span><span id="Games_dialogOk">\u786e\u8ba4</span><span id="Games_dialogCancel">\u53d6\u6d88</span><span id="Games_catLogic">\u903b\u8f91</span><span id="Games_catLoops">\u5faa\u73af</span><span id="Games_catMath">\u6570\u5b66</span><span id="Games_catText">\u6587\u672c</span><span id="Games_catLists">\u5217\u8868</span><span id="Games_catColour">\u989c\u8272</span><span id="Games_catVariables">\u53d8\u91cf</span><span id="Games_catProcedures">\u51fd\u6570</span><span id="Games_httpRequestError">\u8bf7\u6c42\u5b58\u5728\u95ee\u9898\u3002</span><span id="Games_linkAlert">\u901a\u8fc7\u8fd9\u4e2a\u94fe\u63a5\u5206\u4eab\u60a8\u7684\u6a21\u5757\uff1a\n\n%1</span><span id="Games_hashError">\u5bf9\u4e0d\u8d77\uff0c\u6ca1\u6709\u4efb\u4f55\u5df2\u4fdd\u5b58\u7684\u7a0b\u5e8f\u5bf9\u5e94\'%1\' \u3002</span><span id="Games_xmlError">\u65e0\u6cd5\u8f7d\u5165\u60a8\u4fdd\u5b58\u7684\u6587\u4ef6\u3002\u60a8\u662f\u5426\u4f7f\u7528\u5176\u4ed6\u7248\u672c\u7684Blockly\u521b\u5efa\u8be5\u6587\u4ef6\u7684\uff1f</span><span id="Games_listVariable">\u5217\u8868</span><span id="Games_textVariable">\u6587\u672c</span></div><div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">\u8bd5\u5c04\u5927\u70ae\u3002\u6307\u5b9a\u4e00\u4e2a\u65b9\u5411\uff080~360\uff09\u548c\u4e00\u4e2a\u8303\u56f4\uff080~70\uff09\u3002.</span><span id="Pond_swimTooltip">\u5411\u524d\u6e38\uff0c\u5e76\u6307\u5b9a\u4e00\u4e2a\u65b9\u5411\uff080-360\uff09\u3002</span><span id="Pond_stopTooltip">\u505c\u6b62\u6e38\u6cf3\u3002\u73a9\u5bb6\u5c06\u7f13\u6162\u505c\u6b62\u3002</span><span id="Pond_healthTooltip">\u8fd4\u56de\u73a9\u5bb6\u7684\u5f53\u524d\u5065\u5eb7\u72b6\u51b5\uff080\u4ee3\u8868\u6b7b\u4ea1\uff0c100\u4ee3\u8868\u5065\u5eb7\uff09\u3002</span><span id="Pond_speedTooltip">\u8fd4\u56de\u73a9\u5bb6\u7684\u5f53\u524d\u901f\u5ea6\uff080\u4ee3\u8868\u5df2\u505c\u6b62\uff0c100\u4ee3\u8868\u5168\u901f\uff09\u3002</span><span id="Pond_locXTooltip">\u8fd4\u56de\u73a9\u5bb6\u7684X\u5750\u6807\uff080\u4ee3\u8868\u5de6\u8fb9\uff0c100\u4ee3\u8868\u53f3\u8fb9\uff09\u3002</span><span id="Pond_locYTooltip">\u8fd4\u56de\u73a9\u5bb6\u7684\u7eb5\u5750\u6807\uff080\u662f\u5728\u5e95\u90e8\uff0c100\u5219\u662f\u5728\u9876\u90e8\uff09\u3002</span></div><div style="display: none"><span id="Pond_playerName">\u73a9\u5bb6</span><span id="Pond_targetName">\u76ee\u6807</span><span id="Pond_pendulumName">\u6447\u6446\u4e0d\u5b9a</span><span id="Pond_scaredName">\u5bb3\u6015</span></div><table width="100%"><tr><td><h1>' +
            ('<span id="title">' + (hn ? '<a href="index.html?lang=' + Vn(fn) + '">' : '<a href="./?lang=' + Vn(fn) + '">') + "Blockly \u6e38\u620f</a> : " + Vn("\u6c60\u5858\u5bfc\u5e08") + "</span>"), b = " &nbsp; ", c = 1; 11 > c; c++) b += " " + (c == W ? '<span class="level_number level_done" id="level' + Vn(c) + '">' + Vn(c) + "</span>" : 10 == c ? '<a class="level_number" id="level' + Vn(c) + '" href="?lang=' + Vn(fn) + "&level=" + Vn(c) + Vn("") + '">' + Vn(c) + "</a>" : '<a class="level_dot" id="level' + Vn(c) + '" href="?lang=' + Vn(fn) + "&level=" + Vn(c) + Vn("") + '"></a>');
    a = a + b +
        '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="\u4fdd\u5b58\u5e76\u94fe\u63a5\u81f3\u5757\u3002"><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">\u5e2e\u52a9</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u663e\u793a\u8bed\u8a00\u6587\u6863\u3002">\u6587\u6863</button></td><td><button id="runButton" class="primary" title="\u8fd0\u884c\u60a8\u5199\u7684\u7a0b\u5e8f\u3002"><img src="common/1x1.gif" class="run icon21"> \u8fd0\u884c\u7a0b\u5e8f</button><button id="resetButton" class="primary" style="display: none" title="\u505c\u6b62\u8fd0\u884c\u7a0b\u5e8f\u5e76\u91cd\u7f6e\u7b49\u7ea7\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91cd\u7f6e</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
    switch (W) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            a += '<xml id="toolbox" style="display: none;"><category name="\u6c60\u5858"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><field name="NUM">70</field></shadow></value></block>' + (5 <= W ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block>' : "") + (7 <= W ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block>' :
                "") + (9 <= W ? '<block type="pond_stop"></block>' : "") + (9 <= W ? '<block type="pond_loc_x"></block><block type="pond_loc_y"></block>' : "") + "</category>" + (3 <= W ? '<category name="\u903b\u8f91">' + (9 <= W ? '<block type="pond_controls_if"></block><block type="logic_compare"></block>' : "") + '<block type="logic_boolean"></block></category><category name="\u5faa\u73af"><block type="pond_loops_while"></block></category>' : "") + '<category name="\u6570\u5b66"><block type="pond_math_number"></block></category></xml><div id="blockly"></div>';
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            a += '<div id="editor"></div>'
    }
    return a += '\n<div id="playerTarget" style="display: none">\n</div>\n\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (loc_x() > 25) {\n      swim(180, 25);\n    } else {\n      west = false;\n      swim(0, 0);\n    }\n  } else {\n    if (loc_x() < 75) {\n      swim(0, 25);\n    } else {\n      west = true;\n      swim(0, 0);\n    }\n  }\n}\n</div>\n\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    swim(45, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    stop();\n  }\n}\n</div>\n<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u795d\u8d3a\uff01</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u53d6\u6d88</button><button id="doneOk" class="secondary">\u786e\u8ba4</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + bo() + "</div>") + (5 == W || 6 == W ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u60a8\u7684\u89e3\u51b3\u65b9\u6848\u80fd\u591f\u5de5\u4f5c\uff0c\u4f46\u60a8\u53ef\u4ee5\u505a\u7684\u66f4\u597d\u3002\u4f7f\u7528\u201cscan\u201d\u4ee5\u544a\u8bc9\u5927\u70ae\u5c04\u51fb\u591a\u8fdc\u3002</div>' + bo() + "</div>" : "") + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
        (1 == W || 2 == W ? "\u4f7f\u7528\u201ccannon\u201d\u547d\u4ee4\u4ee5\u6253\u51fb\u76ee\u6807\u3002\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u89d2\u5ea6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8303\u56f4\u3002\u627e\u5230\u6b63\u786e\u7684\u7ec4\u5408\u3002" + (1 == W ? '<br><br><img src="pond/docs/cannon.png" height=41 width=213>' : 2 == W ? "<pre>cannon(0, 70);</pre>" : "") : 3 == W || 4 == W ? "\u6b64\u76ee\u6807\u9700\u8981\u6253\u5f88\u957f\u65f6\u95f4\u3002\u4f7f\u7528\u201cwhile (true)\u201d\u5faa\u73af\u4ee5\u4fbf\u65e0\u9650\u6253\u51fb\u3002" +
            (3 == W ? '<br><br><img src="pond/docs/whiletrue.png" height=90 width=164>' : 4 == W ? "<pre>while (true) {\n  ...\n}</pre>" : "") : 5 == W || 6 == W ? "\u6b64\u5bf9\u624b\u6765\u56de\u79fb\u52a8\uff0c\u4f7f\u5176\u5f88\u96be\u88ab\u653b\u51fb\u3002\u201cscan\u201d\u8868\u8fbe\u5f0f\u8fd4\u56de\u7279\u5b9a\u4f4d\u7f6e\u5177\u4f53\u8303\u56f4\u5185\u7684\u5bf9\u624b\u3002" + (5 == W ? '<br><br><img src="pond/docs/scan.png" height=36 width=134><br><br>' : 6 == W ? "<pre>scan(0)</pre>" : "") + "\u8fd9\u4e2a\u8fd4\u56de\u7684\u8303\u56f4\u6b63\u662f\u0026\u0023\u0033\u0039\u003b\u0063\u0061\u006e\u006e\u006f\u006e\u0026\u0023\u0033\u0039\u003b\u547d\u4ee4\u9700\u8981\u7684\u5c04\u51fb\u8303\u56f4\u3002" :
            7 == W || 8 == W ? "\u8fd9\u4e2a\u5bf9\u624b\u592a\u8fdc\u4e86\u6240\u4ee5\u4e0d\u80fd\u4f7f\u7528\u5927\u70ae\uff08\u9650\u5236\u0037\u0030\u7c73\uff09\u3002\u000d\u000a" + (7 == W ? '<br><br><img src="pond/docs/swim.png" height=41 width=131>' : 8 == W ? "<pre>swim(0);</pre>" : "") : 9 == W ? "\u8fd9\u4e2a\u5bf9\u624b\u4e5f\u79bb\u4f60\u5f88\u8fdc\u5e76\u4f7f\u7528\u5927\u70ae\u3002\u56e0\u4e3a\u4f60\u592a\u5f31\u4e86\uff0c\u6240\u4ee5\u4e0d\u80fd\u548c\u5b83\u78b0\u649e\u3002\u5f53\u4f60\u7684\u6c34\u5e73\u4f4d\u7f6e\u5c0f\u4e8e\u0035\u0030\u65f6\uff0c\u6e38\u5411\u5bf9\u624b\uff0c\u7136\u540e\u201c\u0073\u0074\u006f\u0070\u0028\u0029\u201d\u5e76\u4f7f\u7528\u5927\u70ae\u3002\u000d\u000a" + (9 ==
                W ? '<br><br><img src="pond/docs/loc_x_50.png" height=37 width=191><br><br><img src="pond/docs/stop.png" height=30 width=63>' : 10 == W ? "<pre>loc_x() &lt; 50</pre><pre>stop();</pre>" : "") : 10 == W ? "\u8fd9\u4e2a\u5bf9\u624b\u4f1a\u5728\u88ab\u51fb\u4e2d\u65f6\u79bb\u5f00\uff0c\u5982\u679c\u5b83\u8d85\u51fa\u8303\u56f4\uff0c\u6e38\u5411\u5b83\u0028\u8303\u56f4\u0037\u0030\u7c73\u0029" : "") + "</div>" + bo() + "</div>"
};
var eo = null,
    fo = !1;

function go() {
    function a() {
        c.style.visibility = "visible";
        document.getElementById("dialogBorder").style.visibility = "hidden"
    }
    if (!fo) {
        var b = document.getElementById("docsButton"),
            c = document.getElementById("dialogDocs"),
            d = document.getElementById("frameDocs"),
            e = "pond/docs.html?lang=" + fn + "&mode=" + W;
        d.src != e && (d.src = e);
        fo = !0;
        X.Xc(b, !1, .2);
        X.Xc(c, !0, .8);
        setTimeout(a, 175)
    }
}

function ho() {
    function a() {
        document.getElementById("dialogBorder").style.visibility = "hidden"
    }
    if (fo) {
        var b = document.getElementById("docsButton"),
            c = document.getElementById("dialogDocs");
        fo = !1;
        X.Xc(c, !1, .8);
        X.Xc(b, !0, .2);
        setTimeout(a, 175);
        c.style.visibility = "hidden"
    }
}

function io(a) {
    if (!Y.lc(a)) {
        a = document.getElementById("runButton");
        var b = document.getElementById("resetButton");
        b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        b.style.display = "inline";
        jo()
    }
}

function ko(a) {
    Y.lc(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", Z.reset(), Jn())
}

function jo() {
    "Interpreter" in window ? (Z.reset(), Jn(), Z.start(eo), Nn()) : setTimeout(jo, 250)
}

function lo() {
    var a = document.getElementById("help"),
        b = document.getElementById("helpButton");
    X.He(a, b, !0, !0, {
        width: "50%",
        left: "25%",
        top: "5em"
    }, X.ah);
    X.Yg()
};
var qn = "pond-tutor";
Y.Lg = function() {
    10 > W ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + fn + "&level=" + (W + 1) : Y.rf()
};
window.addEventListener("load", function() {
    document.body.innerHTML = co();
    Y.C();
    Hn();
    sn("runButton", io);
    sn("resetButton", ko);
    sn("docsButton", go);
    sn("closeDocs", ho);
    setTimeout(Y.Ym, 1);
    setTimeout(Y.Zm, 1);
    sn("helpButton", lo);
    2 > location.hash.length && !on(W) && setTimeout(lo, 1E3);
    var a = -1 != en.indexOf(fn),
        b = document.getElementById("blockly"),
        c = document.getElementById("editor"),
        d = document.getElementById("visualization");
    if (b) {
        var e = function() {
            b.style.top = Math.max(10, d.offsetTop - window.pageYOffset) + "px";
            b.style.left =
                a ? "10px" : "420px";
            b.style.width = window.innerWidth - 440 + "px"
        };
        window.addEventListener("scroll", function() {
            e();
            pd.Jr(window, "resize")
        });
        window.addEventListener("resize", e);
        e();
        var f = document.getElementById("toolbox");
        bi = yk("blockly", {
            media: "third-party/blockly/media/",
            rtl: !1,
            toolbox: f,
            trashcan: !0
        });
        Nk("scan,cannon,drive,swim,stop,speed,damage,health,loc_x,loc_y");
        Y.lj(7 == W ? '<xml>  <block type="pond_swim" x="70" y="70">    <value name="DEGREE">      <shadow type="pond_math_number">        <field name="NUM">0</field>      </shadow>    </value>  </block></xml>' :
            '<xml>  <block type="pond_cannon" x="70" y="70">    <value name="DEGREE">      <shadow type="pond_math_number">        <field name="NUM">0</field>      </shadow>    </value>    <value name="RANGE">      <shadow type="pond_math_number">        <field name="NUM">70</field>      </shadow>    </value>  </block></xml>')
    }
    if (c) {
        f = document.getElementById("containerCode");
        f.parentNode.removeChild(f);
        f = 8 == W ? "swim(0);" : "cannon(0, 70);";
        Y.Vb = window.ace.edit("editor");
        Y.Vb.setTheme("ace/theme/chrome");
        Y.Vb.setShowPrintMargin(!1);
        var k = Y.Vb.getSession();
        k.setMode("ace/mode/javascript");
        k.setTabSize(2);
        k.setUseSoftTabs(!0);
        Y.lj(f + "\n");
        e = function() {
            c.style.top = Math.max(10, d.offsetTop - window.pageYOffset) + "px";
            c.style.left = a ? "10px" : "420px";
            c.style.width = window.innerWidth - 440 + "px"
        };
        window.addEventListener("scroll", e);
        window.addEventListener("resize", e)
    }
    e();
    for (k = 0; f = mo[k]; k++) {
        var l = f.code ? document.getElementById(f.code).textContent : b ? function() {
                return Jk()
            } : function() {
                return Y.Vb.getValue()
            },
            p = rn(f.name);
        Z.pm(p, l, f.start, f.na)
    }
    Z.reset();
    Jn()
});
var mo = [void 0, [{
            start: new w(50, 30),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(50, 70),
            na: 99,
            name: "Pond_targetName",
            code: "playerTarget"
        }],
        [{
            start: new w(70, 50),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(20, 50),
            na: 99,
            name: "Pond_targetName",
            code: "playerTarget"
        }],
        [{
            start: new w(20, 20),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(62.4264, 62.4264),
            na: 0,
            name: "Pond_targetName",
            code: "playerTarget"
        }],
        [{
            start: new w(50, 80),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(50, 20),
            na: 0,
            name: "Pond_targetName",
            code: "playerTarget"
        }],
        [{
            start: new w(90, 50),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(50, 50),
            na: 0,
            name: "Pond_pendulumName",
            code: "playerPendulum"
        }],
        [{
            start: new w(10, 50),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(50, 50),
            na: 0,
            name: "Pond_pendulumName",
            code: "playerPendulum"
        }],
        [{
            start: new w(20, 80),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(80, 20),
            na: 99,
            name: "Pond_targetName",
            code: "playerTarget"
        }],
        [{
            start: new w(50, 90),
            na: 0,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(50, 10),
            na: 99,
            name: "Pond_pendulumName",
            code: "playerPendulum"
        }],
        [{
            start: new w(5, 50),
            na: 99,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(95, 50),
            na: 0,
            name: "Pond_targetName",
            code: "playerTarget"
        }],
        [{
            start: new w(10, 10),
            na: 50,
            name: "Pond_playerName",
            code: null
        }, {
            start: new w(40, 40),
            na: 0,
            name: "Pond_scaredName",
            code: "playerScared"
        }]
    ][W],
    eo = function(a) {
        clearTimeout(Fn);
        0 != a && 1 == a && "function" == typeof Z.be[0].h && ((5 == W || 6 == W) && 2E5 < Z.bh ? (a = document.getElementById("helpUseScan"), X.He(a, null, !1, !0, {
            width: "30%",
            left: "35%",
            top: "12em"
        }, X.ah), X.Yg()) : (Y.mn(), X.xm()))
    };