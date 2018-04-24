var QcloudSms = require("qcloudsms_js");

class QcloudSmsClass {
  constructor() {
    // 短信应用SDK AppID
    this.appid = 1400071448; // SDK AppID是1400开头

    // 短信应用SDK AppKey
    this.appkey = "dccb0348c004a6bd866b330b494b8d1d";

    // 短信模板ID，需要在短信应用中申请
    this.templateId = 91544; // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请

    // 签名
    this.smsSign = "文杰工作资料"; // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`

    // 实例化QcloudSms
    this.qcloudsms = QcloudSms(this.appid, this.appkey);
    this.ssender = this.qcloudsms.SmsSingleSender();

  }
  send(phoneNum, callback = this.callback) {
    var num = '';
    for (var i = 0; i < 4; i++) {
      num += Math.round(Math.random() * 10);
    }
    const params = [num, 2];

    this.ssender.sendWithParam(86, phoneNum, this.templateId,
      params, this.smsSign, "", "", callback); // 签名参数未提供或者为空时，会使用默认签名发送短信
    return num;
  }
}

const qcloudsms = new QcloudSmsClass();

export default qcloudsms
