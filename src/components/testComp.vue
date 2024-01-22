<!-- MenuBar.vue -->
<template>
    <div class="menu-bar">
        <input v-model="userInput" placeholder="닉네임을 입력하세요" @keyup.enter="pressEnter">
        <ul>
            <li><a @click="clickMenu2">본캐 확인</a></li>
        </ul>
        <h2>{{ this.union?.character_name }}</h2>
        <img :src="imgSrc">
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            ocid: undefined,
            union: undefined,
            userInput: '',
            imgSrc: '',
            date: '',
        }
    },
    mounted() {
        this.getParamDate();
    },
    methods: {
        async pressEnter() {
            // 엔터 키 누를 때 실행할 메서드를 호출합니다.
            await this.clickMenu2();
        },
        async clickMenu2() {

            var myHeaders = new Headers();
            myHeaders.append("x-nxopen-api-key", "test_d4d23de7e6fac346bd22bd4ab92546054630f3d320bd9b6296d237328f5e0731aabac9b3aa005976c53593c2554ef6f9");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await fetch(`https://open.api.nexon.com/maplestory/v1/id?character_name=${this.userInput}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.ocid = JSON.parse(result).ocid;
                }
                )
                .catch(error => console.log('error', error));
            await fetch(`https://open.api.nexon.com/maplestory/v1/ranking/union?&date=${this.date}&ocid=${this.ocid}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.union = JSON.parse(result).ranking[0]
                }
                )
                .catch(error => console.log('error', error));
            await fetch(`https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${this.ocid}&date=${this.date}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                }
                )
        },
        getParamDate() {
            // 현재 날짜를 얻습니다.
            const currentDate = new Date();

            // 현재 날짜에서 하루를 빼서 어제의 날짜를 설정합니다.
            const yesterdayDate = new Date();
            yesterdayDate.setDate(currentDate.getDate() - 1);
            // 날짜를 원하는 형식으로 변환합니다 (yy-mm-dd 형식).
            return this.formatDate(yesterdayDate);
        },
        formatDate(date) {
            const year = date.getFullYear().toString().slice(2);
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);

            // this.date = `${year}-${month}-${day}`;
            this.date = year + "-" + month + "-" + day;
        }
    }
}
</script>
  
<style scoped>
/* 스타일을 추가하세요. */
.menu-bar {
    background-color: #333;
    color: #fff;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: inline;
    margin-right: 10px;
}

a {
    color: #fff;
    text-decoration: none;
}
</style>
  