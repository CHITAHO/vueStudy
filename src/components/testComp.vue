<!-- MenuBar.vue -->
<template>
    <div class="menu-bar">
        <ul>
            <li><a @click="clickMenu1">메뉴 항목 1</a></li>
            <li><a @click="clickMenu2">메뉴 항목 2</a></li>
            <li><a @click="clickMenu3">메뉴 항목 3</a></li>
        </ul>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            name: "듀블타이호",
            ocid: undefined,
            union: undefined,
        }
    },
    methods: {
        clickMenu1() {
            var myHeaders = new Headers();
            myHeaders.append("x-nxopen-api-key", "test_d4d23de7e6fac346bd22bd4ab92546054630f3d320bd9b6296d237328f5e0731aabac9b3aa005976c53593c2554ef6f9");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`https://open.api.nexon.com/maplestory/v1/id?character_name=${this.name}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.ocid = JSON.parse(result).ocid;
                    alert(this.ocid)
                }
                )
                .catch(error => console.log('error', error));
        },
        async clickMenu2() {

            var myHeaders = new Headers();
            myHeaders.append("x-nxopen-api-key", "test_d4d23de7e6fac346bd22bd4ab92546054630f3d320bd9b6296d237328f5e0731aabac9b3aa005976c53593c2554ef6f9");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            await fetch(`https://open.api.nexon.com/maplestory/v1/ranking/union?&date=2023-12-26&ocid=${this.ocid}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.union = JSON.parse(result).ranking[0]
                    console.log(this.union)
                }
                )
                .catch(error => console.log('error', error));

            alert(this.union.character_name)
        },
        clickMenu3() {
            alert("메뉴항목 3 클릭")
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
  