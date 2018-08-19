export class OS {
    osName: string

    constructor() {
        this.osName = this.setOS()
    }

    setOS() {
        let os = ""
        const ua = navigator.userAgent
        if (ua.match(/Win(dows )?NT 10\.0/)) {
            os = "Windows_10"
        } else if(ua.match(/Win(dows )?NT 6\.3/)) {
            os = "Windows_8_1"
        } else if(ua.match(/Win(dows )?NT 6\.2/)) {
            os = "Windows_8"
        } else if(ua.match(/iPhone/)) {
            os = "iPhone"
        } else if(ua.match(/iPad/)) {
            os = "iPad"
        } else if(ua.match(/Mac|PPC/)) {
            os = "MacOS"
        } else if(ua.match(/Android ([\.\d]+)/)) {
            os = "Android"
        } else if(ua.match(/Linux/)) {
            os = "Linux"
        }
        return os
    }
}