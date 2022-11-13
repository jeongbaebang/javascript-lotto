const MissionUtils = require('@woowacourse/mission-utils');

class Message {
  #print = MissionUtils.Console.print;

  print(text = '') {
    Message.validate(text);
    this.#print(text);
  }

  static validate(text) {
    if (!text) {
      throw new Error('문자열을 입력해야 합니다.');
    }
  }
}

module.exports = Message;