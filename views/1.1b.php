<?php
include_once './index.php';

?>
<div class="ht-container ht-border">
    <div class="my-container">
        <form action="" class="ht-auth ht-col-">
            <div class="ht-title">
                TripFun <span style="font-size: 23px;">로그인</span>
            </div>
            <a href="#" class="ht-btn ht-btn-t1 talk"><img src="../public/img/ht-images/kakaotalk-logo.png" alt="" class="ht-icon" > 카카오로 로그인</a>
            <a href="#" class="ht-btn ht-btn-t1 nav"> <img src="../public/img/ht-images/naver.png" style="height: 14px;" class="ht-icon">네이버로 로그인</a>
            <a href="#" class="ht-btn ht-btn-t1 fb"> <div class="nl-fb nl-icon ht-icon" style="left: 11px;"></div>페이스북으로 로그인</a>
            <span class="sub-title">되면</span>
            <input type="text" class="ht-input" placeholder="이메일 주소">
            <input type="password" class="ht-input" placeholder="비밀번호">
            <div class="ht-option">
                <div class="ht-checkgroup">
                    <input type="checkbox" name="" id="save_pass" hidden>
                    <span class="ht-checkbox"></span>
                    <label for="save_pass">로그인 상태유지</label>
                </div>
                <a>
                    비밀번호 찾기
                </a>
            </div>
            <button class="ht-btn ht-btn-t2">로그인</button>
            <div class="ht-bot">
                <p>지금 회원가입을 하셔서 즐거운 </br>할인쿠폰&이벤트 혜택을 받으세요!</p>
                <a href="#">회원가입</a>
            </div>
        </form>
    </div>
</div>

<?php
include_once '../includes/footer.php';
?>