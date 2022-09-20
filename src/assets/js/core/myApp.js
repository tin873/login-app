(function (define) {
    define(['jquery'], function ($) {
        return (function () {
            let myApp = window.myApp || {};
            myApp.log = window.console.log;

            /* UTILS ***************************************************/
            myApp.utils = myApp.utils || {};

            /**
             * Gets a cookie with given key.
             * This is a simple implementation created to be used by ABP.
             * Please use a complete cookie library if you need.
             * @param {string} key
             * @returns {string} Cookie value or null
             */
            myApp.utils.getCookieValue = function (key) {
                let equalities = document.cookie.split('; ');
                for (let i = 0; i < equalities.length; i++) {
                    if (!equalities[i]) {
                        continue;
                    }

                    let splitted = equalities[i].split('=');
                    if (splitted.length != 2 || !splitted[1]) {
                        continue;
                    }

                    if (decodeURIComponent(splitted[0]) === key) {
                        return decodeURIComponent(splitted[1] || '');
                    }
                }

                return null;
            };

            /**
             * Sets a cookie value for given key.
             * This is a simple implementation created to be used by ABP.
             * Please use a complete cookie library if you need.
             * @param {string} key
             * @param {string} value
             * @param {Date} expireDate (optional). If not specified the cookie will expire at the end of session.
             * @param {string} path (optional)
             * @param {string} domain (optional)
             * @param {any} attributes (optional)
             */
            myApp.utils.setCookieValue = function (key, value, expireDate, path, domain, attributes) {
                var cookieValue = encodeURIComponent(key) + '=';

                if (value) {
                    cookieValue = cookieValue + encodeURIComponent(value);
                }

                if (expireDate) {
                    cookieValue = cookieValue + "; expires=" + expireDate.toUTCString();
                }

                if (path) {
                    cookieValue = cookieValue + "; path=" + path;
                } else {
                    cookieValue = cookieValue + "; path=" + '/mes';
                }

                if (domain) {
                    cookieValue = cookieValue + "; domain=" + domain;
                }

                for (var name in attributes) {
                    if (!attributes[name]) {
                        continue;
                    }

                    cookieValue += '; ' + name;
                    if (attributes[name] === true) {
                        continue;
                    }

                    cookieValue += '=' + attributes[name].split(';')[0];
                }

                document.cookie = cookieValue;
            };

            /**
                   * Deletes cookie theo key.
                   * @param {string} key
                   * @param {string} path (optional)
                   */
            myApp.utils.deleteCookie = function (key, path) {
                var cookieValue = encodeURIComponent(key) + '=';

                cookieValue = cookieValue + "; expires=" + (new Date(new Date().getTime() - 86400000)).toUTCString();

                if (path) {
                    cookieValue = cookieValue + "; path=" + path;
                } else {
                    cookieValue = cookieValue + "; path=" + '/mes';
                }

                document.cookie = cookieValue;
            }

            myApp.utils.getHost = function(loginType){
                let href = window.location.href;
                let url = new URL(href);
                let params = new URLSearchParams(url.search);
                if(loginType == 'Token'){
                    params.delete('Token');
                    return window.location.host + window.location.pathname + (params.toString() ? '&' + params.toString() : '');
                } else if(loginType == 'ticket'){
                    params.delete('ticket');
                    let paramString  = params.toString() ? '?' + params.toString() : '';
                    console.log('ticket',paramString);
                    return window.location.protocol + '//' + window.location.host + window.location.pathname.replace(/\/$/,'') + paramString;
                }
            }

            /* UI ***************************************************/
            myApp.ui = myApp.ui || {};
            myApp.ui.setBusy = function (elm, text, delay) {
                FreezeUI({
                    element: elm,
                    text: text ? text : " ",
                    delay: delay
                });
            };

            myApp.ui.clearBusy = function (elm, delay) {
                UnFreezeUI({
                    element: elm,
                    delay: delay
                });
            };

            myApp.ui.scrollToElement = function (selector, options = null) {
                return new Promise((resolve, reject) => {
                    let ele = document.querySelector(selector);
                    if(!ele){
                        return resolve({
                            isSuccess: false,
                            message: 'Không có phần tử nào được tìm thấy.'
                        })
                    }
                    let _options = {
                        delay: 0,
                        behavior: 'smooth',
                        differrence: 75
                    }
                    if (options)
                        _options = {
                            ..._options,
                            ...options
                        }
                    setTimeout(() => {
                        const _y = ele.getBoundingClientRect().top + window.scrollY;
                        window.scroll({
                            top: _y - _options.differrence,
                            behavior: _options.behavior
                        });
                        resolve({
                            isSuccess: true
                        })
                    }, _options.delay);
                });
            };

            myApp.ui.loadErrorPage = function(isProduction, errorMessage = undefined){
                const bodyElement = document.querySelector('body');
                const bodyContent = `
                    <div id="notfound">
                        <div class="notfound">
                            <div class="notfound-404">
                                <h1>:(</h1>
                            </div>
                            <h2>400 - Khởi tạo thất bại</h2>
                            ${isProduction ?
                                '<p>Không thể truy cập, vui lòng liên hệ admin.</p>' :
                                ( errorMessage || 'Lỗi không xác định')
                            }
                        </div>
                    </div>
                `;
                bodyElement.innerHTML = bodyContent;
            }


            /* UI ***************************************************/
            myApp.moment = myApp.moment || {};
            myApp.moment.changeOnlyTimeZone = function(_date, _format = 'DD/MM/YYYY'){
                let timeString = moment(_date).format(_format);
                return moment(timeString + ' +0000', `${_format} Z`).toDate()
            }

            return myApp;
        })();
    })
}(typeof define === 'function' && define.amd
    ? define
    : function (deps, factory) {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = factory(require('jquery'));
        } else {
            window.myApp = factory(window.jQuery);
        }
    }));
