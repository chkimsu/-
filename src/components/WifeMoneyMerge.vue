<template>
    <div>
      <WifeMoney title="상속 재산 :" ></WifeMoney>
      <WifeMoney title="금융 상속 재산 :"></WifeMoney>
      <WifeMoney title="채무 금액 :" ></WifeMoney>
      <WifeMoney title="감정평가 수수료 :"></WifeMoney>
      <WifeMoney title="장례 비용 :"></WifeMoney>
      <WifeMoney title="세대 생략 상속 비용 :"></WifeMoney>
      <WifeMoney title="공동주택공제금액 :"></WifeMoney>
      <WifeMoney title="재해손실금액 :"></WifeMoney>

    </div>
  </template>
  
  <script>
  import WifeMoney from "@/components/WifeMoney.vue"; // CounterCard 컴포넌트의 경로에 맞게 수정
  
  export default {
    components: {
        WifeMoney
    }
    };
  </script>
  