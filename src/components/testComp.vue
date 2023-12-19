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
    methods: {
        clickMenu1() {
            alert("메뉴항목 1 클릭")
        },
        clickMenu2() {
            alert("메뉴항목 2 클릭")
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
  