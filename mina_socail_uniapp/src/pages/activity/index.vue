<template>
  <view class="activity-list">
    <view
      class="activity-item"
      v-for="activity in activityList"
      :key="activity.id"
      v-on:click="onDetail(activity.id)"
    >
      <view class="activity-title">
        {{ activity.title }}
      </view>
      <view class="activity-tags">
        <view class="activity-tag" v-for="tag in activity.tags" :key="tag">
          {{ tag }}
        </view>
      </view>
      <view class="activity-sponsor">
        <text class="title">发起人:</text>
        <view class="sponsor-avatar">
          <image :src="activity.sponsor.avatar"></image>
        </view>
      </view>
      <view class="activity-date">
        <text class="title">时间:</text>
        {{ activity.date }}
      </view>
      <view class="activity-addr">
        <text class="title">地点:</text>
        {{ activity.addr }}
      </view>
      <view class="activity-description">
        <text>{{ activity.description }}</text>
      </view>
      <view class="activity-participants">
        <text class="ft-bold">参与者</text>
        <text>({{ activity.participantCount }}人)</text>
        <text class="title">:</text>
        <view
          class="activity-participant"
          v-for="participant in activity.participants"
          :key="participant.id"
        >
          <image :src="participant.avatar"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activityList: [
        {
          id: 12,
          title: "奥森跑步",
          tags: ["跑步", "定向越野"],
          date: "2021-07-01 10:00~12:00",
          addr: "北京市朝阳区奥林匹克公园",
          description:
            "关于组织奥森奔跑5.20+相亲联谊活动”的通知\n" +
            "一个人奔跑形影孤单\n" +
            "一群人奔跑畅快狂欢\n" +
            "为拓展奔跑外延，融通社交内涵，中国农业大学跑团协同北京马拉松协会并联合中国高校在京校友跑团，组织“奥森奔跑5.20+相亲联谊活动”，为在京新入职未婚青年搭建健身和情感交流平台，现把有关内容通知如下。\n" +
            "一.活动主题：健康奔跑+情侣携进\n" +
            "二.活动时间：每周六早8：00—12：00\n" +
            "三.活动地点：奥森公园南园及相应户外草坪\n" +
            "四.活动方案：每周六早8：00在奥森公园南大门集合，由专业人员组织讲解示范拉伸，共同奔跑5.20公里（南园一圈）。根据参加人员情况分成每组30人，男女各15人，到不同区域草坪组织户外联谊活动，包括背板、俯卧撑等静态比赛，自我介绍并联欢及进行冷餐冷宴活动。\n" +
            "本活动为系列持续活动。\n" +
            "五.报名条件：\n" +
            "① 在京新近入职的未婚青年\n" +
            "② 有正确的婚恋观、收入稳定\n" +
            "③ 本科以上学历，有文化素养\n" +
            "参加人必须隶属于一个高校校友跑团，并由团长推荐。\n" +
            "六.报名方式：扫码入群，群作为系列活动的沟通联系的基础平台。\n" +
            "七.活动费用：活动为公益性质，不提前收取费用。冷餐等食物请自行准备，产生的相关费用平摊（租赁场地、统一食物、活动奖品、活动策划等费用）。欢迎参加人根据个人情况给予相应捐助。\n" +
            "八.本活动倡导好色而非猥琐、热情绝不粗鲁、浪漫绝非炫耀的交往风尚，我们赞赏心灵的美好，提倡环保、简约、利他主义。\n" +
            "\n",
          sponsor: {
            id: 10001,
            avatar:
              "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
            name: "德善",
            contact: "18810442532",
          },
          participantCount: 3,
          participants: [
            {
              id: 10001,
              avatar:
                "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
              name: "德善",
              contact: "18810442532",
            },
            {
              id: 10002,
              avatar:
                "http://img.qijin.tech/2mm5hvm506BN66db4ba3fdeb95db069e5fb5197f630b.png",
              name: "阿泽",
              contact: "18810442532",
            },
            {
              id: 10003,
              avatar:
                "http://img.qijin.tech/aGw2jcwXhGpL6636dff4c3e33bbda090536cdba6d728.png",
              name: "宝拉",
              contact: "18810442532",
            },
          ],
        },
        {
          id: 13,
          title: "棋牌聚会",
          tags: ["剧本杀", "扑克", "麻将"],
          date: "2021-07-01 10:00~12:00",
          addr: "北京市海淀区军事博物馆",
          description:
            "大家好，27号（本周日）下午有一个俱乐部的小聚会，有喜欢玩麻将、扑克、剧本杀的小伙伴，可以联系我或者雪蕊@崔雪蕊~非单 ，想自带其它桌游玩的也欢迎。\n" +
            "\n" +
            "位置在 军事博物馆 地铁站旁边。场地有限，原则上不超过16人，现在已经11个~",
          sponsor: {
            id: 10001,
            avatar:
              "http://img.qijin.tech/2mm5hvm506BN66db4ba3fdeb95db069e5fb5197f630b.png",
            name: "阿泽",
            contact: "18810442532",
          },
          participantCount: 11,
          participants: [
            {
              id: 10002,
              avatar:
                "http://img.qijin.tech/2mm5hvm506BN66db4ba3fdeb95db069e5fb5197f630b.png",
              name: "阿泽",
              contact: "18810442532",
            },
            {
              id: 10001,
              avatar:
                "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
              name: "德善",
              contact: "18810442532",
            },
            {
              id: 10003,
              avatar:
                "http://img.qijin.tech/aGw2jcwXhGpL6636dff4c3e33bbda090536cdba6d728.png",
              name: "宝拉",
              contact: "18810442532",
            },
            {
              id: 10002,
              avatar:
                "http://img.qijin.tech/2mm5hvm506BN66db4ba3fdeb95db069e5fb5197f630b.png",
              name: "阿泽",
              contact: "18810442532",
            },
            {
              id: 10001,
              avatar:
                "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
              name: "德善",
              contact: "18810442532",
            },
            {
              id: 10003,
              avatar:
                "http://img.qijin.tech/aGw2jcwXhGpL6636dff4c3e33bbda090536cdba6d728.png",
              name: "宝拉",
              contact: "18810442532",
            },
          ],
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    onDetail(activityId) {
      console.log(activityId);
      uni.navigateTo({
        url: "./detail/index?activityId=" + activityId,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data);
          },
          someEvent: function(data) {
            console.log(data);
          },
        },
        success: function(res) {
          console.log("success", res);
        },
        fail: function(res) {
          console.log("fail", res);
        },
      });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
}

.title {
  font-weight: bold;
  margin-right: 20rpx;
}

.activity-item {
  margin-top: 10rpx;
  margin-bottom: 40rpx;
  border-bottom: 10rpx #ccc solid;
  padding-bottom: 10rpx;
}
.activity-list {
  padding: 40rpx;
}

.activity-title {
  font-size: 40rpx;
  font-weight: bold;
  color: rgb(193, 99, 0);
}

.activity-tags {
  display: flex;
}

.activity-tags .activity-tag {
  margin-top: 10rpx;
  background-color: gray;
  padding: 2rpx 15rpx;
  border-radius: 10rpx;
  margin-right: 10rpx;
  color: white;
}

.activity-sponsor {
  display: flex;
  align-items: center;
  margin-top: 10rpx;
}

.activity-sponsor image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}

.activity-date {
  margin-top: 10rpx;
}

.activity-addr {
  margin-top: 10rpx;
}

.activity-description {
  margin-top: 10rpx;
  border-top: 1rpx #ddd solid;
  padding-top: 10rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  color: gray;
}

.activity-participants {
  display: flex;
  align-items: center;
  margin-top: 10rpx;
  border-top: 1rpx #ddd solid;
  padding-top: 10rpx;
}
.activity-participant image {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  border: 4rpx white solid;
  margin-left: -15rpx;
}
</style>
