var w = window,
    d = document,
    RequestNotification = function(n, t, i, o) {
        this._nType = n, this._nc_id = t, this._nc_num = i, this._nCmin = 42, this._nw_uri_prefix = o, this.api_base = "https://app.notifyfox.com", this._nsrc = "----", this._nCkN = "notifier-data", this._n_a_c = "app-data", this._na_c_t = "notifier-data-t", this._nRefurl = "", this._nlSw = "mainsw.js", this._nlMj = "manifest.json", this._nsId = "", this._nSrPv = "/subscriber/register-deep", this._nSrPvCus = "/subscriber/savecus", this._nCapUrl = "/subscriber/apcdata", this._nGtUrl = "/subscriber/ngtype", this.window_obj = "", this.window_installer = "_ninstallworkerlive.php", this.window_ins = "_nreqlive.html", this.window_name = "_blank", this._nOptH = 500, this._nOptW = 500, this.window_address_bar = 0, this.window_height = 120, this.window_widht = 120, this.window_menu_bar = 0, this.window_resizable = 0, this.window_status_bar = 0, this.window_title_bar = 0, this.window_top_position = 10, this.window_left_position = w.innerWidth / 2 - this.window_widht / 2, this._nClT = 432e5, this._nOptWuRi = o + "/notification/registerlive", this.pushId = "web.com.notifyfox", this._nsurl = "https://notifyfox.com", this._naws = "https://notifyfox.s3.amazonaws.com", this._nItype = 0, this._nI = function() {
            var n = this;
            var r = n._nBcNb(n._nc_id);
            if (!r) {
                n._nCc(function(n) {
                    var t = document.createEvent("Event");
                    n ? t.initEvent("browser_comp", !0, !1) : t.initEvent("browser_incomp", !0, !1), window.dispatchEvent(t)
                })
            }
        }, this._nCbot = function(n) {
            var t = this;
            var b = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
            return b ? !1 : !0
        }, this._nCc = function(n) {
            var t = this;
            var b = t._nCbot();
            var i = (1 == t._nCs()) ? 1 == t._niCI() ? !1 : !0 : !1;
            if(1 == i && 1 == b){
                n(i);    
            }
        }, this._nGbB = function(n) {
            var t, i, e = navigator.userAgent,
                o = navigator.appName,
                r = "" + parseFloat(navigator.appVersion),
                s = parseInt(navigator.appVersion, 10),
                a = "";
            return -1 != (t = e.indexOf("OPR/")) ? (o = "Opera", r = e.substring(t + 4)) : -1 != (t = e.indexOf("Opera")) ? (o = "Opera", r = e.substring(t + 6), -1 != (t = e.indexOf("Version")) && (r = e.substring(t + 8))) : -1 != (t = e.indexOf("MSIE")) ? (o = "Microsoft Internet Explorer", r = e.substring(t + 5)) : -1 != (t = e.indexOf("Chrome")) ? (o = "Chrome", r = e.substring(t + 7), /(.*?)wv\)/.test(e) && (a = "22")) : -1 != (t = e.indexOf("Safari")) ? (o = "Safari", r = e.substring(t + 7), -1 != (t = e.indexOf("Version")) && (r = e.substring(t + 8))) : -1 != (t = e.indexOf("Firefox")) ? (o = "Firefox", r = e.substring(t + 8)) : (s = e.lastIndexOf(" ") + 1) < (t = e.lastIndexOf("/")) && (o = e.substring(s, t), r = e.substring(t + 1), o.toLowerCase() == o.toUpperCase() && (o = navigator.appName)), -1 != (i = r.indexOf(";")) && (r = r.substring(0, i)), -1 != (i = r.indexOf(" ")) && (r = r.substring(0, i)), s = parseInt("" + r, 10), isNaN(s) && (parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10)), "22" == a && (s = a), o + "-" + s
        }, this._nCs = function() {
            var n = this;
            return n._niC() ? n._nBv() > 42 ? !0 : !1 : n._niF() ? n._nBv() > 43 ? !0 : !1 : n._niS() && n._niSS() > 8 ? !0 : !1
        }, this._niC = function() {
            var ua = navigator.userAgent;
            return (/Chrome/i.test(ua)) ? !0 : !1
        }, this._niF = function() {
            var n = "undefined" != typeof InstallTrigger;
            return n ? !0 : !1
        }, this._nBv = function() {
            var n, t = navigator.userAgent,
                i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(i[1]) ? (n = /\brv[ :]+(\d+)/g.exec(t) || [], "IE " + (n[1] || "")) : "Chrome" === i[1] && (n = t.match(/\bOPR\/(\d+)/), null != n) ? "Opera " + n[1] : (i = i[2] ? [i[2]] : [navigator.appVersion, "-?"], null != (n = t.match(/version\/([.\d]+)/i)) && i.splice(1, 1, n[1]), i.join(" "))
        }, this._niS = function() {
            var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            return n ? !0 : !1
        }, this._niSS = function() {
            var n = this,
                t = n._nBv();
            return t.split(" ").pop().split(".")[0]
        }, this._niCI = function() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        }, this._nScK = function(n, t) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
            var e = "expires=" + i.toUTCString();
            document.cookie = this._nGcKN() + "=" + n + "; " + e + ";path=/";
        }, this._nRcK = function() {
            var a = this._nRurl();
            var i = new Date;
            i.setTime(i.getTime() + 24 * 10 * 60 * 60 * 1e3);
            b = {};
            b["ru"] = a;
            var e = "expires=" + i.toUTCString();
            document.cookie = '_nRurl' + "=" + JSON.stringify(b) + "; " + e + ";path=/";
        }, this._nIProc = function() {
            var n = this;
            if (n._nHcT()) {
                var t = JSON.parse(n._nGhCt()),
                    i = new Date,
                    e = i.toUTCString(),
                    o = Math.floor((new Date(e) - new Date(t["s-t"])) / 1e3 / 60);
                if (o < n._nClT) return !1
            }
            var s = JSON.parse(r._nGcK());
            n._nsId = s.id, 1 == n._nCaSub() ? n._nAsub() : n._nCSubEntry()
        }, this._nHcT = function() {
            var n = this._nGhCt();
            return "" != n
        }, this._nGhCt = function() {
            for (var n = this._na_c_t + "=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var e = t[i];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
            }
            return ""
        }, this._nSCti = function(n) {
            var t = new Date,
                i = {};
            i["s-t"] = t.toUTCString(), t.setTime(t.getTime() + 24 * n * 60 * 60 * 1e3);
            var e = "expires=" + t.toUTCString();
            document.cookie = this._na_c_t + "=" + JSON.stringify(i) + "; " + e + ";path=/";
        }, this._nCSubEntry = function() {
            var n = this,
                t = new XMLHttpRequest,
                i = n.api_base + n._nCsUrl(),
                e = "sub_id=" + n._nsId;
            var s = JSON.parse(r._nGCook('_nRurl'));
            if (null != s && n._nRurl() != s.ru)
                n._nSrU();
            t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                4 == t.readyState && 200 == t.status && (0 == JSON.parse(t.responseText).status ? 1 == n._nCaSub() ? n._nAsub() : n._nStartProcess() : n._nSaCook())
            }, t.send(e)
        }, this._nSrU = function() {
            var n = this,
                t = new XMLHttpRequest,
                i = n.api_base + '/subscriber/nrurl',
                u = n._nRurl(),
                e = "sub_id=" + n._nsId + "&r_u=" + u;
            t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                n._nRcK();
            }, t.send(e)
        }, this._nSaCook = function() {
            var n = this;
            n.c_data = {}, n.c_data._nsId = n._nsId, n.c_data._nStatus = !0, n._nsetCookieApp(JSON.stringify(n.c_data), 365)
        }, this._nCsUrl = function() {
            return this._nCapUrl
        }, this._nAsub = function() {
            var n = this;
             n._nSpath(), n._nFevent(),n._nCheckkey();
        }, this._nGtyC = function(c) {
            var n = this;
            var _nt = n._optTy(n._nc_id);
            if (undefined == _nt) {
                var t = new XMLHttpRequest,
                    i = n.api_base + n._nGetType(),
                    e = "auth=" + n._nc_id;
                t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                    if (4 == t.readyState && 200 == t.status) {
                        c(JSON.parse(t.responseText).st);
                    }
                }, t.send(e)
            } else {
                c(_nt)
            }
        }, this._nsetDel = function(n, t) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
            var e = "expires=" + i.toUTCString();
            document.cookie = "n-del=" + n + "; " + e + ";path=/";
            return true;
        }, this._nChDel= function() {
            for (var n = "n-del=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var e = t[i];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
            }
            return null
        }, this._nChScope= function() {
            for (var n = "n-scope=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var e = t[i];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
            }
            return null
        }, this._nsetScope = function(n, t) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
            var e = "expires=" + i.toUTCString();
            document.cookie = "n-scope=" + n + "; " + e + ";path=/";
            return true;
        }, this._nCheckkey = function() {
            var n = this;
            var a = JSON.parse(n._nAGcK());
            var dd = new Date().getDate();

            if (undefined == a._nLch) {
                var i = 6;
            }else{
                var i = Math.abs(dd - parseInt(a._nLch));
            }
            var cSco = n._nChScope(); 
            var isSaf = n._niS();
            if(null == cSco && false == isSaf){
                    n._nGtyC(function(c) {
                        if(1 == c){
                           _nChnD = {}, _nChnD.date = dd;
                           n._nDc(n._n_a_c),n._nDc(n._nCkN); 
                           n._nsetScope(JSON.stringify(_nChnD), 365); 
                            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                              registrations.forEach(function(v) { 
                                        var path  = v.active.scriptURL;
                                        var locat = document.location.protocol + "//" + document.location.hostname;
                                        var scope = v.scope;
                                        if (path.indexOf("mainsw") != -1) {
                                                var sc = scope.replace(/\/$/, "");
                                                var loc = locat.replace(/\/$/, "");
                                                if(sc != loc){
                                                      v.unregister().then(function(c){ console.log("removed"); }); 
                                                }
                                        }
                              });
                            }); 
                        }
                    });
                    // var cD = JSON.parse(n._nChDel());       
                    // if (null == cD) {       
                    //       n._nGtyC(function(c) {
                    //         if(1 == c){
                    //             console.log('deleting');        
                    //             _nChnD = {}, _nChnD.date = dd;      
                    //             n._nDc(n._n_a_c), n._nDc(n._nCkN);      
                    //             n._nsetDel(JSON.stringify(_nChnD), 365);
                    //             return false;        
                    //          }
                    //        });     
                    // }
            }
            if(i > 5){
               n._nGtyC(function(c) {
                  n._nItype = c;
                  if(1 == c){
                        if(false == isSaf){
                                  if (('PushManager' in window)) {  
                                        if('default' == Notification.permission || "prompt" == Notification.permission){
                                            n._nChReq(1,0,function(c){
                                                // n._nD();
                                            });
                                        }else if ('denied' == Notification.permission){
                                            n._nChReq(2,0,function(c){});
                                        }else if('granted' == Notification.permission){
                                                    navigator.serviceWorker.ready.then(function(reg) {
                                                        reg.pushManager.getSubscription().then(function(subscription) { 
                                                                b = n.getBrowser();
                                                                if ("firefox" == b) {
                                                                    var o = encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey("p256dh")))));
                                                                } else if ("chrome" == b) {
                                                                    endpointParts = subscription.endpoint.split("/");
                                                                    var o = endpointParts[endpointParts.length - 1];
                                                                }
                                                                n._nChReq(3,o,function(c){
                                                                        var response = JSON.parse(c);
                                                                        var dd = new Date().getDate();
                                                                        var a = JSON.parse(n._nAGcK());
                                                                        if(0 == response.mapStatus){
                                                                            _nCnD = {}, _nCnD.id = response.subscriberId;
                                                                            _nChK = {}, _nChK._nsId = response.subscriberId, _nChK._nStatus = true, _nChK._nLch = dd;
                                                                            n._nScK(JSON.stringify(_nCnD), 365);
                                                                        }else if(1 == response.mapStatus){
                                                                            _nChK = {}, _nChK._nsId = a._nsId, _nChK._nStatus = a._nStatus, _nChK._nLch = dd;
                                                                        }else if(2 == response.mapStatus){
                                                                            _nCnD = {}, _nCnD.id = a._nsId;
                                                                            _nChK = {}, _nChK._nsId = a._nsId, _nChK._nStatus = true, _nChK._nLch = dd;
                                                                            n._nScK(JSON.stringify(_nCnD), 365);
                                                                        }else if(3 == response.mapStatus){
                                                                            _nCnD = {}, _nCnD.id = a._nsId;
                                                                            _nChK = {}, _nChK._nsId = a._nsId, _nChK._nStatus = false, _nChK._nLch = dd;
                                                                            n._nScK(JSON.stringify(_nCnD), 365);
                                                                        }else if(4 == response.mapStatus){
                                                                            _nChK = {}, _nChK._nsId = a._nsId, _nChK._nStatus = a._nStatus, _nChK._nLch = dd;
                                                                        }
                                                                        n._nsetCookieApp(JSON.stringify(_nChK), 365); 
                                                                });
                                                        })
                                                    });
                                        }    
                                  }
                          }
                      }
              });
            }
        }, this._nChReq = function(d,o,c) {
                var n = this;
                var t = new XMLHttpRequest,
                    i = n.api_base + '/checkkey',
                    bt = n.getBrowser(),
                    ua = n.getUserAgent(),
                    e = "auth=" + n._nc_id + "&u_a=" + ua + "&browser_type=" + bt + "&key=" + o +"&cd="+n._nsId +"&st="+d;
                  t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                        if (4 == t.readyState && 200 == t.status) {
                            c(t.responseText)
                        }
                }, t.send(e)
        }, this._nDc = function(n) {
            console.log('delete cookie');
            document.cookie = n + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }, this._nSpath = function() {
            var n = this;
            n._nRefurl = window.location.href
        }, this._nRurl = function() {
            return window.location.href
        }, this._nStartProcess = function() {
            var n = this;
            n.c_data = {}, n.c_data._nsId = n._nsId, n.c_data._nStatus = !1, n._nsetCookieApp(JSON.stringify(n.c_data), 365), n._nGty()
        }, this._nCaSub = function() {
            var n = this;
            return null == n._nAGcK() ? !1 : 1 == JSON.parse(n._nAGcK())._nStatus ? !0 : !1
        }, this._nGty = function() {
            var n = this;
            var _nt = n._optTy(n._nc_id);
            if (undefined == _nt) {
                var t = new XMLHttpRequest,
                    i = n.api_base + n._nGetType(),
                    e = "auth=" + n._nc_id;
                t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                    if (4 == t.readyState && 200 == t.status) {
                        var i = JSON.parse(t.responseText).st;
                        n._nItype = i;
                        2 == i ? n._nZ() : 1 == i ? n._nD() : n._nO(i)
                    }
                }, t.send(e)
            } else {
                var i = _nt;
                n._nItype = i;
                2 == i ? n._nZ() : 1 == i ? n._nD() : n._nO(i)
            }
        }, this._nGetType = function() {
            return this._nGtUrl
        }, this._nGcKN = function() {
            return this._nCkN
        }, this._nAGcKN = function() {
            return this._n_a_c
        }, this._nAGcK = function() {
            for (var n = this._nAGcKN() + "=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var e = t[i];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
            }
            return null
        }, this._nGcK = function() {
            for (var n = this._nGcKN() + "=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var e = t[i];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
            }
            return null
        }, this._nGCook = function(c) {
            for (var n = c + "=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var e = t[i];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
            }
            return null
        }, this._nLsW = function() {
            return this._nlSw
        }, this._nLmJ = function() {
            return this._nlMj
        }, this._nSwSc = function() {
            return {
                scope: "/"
            }
        }, this._nO = function(i) {
            var n = this;
             if (n._niS()){
                if ("safari" in window && "pushNotification" in window.safari) {
                    var i = window.safari.pushNotification.permission(n.pushId);
                    "default" === i.permission ? window.safari.pushNotification.requestPermission(n.api_base, n.pushId, {
                        cl_id: n._nc_id + "|" + n._nc_num
                    }, function(m) {
                        "denied" === m.permission ? n._nLog("denoed") : "granted" === m.permission ? n._nSavS(n) : n._nLog("rejected")
                    }) : "denied" === i.permission ? (n._nLog("denied")) : "granted" === i.permission && (n._nSavS(i))
                } else n._nLog("Error Registring - reported issue:")
            } else {
                if (0 == i) {
                    n._nGcOpt0(function(n) {
                        var t = d.createElement("div");
                        t.id = "_notiAllow", t.innerHTML = n, d.body.appendChild(t)
                    })
                } else if (3 == i) {
                    n._nGcOpt3(function(n) {
                        var t = d.createElement("div");
                        t.id = "_notiAllow", t.innerHTML = n, d.body.appendChild(t)
                    })
                } else if (4 == i) {
                    n._nGcOpt4(function(n) {
                        var t = d.createElement("div");
                        t.id = "_notiAllow", t.innerHTML = n, d.body.appendChild(t)
                    })
                } else if (5 == i) {
                    n._nGcOpt5(function(n) {
                        var t = d.createElement("div");
                        t.id = "_notiAllow", t.innerHTML = n, d.body.appendChild(t)
                    })
                } else if (6 == i) {
                    n._nGcOpt6(function(n) {
                        var t = d.createElement("div");
                        t.id = "_notiAllow", t.innerHTML = n, d.body.appendChild(t)
                    })
                }
            }
        }, this._nZ = function() {
            var a = this;
            if (a._niS()) {
                if ("safari" in window && "pushNotification" in window.safari) {
                    var r = window.safari.pushNotification.permission(a.pushId);
                    "default" === r.permission ? window.safari.pushNotification.requestPermission(a.api_base, a.pushId, {
                        cl_id: a._nc_id + "|" + a._nc_num
                    }, function(t) {
                        "denied" === t.permission ? a._nLog("denied") : "granted" === t.permission ? a._nSavS(t) : a._nLog("rejected")
                    }) : "denied" === r.permission ? a._nLog("denied") : "granted" === r.permission && a._nSavS(r)
                } else a._nLog("Error Registring - reported issue:");
            } else {
                ! function(n, t, i) {
                    s = t.createElement("iframe"), s.type = "text/javascript", s.async = !0, s.src = i, h = t.getElementsByTagName("script")[0], h.parentNode.insertBefore(s, h)
                }(window, document, this.getInstallUri())
            }
        }, this._nD = function() {
            var n = this;
            n._nRefurl = window.location.href;
            var t = n._nLmJ(),
                i = (n._nLsW(), document.getElementsByTagName("head")[0]),
                o = document.createElement("link");
            if (o.rel = "manifest", o.href = t, i.appendChild(o), e = document.createElement("script"), n._niS())
                if ("safari" in window && "pushNotification" in window.safari) {
                    var r = window.safari.pushNotification.permission(n.pushId);
                    "default" === r.permission ? window.safari.pushNotification.requestPermission(n.api_base, n.pushId, {
                        cl_id: n._nc_id + "|" + n._nc_num
                    }, function(t) {
                        "denied" === t.permission ? n._nLog("denoed") : "granted" === t.permission ? n._nSavS(t) : n._nLog("rejected")
                    }) : "denied" === r.permission ? n._nLog("denied") : "granted" === r.permission && n._nSavS(r)
                } else n._nLog("Error Registring - reported issue:");
            else "serviceWorker" in navigator ? navigator.serviceWorker.register(document.location.protocol + "//" + document.location.hostname + "/" + n._nLsW()).then(function(t) {
                t.pushManager.permissionState({
                    userVisibleOnly: !0
                }).then(function(t) {
                    "granted" == t ? n._nRsWf() : "denied" == t || "prompt" == t && n._nRsWf()
                })
            }, function(t) {
                n._nLog(t)
            }) : n._nLog("ServiceWorker not found in Navigator")
        }, this._nRsWfOpt = function(n) {
            var t = this;
            if (t._niS()){
                if ("safari" in window && "pushNotification" in window.safari) {
                    var i = window.safari.pushNotification.permission(t.pushId);
                    "default" === i.permission ? window.safari.pushNotification.requestPermission(t.api_base, t.pushId, {
                        cl_id: t._nc_id + "|" + t._nc_num
                    }, function(n) {
                        "denied" === n.permission ? t._nLog("denoed") : "granted" === n.permission ? t._nSavS(n) : t._nLog("rejected"), setTimeout(function() {
                            window.close()
                        }, 3e3)
                    }) : "denied" === i.permission ? (t._nLog("denied"), setTimeout(function() {
                        window.close()
                    }, 2e3)) : "granted" === i.permission && (t._nSavS(i), setTimeout(function() {
                        window.close()
                    }, 2e3))
                } else t._nLog("Error Registring - reported issue:"), setTimeout(function() {
                    window.close()
                }, 2e3);
            } else {
                var e = t._nLsW();
                "serviceWorker" in navigator ? navigator.serviceWorker.register("/" + e).then(function(n) {
                    n.pushManager.permissionState({
                        userVisibleOnly: !0
                    }).then(function(n) {
                        "denied" != n && t._nLsuB()
                    })
                }, function(n) {
                    t._nLog("Error Registring - reported issue: " + n), setTimeout(function() {
                        window.close()
                    }, 2e3)
                }) : (t._nLog("ServiceWorker not found in Navigator"), setTimeout(function() {
                    window.close()
                }, 2e3))
            }
        }, this._nRsWf = function(n) {
            var t = this;
            navigator.serviceWorker.ready.then(function(n) {
                n.pushManager.getSubscription().then(function(n) {
                    n ? t._nSavS(n) : navigator.serviceWorker.ready.then(function(n) {
                        n.pushManager.subscribe({
                            userVisibleOnly: !0
                        }).then(function(n) {
                            t._nSavS(n)
                        })
                    })
                }, function(n) {
                    t._nLog(n)
                })
            }, function(n) {
                t._nLog(n)
            })
        }, this.__nIoptCus = function(n) {
            var t = this;
            if (t._niS())
                if ("safari" in window && "pushNotification" in window.safari) {
                    var i = window.safari.pushNotification.permission(t.pushId);
                    "default" === i.permission ? window.safari.pushNotification.requestPermission(t.api_base, t.pushId, {
                        cl_id: t._nc_id + "|" + t._nc_num
                    }, function(n) {
                        "denied" === n.permission ? t._nLog("denoed") : "granted" === n.permission ? t._nSavS(n) : t._nLog("rejected"), setTimeout(function() {
                            window.close()
                        }, 3e3)
                    }) : "denied" === i.permission ? (t._nLog("denied"), setTimeout(function() {
                        window.close()
                    }, 2e3)) : "granted" === i.permission && (t._nSavS(i), setTimeout(function() {
                        window.close()
                    }, 2e3))
                } else t._nLog("Error Registring - reported issue:"), setTimeout(function() {
                    window.close()
                }, 2e3);
            else {
                var e = t._nLsW();
                "serviceWorker" in navigator ? navigator.serviceWorker.register("/" + e).then(function(n) {
                    n.pushManager.permissionState({
                        userVisibleOnly: !0
                    }).then(function(n) {
                        "denied" != n && t._nLsuB()
                    })
                }, function(n) {
                    t._nLog("Error Registring - reported issue: " + n), setTimeout(function() {
                        window.close()
                    }, 2e3)
                }) : (t._nLog("ServiceWorker not found in Navigator"), setTimeout(function() {
                    window.close()
                }, 2e3))
            }
        }, this.__nIopt = function(m) {
            var n = this;
            var _nt = n._optTy(n._nc_id);
            if (undefined == _nt) {
                var t = new XMLHttpRequest,
                    i = n.api_base + n._nGetType(),
                    e = "auth=" + n._nc_id;
                t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                    if (4 == t.readyState && 200 == t.status) {
                        var i = JSON.parse(t.responseText).st;
                        n._nItype = i, 6 == i ? (n._nsrc = document.referrer, 0 == n._nCaSub() ? n.__nIoptCus() : n._nCusCl()) : n.__nIoptCus(m)
                    }
                }, t.send(e)
            } else {
                n._nItype = _nt, 6 == _nt ? (n._nsrc = document.referrer, 0 == n._nCaSub() ? n.__nIoptCus() : n._nCusCl()) : n.__nIoptCus(m)
            }
        }, this._nLsuB = function() {
            var n = this;
            navigator.serviceWorker.ready.then(function(t) {
                t.pushManager.getSubscription().then(function(t) {
                    t ? n._nOcNs(t) : navigator.serviceWorker.ready.then(function(t) {
                        t.pushManager.subscribe({
                            userVisibleOnly: !0
                        }).then(function(t) {
                            n._nSavS(t), setTimeout(function() {
                                window.close()
                            }, 5e3)
                        }, function(t) {
                            n._nLog(t)
                        })["catch"](function(t) {
                            n._nLog(t)
                        })
                    })
                }, function(t) {
                    n._nLog(t)
                })["catch"](function(t) {
                    n._nLog(t)
                })
            })
        }, this._nCusCl = function(n) {
            window.close();
        }, this._nOcNs = function(n) {
            var t = this;
            t._nSavS(n);
            setTimeout(function() {
                window.close()
            }, 5e3);
        }, this._nSavS = function(n) {
            var t = this,
                i = t.getBrowser();
            if ("firefox" == i) {
                var e = n.endpoint,
                    o = encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint8Array(n.getKey("p256dh")))));
            } else if ("chrome" == i) {
                endpointParts = n.endpoint.split("/");
                var o = endpointParts[endpointParts.length - 1],
                    e = n.endpoint
            } else if ("safari" == i) {
                var o = n.deviceToken,
                    e = "safari";
            }
            var r = t._nBcA(t._nc_id);
            if (6 == t._nItype || true == r) {
                var r = new XMLHttpRequest,
                    s = t.api_base + t._nSrPCus(),
                    bt = t.getBrowser(),
                    ua = t.getUserAgent(),
                    u = t._nRurl(),
                    f = t._nsrc,
                    a = (t._nBv(), "key=" + o + "&browser_ver=" + t._nBv() + "&auth=" + t._nc_id + "&endpoint=" + e + "&browser_type=" + bt + "&u_a=" + ua + "&r_s=" + f + "&r_u=" + u + "&sub_data=" + JSON.stringify(n.toJSON()));
                r.open("POST", s, !0), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.onreadystatechange = function() {
                    4 == r.readyState && 200 == r.status && (t.c_data = {}, t.c_data.id = JSON.parse(r.responseText).uid, t._nScK(JSON.stringify(t.c_data), 365), t._nsId = JSON.parse(r.responseText).uid, t._nSaCook());
                    t._nFevent();
                }, r.send(a);
            } else {
                var r = new XMLHttpRequest,
                    s = t.api_base + t._nSrP(),
                    bt = t.getBrowser(),
                    ua = t.getUserAgent(),
                    a = (t._nBv(), "key=" + o + "&sub_id=" + t._nsId + "&auth=" + t._nc_id + "&endpoint=" + e + "&browser_type=" + bt + "&u_a=" + ua + "&sub_data=" + JSON.stringify(n.toJSON()));
                r.open("POST", s, !0), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.onreadystatechange = function() {
                    if (4 == r.readyState && 200 == r.status) {
                        if ("safari" != i && 1 == t._nItype) {
                            t.c_data = {}, t.c_data.id = JSON.parse(r.responseText).uid,
                            t._nScK(JSON.stringify(t.c_data), 365),
                            t._nsId = JSON.parse(r.responseText).uid, t._nSaCook(), t._nFevent();
                        } else if ("safari" != i) {
                            w.opener.postMessage("fevent", "*")
                        }
                    }
                }, r.send(a);
            }
        }, this._nsetCookieApp = function(n, t) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
            var e = "expires=" + i.toUTCString();
            document.cookie = this._nAGcKN() + "=" + n + "; " + e + ";path=/";
        }, this._nFevent = function() {
            var n = this;
            ! function(n, t, i, e) {
                s = t.createElement("script"), s.type = "text/javascript", s.async = !0, s.src = "//va.notifyfox.com/va.min.js", h = t.getElementsByTagName("script")[0], h.parentNode.insertBefore(s, h), s.onload = function() {
                    var n = "notifyfox",
                        t = new va;
                    t.init(), t._pruid = i._nc_id + "|" + i._nc_num, t._vauid = i._nsId, t._vaprid = n, t.vapv("pageview", "pageview", 1, {
                        u: i._nRefurl
                    })
                }
            }(window, document, n)
        }, this._nSrP = function() {
            return this._nSrPv
        }, this._nSrPCus = function() {
            return this._nSrPvCus
        }, this._nRud = function() {
            var n = this,
                t = new XMLHttpRequest,
                i = n.api_base + "/subscriber/add",
                e = n.getBrowser(),
                u = n._nRurl(),
                o = n._nBv(),
                r = n._nc_id,
                s = n._nc_num,
                a = n.getUserAgent(),
                f = n._nsrc,
                d = "browser_type=" + e + "&browser_ver=" + o + "&c_id=" + r + "&c_num=" + s + "&u_a=" + a + "&r_u=" + u + "&r_s=" + f;
            n._nRcK();
            t.open("POST", i, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                4 == t.readyState && 200 == t.status && (n.c_data = {}, n.c_data.id = JSON.parse(t.responseText).uid, n._nScK(JSON.stringify(n.c_data), 365), n._nIProc())
            }, t.send(d)
        }, this.getInstallUri = function() {
            return this._nw_uri_prefix + "/" + this.window_ins
        }, this.getUserAgent = function() {
            return navigator.userAgent
        }, this.getBrowser = function() {
            return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "opera" : -1 != navigator.userAgent.indexOf("Chrome") ? "chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "firefox" : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? "ie" : "unknown"
        }, this._nCsub = function() {
            var n = this;
            var r = n._nBcA(n._nc_id);
            if (r) {
                if (false == n._nCaSub()) {
                    n._nGty();
                } else if (JSON.parse(n._nAGcK())._nStatus) {
                    n._nCheckkey(),n._nFevent();
                }
            } else {
                t = n._nGcK();
                null == t ? n._nRud() : n._nIProc()
            }
        }, this._nBcA = function(c) {
            var n = this;
            var b_arr = ["MTYsZDJsMGRIbG1aV1ZsWjA5aU5UZ3lOR05pWlRRNVpqQTFZamd5T0RkbU1ERTVZelpq", "MTYsY21GdWEzZGhkR00yZUVaYU5UYzBaV1ExWWpJNVpqQTFZamcxWm1ZNE5URTRZVGcx","MTYsYm05MGFXWjVabTkxUVVsa05UZGxNakV3Wm1VNVpqQTFZamd3WkRjeE5qSmhOR0V5"];
            return -1 != b_arr.indexOf(c) ? !0 : !1;
        }, this._nBcNb = function(c) {
            var n = this;
            var b_arr = [];
            return -1 != b_arr.indexOf(c) ? !0 : !1;
        }, this._optTy = function(c) {
            var _nRot = [];
            _nRot['MTYsY21GdWEzZGhkR00yZUVaYU5UYzBaV1ExWWpJNVpqQTFZamcxWm1ZNE5URTRZVGcx'] = 1;
            _nRot['MTYsZDJsMGRIbG1aV1ZsWjA5aU5UZ3lOR05pWlRRNVpqQTFZamd5T0RkbU1ERTVZelpq'] = 1;
            _nRot['MTYsYm05MGFXWjVabTkxUVVsa05UZGxNakV3Wm1VNVpqQTFZamd3WkRjeE5qSmhOR0V5'] = 1;
            return _nRot[c];
        }, this._nLog = function(n) {
            console.log(n)
        }, w.addEventListener("fevent", function(n) {}, !1), w.addEventListener("browser_comp", function(n) {
            r._nCsub()
        }, !1), w.addEventListener("browser_incomp", function(n) {
            r._nLog("Browser Not Supported")
        }, !1), this._nInitaiue = function() {
            var n = this,
                t = n._nLmJ(),
                i = document.getElementsByTagName("head")[0],
                e = document.createElement("link");
            e.rel = "manifest", e.href = t, i.appendChild(e), navigator.permissions.query({
                name: "notifications"
            }).then(function(t) {
                    Notification.requestPermission();
                    if( "prompt" == t.state){
                        t.onchange = function() {
                            if(t.state == 'granted'){
                                n.__nfmessage('_nfshow');
                            }
                        }    
                    }else{
                        if(t.state == 'granted'){
                            if(Notification.permission == 'granted'){
                                n.__nfmessage('_nfshow');    
                            }else{

                                var _nChPer =  setInterval(function(){ 
                                    if(Notification.permission == 'granted'){
                                        n.__nfmessage('_nfshow');
                                        clearInterval(_nChPer);
                                    }
                                }, 300);
                            }
                        }
                    }   
            })
        }, this.__nfmessage = function(n) {
            w.parent.postMessage(n, "*")
        }, this._nOptInstaller = function(n) {
            var t = this,
                i = t._nLmJ(),
                e = t._nLsW(),
                o = document.getElementsByTagName("head")[0],
                r = document.createElement("link");
            r.rel = "manifest", r.href = i, o.appendChild(r), "serviceWorker" in navigator ? navigator.serviceWorker.register(e).then("showNotification" in ServiceWorkerRegistration.prototype ? "denied" === Notification.permission ? t._nLog("The user has blocked notifications.") : "PushManager" in window ? navigator.serviceWorker.ready.then(function(n) {
                n.pushManager.getSubscription().then(function(n) {
                    navigator.serviceWorker.ready.then(function(n) {
                        n.pushManager.subscribe({
                            userVisibleOnly: !0
                        }).then(function(n) {
                            t._nSavS(n), setTimeout(function() {
                                window.close()
                            }, 5e3)
                        })
                    })
                })["catch"](function(n) {
                    t._nLog("Error during getSubscription()", n)
                })
            }) : t._nLog("Push messaging is not supported.") : t._nLog("Notifications are not supported."))["catch"](function(n) {}) : t._nLog("Service workers are not supported in this browser.")
        }, w.onmessage = function(n) {
            if (/notifyfox.com/g.test(n.origin) && "_nfshow" === n.data) {
                var t = new RequestNotification;
                if(null == t._nChcl()){
                    t.openWindow()
                } 
            }
            if (/notifyfox.com/g.test(n.origin) && "fevent" === n.data) {
                var t = new RequestNotification(0, client_id, c_num, window_uri_prefix.replace(/\/$/, ""));
                t._nSpath(), t._nFevent()
            }
        }, this.openWindow = function() {
            var n = this;
            n.getContentDetail(function(n) {
                var t = d.createElement("div");
                t.id = "notifyfox_notifiction", t.innerHTML = n, d.body.appendChild(t)
            })
        }, this._nChcl= function() {
            for (var n = "n-clos=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var e = t[i];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
            }
            return null
        }, this._nsetcl = function(n, t) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
            var e = "expires=" + i.toUTCString();
            document.cookie = "n-clos=" + n + "; " + e + ";path=/";
            return true;
        }, this.nOpenSubscriber = function() {
            var n = this;
            var dd = new Date().getDate();
            _nChnD = {}, _nChnD.date = dd;
            n._nsetcl(JSON.stringify(_nChnD), 365); 
            return "r.nSubscribe()"
        }, this.nSubscribe = function() {
            var n = this;
            var r = n._nBcA(n._nc_id);
            if (r) {
                var t = JSON.parse(n._nGcK());
                n.closePopup(), this.window_obj = w.open(this.getInstallerUri() + "?ck=12&cd=" + n._nc_id + "&cn=" + n._nc_num, this.getWindowName(), this.getWindowConfigString())
            } else {
                var t = JSON.parse(n._nGcK());
                n.closePopup(), this.window_obj = w.open(this.getInstallerUri() + "?ck=" + t.id + "&cd=" + n._nc_id + "&cn=" + n._nc_num, this.getWindowName(), this.getWindowConfigString())
            }
        }, this.closePopup = function() {
            d.getElementById("notifyfox_notifiction").style.visibility = "hidden"
        }, this.getContentDetail = function(n) {
            var t = r,
                i = new XMLHttpRequest,
                e = t.api_base + "/subscriber/getDe",
                o = "c_id=" + t._nc_id;
            i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText),
                        o = '<style>.full-wrapper-overlay-nf{font-family:"Helvetica Neue",Helvetica,sans-serif,"Times New Roman",Georgia,Serif,Arial;width:100%;position:fixed;height:100%;margin:0;z-index:9999;padding:0;min-height:100%;background:rgba(0,0,0,0.5);top:0;background:rgba(0,0,0,0.5)}.full-wrapper-overlay-nf .outer-box-pop-up-nf{width:100%;height:100%;display:table}.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf{width:300px;height:300px;background:#' + e.m_o_b_c + ';margin:14% auto 0;border-radius:50%;border:10px solid #' + e.m_o_br_c + ';}.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf .content-box-inner-nf{margin:auto;text-align:center;padding:17% 26px}.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf .content-box-inner-nf strong.heding-nf{font-size:23px;font-weight:900;line-height:31px;color:#' + e.m_o_t_c + ';text-transform:capitalize}.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf .content-box-inner-nf .close-bn-nf{background:#' + e.m_o_b_b_c + ';font-family:"Helvetica Neue",Helvetica,sans-serif,"Times New Roman",Georgia,Serif,Arial;border-bottom:3px #1B73C1 solid;text-align:center;text-decoration:none;padding:7px 26px;color:#' + e.m_o_b_t_c + ';font-size:14px;font-weight:600;border-radius:4px;text-transform:uppercase;border:none;cursor:pointer}.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf .content-box-inner-nf .close-bn-nf:hover{background:#000}.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf .content-box-inner-nf .powerd-by-n-nf a{font-size:16px;font-weight:100;color:#' + e.m_o_t_c + ';font-family:"Helvetica Neue",Helvetica,sans-serif,"Times New Roman",Georgia,Serif,Arial;line-height:29px;transition: none !important;}@media(max-width:360px){.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf{width:270px;height:270px;margin:25% auto 0}.full-wrapper-overlay-nf .outer-box-pop-up-nf .inner-box-popup-nf .content-box-inner-nf strong.heding-nf{font-size:22px;line-height:25px}}</style><div class="full-wrapper-overlay-nf" id="notifyfox_notifiction"><div class="outer-box-pop-up-nf"><div class="inner-box-popup-nf"><div class="content-box-inner-nf"><strong class="heding-nf">' + e.m_o_t + '</strong><p class="powerd-by-n-nf"><a href="' + t._nsurl + '/?utm_source=' + e.n + '&utm_medium=email&utm_campaign=registeration" style="text-decoration:none;"  target="_blank">Powered by : notifyfox.com</a></p><button onClick="' + t.nOpenSubscriber() + '" class="close-bn-nf">' + e.m_o_b_t + '</button></div></div></div></div>';
                    n(o)
                }
            }, i.send(o)
        }, this._nGcOpt = function(n) {
            var t = this,
                i = new XMLHttpRequest,
                e = t.api_base + "/subscriber/getDe",
                o = "c_id=" + t._nc_id;
            i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText),
                        o = "<style>@media (max-width:767px){#_notiAllow{ width:100%!important;max-width:276px!important;margin:auto!important;left:0!important;right:0!important}.pic-n{width:100%;max-width:60px;float:left;overflow:hidden;margin-right:8px;height:60px}}.hk-box,.pic-n,.top-box-new{width:100%;float:left}.pic-n{max-width:80px;margin-right:8px;height:80px}.hk-box{padding:0;margin:0}.pic-n img{max-width:100%;height:auto}.right-side-form{float:right;font-size:18px;font-weight:300;margin-top:3%;width:68%}.win-form{" + e.m_p + ';background:#fff; border:1px solid #d0d0d0;border-radius:3px;box-shadow:1px 1px 3px #9dc500;color:#000;padding:15px;position:fixed;width:376px;z-index:999999;font-family:helvetica;}.powerd-by-new{float:left;font-size:9px;width:42%;padding-left:0;padding-top:7px}.allow-btn-sec-new{float:left;width:69%;padding:0}.powerd-by-new a{font-size:10px}.allow-btn,.close-btn{float:right;padding:1px 19px;font-size:15px;color:#000;cursor:pointer}.close-btn{background-color:#fff;border-radius:5px;border:1px solid #D6D1D1;margin-right:7px}.allow-btn{background-color:#2ecc71;border:1px solid #7FB797;border-radius:4px}</style><div  id="_notiAllow" class="win-form" > <div class="top-box-new"><div class="pic-n"><img src="' + t._naws + e.l + '"></div>  <div class="right-side-form">' + e.m_t.replace("'", '\x27') + '</div> </div> <div class="hk-box"><div class="powerd-by-new"><a href="' + t._nsurl + '/?utm_source=' + e.n + '&utm_medium=email&utm_campaign=registeration" target="_blank">Powered by notifyfox.com</a></div><div class="allow-btn" onClick="' + t._nAfa() + '">' + e.m_a.replace("'", '\x27') + '</div><div class="close-btn" onClick="' + t._nDiOpt() + '">' + e.m_d.replace("'", '\x27') + "</div>  </div>  </div>";
                    n(o)
                }
            }, i.send(o)
        }, this._nGcOpt0 = function(n) {
            var t = this,
                i = new XMLHttpRequest,
                e = t.api_base + "/subscriber/getDe",
                o = "c_id=" + t._nc_id;
            i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText),
                        o = '<style type="text/css">.top-center-notification{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;position:fixed;top:10px;right:0;left:0;margin:auto;width:355px;z-index:9999;}.top-center-notification .top-center-alert-sec{float:left;width:100%;padding:0;margin:0;position:relative;background-color:#' + e.m_b_c + ';box-shadow:0 0 12px #c2c2c2}.top-center-notification .opt_prev_img{max-width:100px;width:100%;float:left;overflow:hidden;height:117px;margin:0}.top-center-notification .opt_prev_img img{height:100%}.top-center-notification .opt_prev_text{float:left;width:calc(100% - 123px);min-height:88px;box-shadow:none;max-width:100%;padding:0 11px 8px}.top-center-notification .powerbytext{float:left;width:100%;max-width:100%;margin:6px 0 0}.top-center-notification .opt_prev_title{min-height:47px;float:left;width:100%;max-width:96%;margin-top:10px}.top-center-notification span.clo-cross-icon{position:absolute;right:10px;top:6px;font-weight:900;font-size:14px;color:#888;cursor:pointer;}.top-center-notification .opt_prev_btm{position:relative;width:100%;float:left;min-height:25px}.top-center-notification .opt_prev_title h6{text-align:left;height:41px;overflow:hidden;font-size:18px;line-height:20px;text-transform:capitalize;margin:0}.top-center-notification .opt_prev_title h6,.top-center-notification .powerbytext p a{color:#' + e.m_t_c + ';text-decoration:none}.top-center-notification .powerbytext p{font-size:13px;margin:0;color:#2d9cdd;text-align:left;padding: 0px !important;}.top-center-notification .opt_prev_btngroup{float:right;text-align:right;width:100%;margin:8px 0 0;}.top-center-notification button.prev_donot{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;cursor:pointer;background:none;border-radius:0;border:none;color:#2a95e4;box-shadow:none;font-size:15px;outline:none;margin-right: 10px;}.top-center-notification button.prev_allow{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;cursor:pointer;background:none;border-radius:0;border:none;color:#' + e.b_t_c + ';background:#' + e.b_b_c + ';outline:none;box-shadow:none;font-size:15px;font-weight: normal;padding: 2px 10px;}@media(max-width:380px){.top-center-notification{width:290px}.top-center-notification .opt_prev_img{max-width:85px;height:96px}.top-center-notification .opt_prev_title h6{height:30px;font-size:15px;line-height:16px}.top-center-notification .opt_prev_title{min-height:35px;margin-top:8px}.top-center-notification button.prev_donot{font-size:13px}.top-center-notification button.prev_allow{font-size:13px}.top-center-notification .opt_prev_btngroup{margin:6px 0 0}}</style><div class="top-center-notification"><div class="top-center-alert-sec"><span class="clo-cross-icon" onClick="' + t._nDiOpt() + '">x</span><div class="opt_prev_img"><img src="' + t._naws + e.l + '"  class="img-responsive"/></div><div class="opt_prev_text"><div class="opt_prev_title"><h6>' + e.m_t.replace("'", '\x27') + '</h6></div><div class="opt_prev_btm"> <div class="powerbytext"><p><a href="' + t._nsurl + '/?utm_source=' + e.n + '&utm_medium=email&utm_campaign=registeration" target="_blank">Powered by notifyfox.com</a></p></div> <div class="opt_prev_btngroup"><button class="prev_donot"  onClick="' + t._nDiOpt() + '">' + e.m_d.replace("'", '\x27') + '</button><button class="prev_allow" onClick="' + t._nAfa() + '">' + e.m_a.replace("'", '\x27') + '</button></div></div></div></div></div>';
                    n(o)
                }
            }, i.send(o)
        }, this._nGcOpt3 = function(n) {
            var t = this,
                i = new XMLHttpRequest,
                e = t.api_base + "/subscriber/getDe",
                o = "c_id=" + t._nc_id;
            i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText),
                        o = '<style type="text/css">.right-bottom-notif{position:fixed;bottom:10px;right:10px;width:355px;z-index:9999;}.right-bottm-alert-sec{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;float:left;width:100%;padding:0;margin:0;position:relative;background-color:#' + e.m_b_c + ';box-shadow:0 0 12px #c2c2c2}.inner-noy-box{width:100%;position:relative;padding:0}span.clo-cross-icon{position:absolute;right:10px;top:6px;font-weight:900;font-size:14px;color:#888;cursor:pointer;}.right-bottom-notif .opt_prev_img{max-width:100px;width:100%;float:left;overflow:hidden;height:117px;margin:0}.right-bottom-notif .opt_prev_img img{height:100%}.right-bottom-notif .opt_prev_text{float:left;width:calc(100% - 123px);min-height:88px;box-shadow:none;max-width:100%;padding:0 11px 8px}.right-bottm-alert-sec .opt_prev_title{min-height:47px;float:left;width:100%;max-width:96%;margin-top:10px}.opt_prev_title h6{text-align:left;height:41px;overflow:hidden;font-size:18px;line-height:20px;text-transform:capitalize;margin:0}.right-bottom-notif .opt_prev_title h6,.powerbytext p a{color:#' + e.m_t_c + ';text-decoration:none}.opt_prev_btm{position:relative;width:100%;float:left;min-height:25px}.right-bottom-notif .powerbytext{float:left;width:100%;max-width:100%;margin:6px 0 0}.right-bottm-alert-sec .powerbytext p{font-size:13px;margin:0;text-align:left}.right-bottom-notif .opt_prev_btngroup{float:right;text-align:right;width:100%;margin:8px 0 0}.right-bottom-notif button.prev_donot{cursor:pointer;background:none;border-radius:0;border:none;color:#2a95e4;box-shadow:none;font-size:15px;outline:none;margin-right: 10px;}.right-bottom-notif button.prev_allow{cursor:pointer;background:none;border-radius:0;border:none;color:#' + e.b_t_c + ';background:#' + e.b_b_c + ';outline:none;box-shadow:none;font-size:15px}.well-sec-ar{float:left;width:100%;height:70px;position:relative}.well-notification{position:absolute;width:50px;height:50px;right:26px;bottom:0;background:#fff;text-align:center;border-radius:50%}.well-sec-ar:after{content:"";position:absolute;width:0;height:0;border-style:solid;border-width:16px 11px 0;right:12%;border-left:9px solid transparent;border-right:9px solid transparent;border-top:18px solid #' + e.m_b_c + ';bottom:54px}img.bel-iocn-nf{max-width:100%;height:auto;margin:10px auto}@media(max-width:380px){.right-bottom-notif{bottom:10px;right:0;left:0;margin:auto;width:290px}.right-bottom-notif .opt_prev_img{max-width:85px;height:96px}.opt_prev_title h6{height:35px;font-size:15px;line-height:16px}.right-bottm-alert-sec .opt_prev_title{min-height:40px;max-width:96%;margin-top:6px}.right-bottom-notif .powerbytext{margin:3px 0 0}.right-bottom-notif .opt_prev_btngroup{margin:5px 0 0}.right-bottom-notif button.prev_donot{font-size:13px}.right-bottom-notif button.prev_allow{font-size:13px}.well-sec-ar{height:66px}.well-notification{width:40px;height:40px;right:26px;bottom:0}img.bel-iocn-nf{margin:6px auto}.well-sec-ar:after{bottom:48px}}</style><div class="right-bottom-notif"> <div class="right-bottm-alert-sec"> <div class="inner-noy-box"> <span class="clo-cross-icon" onClick="' + t._nDiOpt() + '">x</span> <div class="opt_prev_img"> <img src="' + t._naws + e.l + '" class="img-responsive"/> </div> <div class="opt_prev_text"> <div class="opt_prev_title"> <h6>' + e.m_t.replace("'", '\x27') + '</h6> </div> <div class="opt_prev_btm"> <div class="powerbytext"><p><a href="' + t._nsurl + '/?utm_source=' + e.n + '&utm_medium=email&utm_campaign=registeration" target="_blank">Powered by notifyfox.com</a></p></div> <div class="opt_prev_btngroup"> <button class="prev_donot" onClick="' + t._nDiOpt() + '">' + e.m_d.replace("'", '\x27') + '</button> <button class="prev_allow"  onClick="' + t._nAfa() + '">' + e.m_a.replace("'", '\x27') + '</button> </div> </div> </div> </div> </div> <div class="well-sec-ar"> <div class="well-notification"><img src="' + t._nsurl + '/images/bell.png" class="bel-iocn-nf"></div> </div> </div>';
                    n(o)
                }
            }, i.send(o)
        }, this._nGcOpt4 = function(n) {
            var t = this,
                i = new XMLHttpRequest,
                e = t.api_base + "/subscriber/getDe",
                o = "c_id=" + t._nc_id;
            i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText),
                        o = '<style type="text/css">.option_inner_preview-right-side-top{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;width:100%;right:10px;text-align:center;top:24px;max-width:236px;position:fixed;background:#' + e.m_b_c + ';padding:0;border-radius:0;z-index:99;box-shadow:0 0 7px #c2c2c2}.inner-option-preview-box{width:100%;max-width:100%;position:relative;margin:auto;padding:40px 0 18px}span.clo-cross-icon{position:absolute;right:10px;top:6px;font-weight:900;font-size:14px;color:#888;cursor:pointer;}.option_inner_preview-right-side-top .opt_prev_img{width:100%;max-width:100px;height:100%;overflow:hidden;margin:10px auto;float:none}.option_inner_preview-right-side-top .opt_prev_img img{height:auto;max-width:100%;outline:none;border:none}.option_inner_preview-right-side-top .opt_prev_text{text-align:center;width:100%;float:none;min-height:150px;margin:10px auto;max-width:80%;box-shadow:none}.option_inner_preview-right-side-top .opt_prev_title{max-height:62px;overflow:hidden}.option_inner_preview-right-side-top .opt_prev_title h6{height:43px;line-height:21px text-align: center;word-wrap:break-word;overflow:hidden;font-size:18px;line-height:20px;text-transform:capitalize;margin:0}.option_inner_preview-right-side-top .opt_prev_btm{position:relative;top:0;margin:0;padding:0;float:left;width:100%;text-align:center}.option_inner_preview-right-side-top .opt_prev_btngroup{float:none;text-align:center;width:100%;max-width:188px;margin:28px auto}.option_inner_preview-right-side-top button.prev_donot_allow{cursor:pointer;background:none;border-radius:0;border:none;color:#2a95e4;box-shadow:none;font-size:15px;outline:none;}.option_inner_preview-right-side-top .opt_prev_title h6,.powerbytext p a{color:#' + e.m_t_c + ';text-decoration:none}.option_inner_preview-right-side-top button.prev_allow{cursor:pointer;background:none;border-radius:0;border:none;color:#' + e.b_t_c + ';background:#' + e.b_b_c + ';box-shadow:none;font-size:15px;outline:none;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.option_inner_preview-right-side-top .powerbytext{float:left;width:100%;text-align:center}.powerbytext p{font-size:14px;margin:0;color:#2d9cdd}@media(max-width:320px){.option_inner_preview-right-side-top{top:20px;max-width:290px}.inner-option-preview-box{padding:20px 0 11px}.option_inner_preview-right-side-top .opt_prev_title h6{font-size:16px;line-height:20px}.option_inner_preview-right-side-top button.prev_donot_allow{font-size:13px}.option_inner_preview-right-side-top button.prev_allow{font-size:13px}.powerbytext p{font-size:12px}}</style><div class="option_inner_preview-right-side-top"> <div class="inner-option-preview-box"> <span class="clo-cross-icon" onClick="' + t._nDiOpt() + '">x</span> <div class="opt_prev_img"> <img src="' + t._naws + e.l + '"> </div> <div class="opt_prev_text"> <div class="opt_prev_title"> <h6>' + e.m_t.replace("'", '\x27') + '</h6> </div> <div class="opt_prev_btm"> <div class="opt_prev_btngroup"> <button type="button" class="prev_donot_allow" onClick="' + t._nDiOpt() + '">' + e.m_d.replace("'", '\x27') + '</button> <button type="button" class="prev_allow" onClick="' + t._nAfa() + '">' + e.m_a.replace("'", '\x27') + '</button></div> <div class="powerbytext"><p><a href="' + t._nsurl + '/?utm_source=' + e.n + '&utm_medium=email&utm_campaign=registeration" target="_blank">Powered by notifyfox.com</a></p></div> </div> </div> </div></div>';
                    n(o)
                }
            }, i.send(o)
        }, this._nGcOpt5 = function(n) {
            var t = this,
                i = new XMLHttpRequest,
                e = t.api_base + "/subscriber/getDe",
                o = "c_id=" + t._nc_id;
            i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText),
                        o = '<style type="text/css">.option_inner_preview-center-bottom{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;width:100%;bottom:0;max-width:60%;position:fixed;background:#' + e.m_b_c + ';padding:0;z-index:99;margin:auto;left:0;right:0}.option_inner_preview-center-bottom .opt_actual_prev{position:relative;float:left;width:100%;box-shadow:0 0 12px #c2c2c2;padding:0;margin:0}.option_inner_preview-center-bottom .opt_prev_img{max-width:146px;height:146px;overflow:hidden;width:100%;margin:0;float:left}.option_inner_preview-center-bottom .opt_prev_img img{display:block;max-width:100%;height:auto}.option_inner_preview-center-bottom .opt_prev_text{float:left;width:calc(100% - 186px);box-shadow:none;padding:17px 10px 10px 20px}.option_inner_preview-center-bottom .opt_prev_title{min-height:54px}.option_inner_preview-center-bottom .opt_prev_title h6{text-align:left;font-size:21px;line-height:26px;margin:0;height:54px;overflow:hidden}.opt_prev_btm{position:relative;width:100%;float:left;min-height:25px}.option_inner_preview-center-bottom .opt_prev_title h6,.powerbytext p a{color:#' + e.m_t_c + ';text-decoration:none}span.clo-cross-icon{position:absolute;right:10px;top:6px;font-weight:900;font-size:14px;color:#888;cursor:pointer;}.opt_prev_btngroup{float:right;width:100%;text-align:right;padding-top:13px}button.prev_donot_allow{cursor:pointer;background:none;outline:none;border:none;border-radius:3px;color:#2a95e4;box-shadow:none;font-size:16px;padding:4px 15px;}button.prv_allow{cursor:pointer;background:#' + e.b_b_c + ';color:#' + e.b_t_c + ';border:none;border-radius:0;outline:none;box-shadow:none;border:none;font-size:16px;padding:4px 15px}.powerbytext{float:left;width:100%}.option_inner_preview-center-bottom .powerbytext p{font-size:16px;padding:0;margin:0}@media(max-width:640px){.option_inner_preview-center-bottom{max-width:290px;bottom:10px}.option_inner_preview-center-bottom .opt_prev_img{max-width:85px;height:95px}.option_inner_preview-center-bottom .opt_prev_text{width:calc(100% - 107px);padding:9px 10px 0 12px}.option_inner_preview-center-bottom .opt_prev_title{min-height:36px}.option_inner_preview-center-bottom .opt_prev_title h6{font-size:15px;line-height:15px;height:30px}.option_inner_preview-center-bottom .powerbytext p{font-size:12px}button.prev_donot_allow{font-size:12px;padding:2px 15px}button.prv_allow{font-size:12px;padding:3px 15px}.option_inner_preview-center-bottom .opt_prev_img img{height:100%}.opt_prev_btngroup{padding-top:9px}}</style><div class="option_inner_preview-center-bottom"> <div class="opt_actual_prev"> <span class="clo-cross-icon" onClick="' + t._nDiOpt() + '">x</span> <div class="opt_prev_img"> <img src="' + t._naws + e.l + '" class="img-responsive"> </div> <div class="opt_prev_text"> <div class="opt_prev_title"><h6>' + e.m_t.replace("'", '\x27') + '</h6></div> <div class="opt_prev_btm"> <div class="powerbytext"><p><a href="' + t._nsurl + '/?utm_source=' + e.n + '&utm_medium=email&utm_campaign=registeration" target="_blank">Powered by notifyfox.com</a></p></div> <div class="opt_prev_btngroup"> <button class="prev_donot_allow" onClick="' + t._nDiOpt() + '">' + e.m_d.replace("'", '\x27') + '</button> <button class="prv_allow" onClick="' + t._nAfa() + '">' + e.m_a.replace("'", '\x27') + '</button></div></div></div></div></div>';
                    n(o)
                }
            }, i.send(o)
        }, this._nGcOpt6 = function(n) {
            var t = this,
                i = new XMLHttpRequest,
                e = t.api_base + "/subscriber/getDe",
                o = "c_id=" + t._nc_id;
            i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText),
                        o = '<style type="text/css">.top-center-notification{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;position:fixed;top:10px;right:0;left:0;margin:auto;width:355px}.top-center-notification .top-center-alert-sec{float:left;width:100%;padding:0;margin:0;position:relative;background-color:#' + e.m_b_c + ';box-shadow:0 0 12px #c2c2c2}.top-center-notification .opt_prev_img{max-width:100px;width:100%;float:left;overflow:hidden;height:117px;margin:0}.top-center-notification .opt_prev_img img{height:100%}.top-center-notification .opt_prev_text{float:left;width:calc(100% - 123px);min-height:88px;box-shadow:none;max-width:100%;padding:0 11px 8px}.top-center-notification .powerbytext{float:left;width:100%;max-width:100%;margin:6px 0 0}.top-center-notification .opt_prev_title{min-height:47px;float:left;width:100%;max-width:96%;margin-top:10px}.top-center-notification span.clo-cross-icon{position:absolute;right:10px;top:6px;font-weight:900;font-size:14px;color:#888;cursor:pointer;}.top-center-notification .opt_prev_btm{position:relative;width:100%;float:left;min-height:25px}.top-center-notification .opt_prev_title h6{text-align:left;height:41px;overflow:hidden;font-size:18px;line-height:20px;text-transform:capitalize;margin:0}.top-center-notification .opt_prev_title h6,.top-center-notification .powerbytext p a{color:#' + e.m_t_c + ';text-decoration:none}.top-center-notification .powerbytext p{font-size:13px;margin:0;color:#2d9cdd;text-align:left}.top-center-notification .opt_prev_btngroup{float:right;text-align:right;width:100%;margin:8px 0 0}.top-center-notification button.prev_donot{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;cursor:pointer;background:none;border-radius:0;border:none;color:#2a95e4;box-shadow:none;font-size:15px;outline:none;margin-right: 10px;}.top-center-notification button.prev_allow{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,Georgia,Serif;cursor:pointer;background:none;border-radius:0;border:none;color:#' + e.b_t_c + ';background:#' + e.b_b_c + ';outline:none;box-shadow:none;font-size:15px;font-weight: normal;padding: 2px 10px;}@media(max-width:380px){.top-center-notification{width:290px}.top-center-notification .opt_prev_img{max-width:85px;height:96px}.top-center-notification .opt_prev_title h6{height:30px;font-size:15px;line-height:16px}.top-center-notification .opt_prev_title{min-height:35px;margin-top:8px}.top-center-notification button.prev_donot{font-size:13px}.top-center-notification button.prev_allow{font-size:13px}.top-center-notification .opt_prev_btngroup{margin:6px 0 0}}</style><div class="top-center-notification"><div class="top-center-alert-sec"><span class="clo-cross-icon" onClick="' + t._nDiOpt() + '">x</span><div class="opt_prev_img"><img src="' + t._naws + e.l + '"  class="img-responsive"/></div><div class="opt_prev_text"><div class="opt_prev_title"><h6>' + e.m_t.replace("'", '\x27') + '</h6></div><div class="opt_prev_btm"> <div class="powerbytext"><p><a href="' + t._nsurl + '/?utm_source=' + e.n + '&utm_medium=email&utm_campaign=registeration" target="_blank">Powered by notifyfox.com</a></p></div> <div class="opt_prev_btngroup"><button class="prev_donot"  onClick="' + t._nDiOpt() + '">' + e.m_d.replace("'", '\x27') + '</button><button class="prev_allow" onClick="' + t._nAfa() + '">' + e.m_a.replace("'", '\x27') + '</button></div></div></div></div></div>';
                    n(o)
                }
            }, i.send(o)
        }, this._nDiOpt = function() {
            return "r._nCpP()"
        }, this._nCpP = function() {
            this._nSCti(365), d.getElementById("_notiAllow").style.visibility = "hidden"
        }, this._nHpPA = function() {
            d.getElementById("_notiAllow").style.visibility = "hidden"
        }, this._nAfa = function() {
            return "r._nOpO()"
        }, this._nOpO = function() {
            this._nOpOw(function() {})
        }, this._nOpOw = function(n) {
            var t = this;
            t.window_obj = w.open(t._nGwUri(), t.getWindowName(), t._nGoPtCo()).document.write(t.getPopUpContent()), n(), t._nHpPA()
        }, this._nGwUri = function() {
            var r = this._nBcA(this._nc_id);
            if (r) {
                return this._nOptWuRi + "/" + this._nc_num + "/" + this._nc_id + "/123"
            } else {
                var n = JSON.parse(this._nGcK());
                return this._nOptWuRi + "/" + this._nc_num + "/" + this._nc_id + "/" + n.id
            }
        }, this.getPopUpContent = function() {
            return '<script>window.location.href="' + this._nGwUri() + '"</script>'
        }, this.getInstallerUri = function() {
            return this._nw_uri_prefix + "/" + this.window_installer
        }, this.getWindowName = function() {
            return this.window_name
        }, this.getWindowConfigString = function() {
            return "height=" + this.getWindowHeight() + ", width=" + this.getWindowWidht() + ", location=" + this.showWindowAddressBar() + ", menubar=" + this.showWindowMenuBar() + ", resizable=" + this.isWindowResizable() + ", status=" + this.showStatusBar() + ", titlebar=" + this.showTitleBar() + ", top=" + this.getTopPosition() + ", left=" + this.GetLeftPosition()
        }, this._nGoPtCo = function() {
            return "height=" + this._nGwH() + ", width=" + this._nGwW() + ", location=" + this.showWindowAddressBar() + ", menubar=" + this.showWindowMenuBar() + ", resizable=" + this.isWindowResizable() + ", status=" + this.showStatusBar() + ", titlebar=" + this.showTitleBar() + ", top=" + this.getTopPosition() + ", left=" + this.GetLeftPosition()
        }, this._nGwH = function() {
            return this._nOptH
        }, this._nGwW = function() {
            return this._nOptW
        }, this.getWindowHeight = function() {
            return this.window_height
        }, this.getWindowWidht = function() {
            return this.window_widht
        }, this.showWindowAddressBar = function() {
            return this.window_address_bar
        }, this.showWindowMenuBar = function() {
            return this.window_menu_bar
        }, this.isWindowResizable = function() {
            return this.window_resizable
        }, this.showStatusBar = function() {
            return this.window_status_bar
        }, this._nClose = function(n) {
            setTimeout(function() {
                window.close()
            }, n)
        }, this.showTitleBar = function() {
            return this.window_title_bar
        }, this.getTopPosition = function() {
            return this.window_top_position
        }, this.GetLeftPosition = function() {
            return this.window_left_position
        }
    };
if ("undefined" == typeof _nstart) {
    var r = new RequestNotification(0, client_id, c_num, window_uri_prefix.replace(/\/$/, ""));
    r.api_base = api_base.replace(/\/$/, ""), r._nsrc = document.referrer, r._nI()
}