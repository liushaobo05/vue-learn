<template>
  <div class='home-container'>
    <header class='top_tips'>
  		<span class='num_tip'>题目一</span>
  	</header>
    <div class="item-container">
      <div v-if="resData.itemDetail.length > 0"></div>
      <header class="item_title">{{resData.itemDetail[resData.itemNum-1].topic_name}}</header>
      <ul>
        <li v-for="(item, index) in resData.itemDetail[resData.itemNum-1].topic_answer" :key="item.topic_id">
          <span class="option_style">{{index}}</span>
          <span class="option_detail">{{item.answer_name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resData: {
        level: '第一周',
        itemNum: 1,
        allTime: 0,
        timer: '',
        itemDetail: [{
          'topic_id': 20,
          'active_topic_id': 4,
          'type': 'ONE',
          'topic_name': '题目一',
          'active_id': 1,
          'active_title': '欢乐星期五标题',
          'active_topic_phase': '第一周',
          'active_start_time': '1479139200',
          'active_end_time': '1482163200',
          'topic_answer': [{
            'topic_answer_id': 1,
            'topic_id': 20,
            'answer_name': '答案aaaa',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 2,
            'topic_id': 20,
            'answer_name': '正确答案',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 3,
            'topic_id': 20,
            'answer_name': '答案cccc',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 4,
            'topic_id': 20,
            'answer_name': '答案dddd',
            'is_standard_answer': 1
          }]
        }, {
          'topic_id': 21,
          'active_topic_id': 4,
          'type': 'MORE',
          'topic_name': '题目二',
          'active_id': 1,
          'active_title': '欢乐星期五标题',
          'active_topic_phase': '第一周',
          'active_start_time': '1479139200',
          'active_end_time': '1482163200',
          'topic_answer': [{
            'topic_answer_id': 5,
            'topic_id': 21,
            'answer_name': '答案A',
            'is_standard_answer': 1
          }, {
            'topic_answer_id': 6,
            'topic_id': 21,
            'answer_name': '答案B',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 7,
            'topic_id': 21,
            'answer_name': '正确答案',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 8,
            'topic_id': 21,
            'answer_name': '答案D',
            'is_standard_answer': 0
          }]
        }, {
          'topic_id': 21,
          'active_topic_id': 4,
          'type': 'MORE',
          'topic_name': '题目三',
          'active_id': 1,
          'active_title': '欢乐星期五标题',
          'active_topic_phase': '第一周',
          'active_start_time': '1479139200',
          'active_end_time': '1482163200',
          'topic_answer': [{
            'topic_answer_id': 9,
            'topic_id': 21,
            'answer_name': '测试A',
            'is_standard_answer': 1
          }, {
            'topic_answer_id': 10,
            'topic_id': 21,
            'answer_name': 'BBBBBB',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 11,
            'topic_id': 21,
            'answer_name': 'CCCCCC',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 12,
            'topic_id': 21,
            'answer_name': '正确答案',
            'is_standard_answer': 0
          }]
        }, {
          'topic_id': 21,
          'active_topic_id': 4,
          'type': 'MORE',
          'topic_name': '题目四',
          'active_id': 1,
          'active_title': '欢乐星期五标题',
          'active_topic_phase': '第一周',
          'active_start_time': '1479139200',
          'active_end_time': '1482163200',
          'topic_answer': [{
            'topic_answer_id': 13,
            'topic_id': 21,
            'answer_name': '正确答案',
            'is_standard_answer': 1
          }, {
            'topic_answer_id': 14,
            'topic_id': 21,
            'answer_name': 'A是错的',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 15,
            'topic_id': 21,
            'answer_name': 'D是对的',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 16,
            'topic_id': 21,
            'answer_name': 'C说的不对',
            'is_standard_answer': 0
          }]
        }, {
          'topic_id': 21,
          'active_topic_id': 4,
          'type': 'MORE',
          'topic_name': '题目五',
          'active_id': 1,
          'active_title': '欢乐星期五标题',
          'active_topic_phase': '第一周',
          'active_start_time': '1479139200',
          'active_end_time': '1482163200',
          'topic_answer': [{
            'topic_answer_id': 17,
            'topic_id': 21,
            'answer_name': '错误答案',
            'is_standard_answer': 1
          }, {
            'topic_answer_id': 18,
            'topic_id': 21,
            'answer_name': '正确答案',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 19,
            'topic_id': 21,
            'answer_name': '错误答案',
            'is_standard_answer': 0
          }, {
            'topic_answer_id': 20,
            'topic_id': 21,
            'answer_name': '错误答案',
            'is_standard_answer': 0
          }]
        }],
        answerid: [],
      }
    }
  }
}
</script>

<style lang='scss'>
.top_tips {
  position: absolute;
  width: 100px;
  height: 150px;
  right: 40px;
  background-image: url('../../assets/images/WechatIMG2.png');
  background-size: 100px 150px;
  background-repeat: repeat-x;
  .num_tip {
    position: absolute;
    top: 110px;
    right: 25px;
    font-size: 14px;
    color: red;
    font-family: '黑体';
    font-weight: 600;
  }
}

.home_logo {
  position: absolute;
  background-image: url('../../assets/images/2-1.png');
  background-size: 13.12rem 100%;
  width: 300px;
  height: 350px;
  top: 50px;
  left: 30px;
}
</style>
