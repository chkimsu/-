<template>
    <WifeMoney></WifeMoney>
    <CounterCardMerge></CounterCardMerge>
    <SamePerson v-on:childEvent="processChildEvent"></SamePerson>
    <WifeMoneyMerge v-if="receivedata"></WifeMoneyMerge>
</template>

<script>


import WifeMoney from '@/components/WifeMoney.vue';
import CounterCardMerge from '@/components/CounterCardMerge.vue';
import WifeMoneyMerge from './WifeMoneyMerge.vue';
import SamePerson from './SamePerson.vue';

export default {


data(){
 return {
    isTrue : true,
    receivedata : null
 }

},

methods:{

    processChildEvent(data){
        this.receivedata = data
        console.log('child로부터 받은 data는 인자로 사용? : data : ', data)
    }
},

components : {
    WifeMoney,
    CounterCardMerge,
    WifeMoneyMerge,
    SamePerson
}

}

</script>