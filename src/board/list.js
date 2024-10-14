import axios from 'axios';

// API 서버에서 게시물 목록 조회
async function getList() {
    const list = await axios.get('https://11.fesp.shop/posts');
    console.log(list);
}

// 조회한 게시물 목록으로 화면에 출력
function renderList() {
    const list = getList();
}

renderList();