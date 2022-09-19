//import { ScrollToElementOptions, ScrollToElementResult } from "@shared/service-proxy/core/ScrollToElement";


declare namespace myApp {
    namespace utils {

        /**
         * Lấy giá trị cookie được lưu trong key, nếu không tồn tại sẽ trả null
         * @param key Tên cần lấy
         */
        function getCookieValue(key: string): string | null;

        /**
         * Sets một giá trị cookie.
         * @param {string} key Tên của cookie
         * @param {string} value Giá trị cần lưu
         * @param {Date} expireDate (optional). If not specified the cookie will expire at the end of session.
         * @param {string} path (optional)
         * @param {string} domain (optional)
         * @param {any} attributes (optional)
         */
        function setCookieValue(
            key: string
            , value: string | null | undefined
            , expireDate?: Date | undefined
            , path?: string | undefined
            , domain?: string | undefined
            , attributes?: any): void

        /**
         * Deletes cookie theo key.
         * @param {string} key
         * @param {string} path (optional)
         */
        function deleteCookie(key: string, path?: string): void;

        /**
         * Lấy host rederect
         * @param loginType Loại login
         */
        function getHost(loginType: string): string;

    }

    namespace ui {

        /**
         * Gọi màn hình loading
         * @param elm Phần tử cha chứa loading
         * @param text Text muốn hiển thị
         * @param delay Thời gian chờ
         */
        function setBusy(elm?: any, text?:string, delay?:number): void;

        /**
         *
         * @param elm Phần tử cha chưa waiting
         */
        function clearBusy(elm?: any): void;

        /**
         *Scroll tới vị trí của phần tử đầu tiên được tìm thấy trong selector
         * @param selector: element muốn sroll tới
         * @param options: ScrollToElementOptions Các tùy chọn khi scroll
         * @returns Promise<ScrollToElementResult>
         */
        function scrollToElement(selector: string, options?: any): Promise<any>;

        function loadErrorPage(isProduction: boolean, errorMessage?: string): void;
    }

    /**Module xử lý các vấn đề về thời gian */
    namespace moment {
        /**
         * @description Fix vấn đề time zone ng primeNG, giữ nguyên thời gian đổi muối giờ về +0
         * @param _date: Thời gian ở time zone hiện tại
         * @param _format: Cách định dạng, default: 'DD/MM/YYYY'
         * @returns Trả về thời gian hiện tại và muối giờ +0
        */
        function changeOnlyTimeZone(_date: Date | any, _format?: string): Date
    }


}
