function changeImage(image) {
    document.getElementById('frame_in').src = image;
}

document.addEventListener('DOMContentLoaded', function() {
    

    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var fourth = document.getElementById('fourth');
    var fifth = document.getElementById('fifth');
    
    var food = document.getElementById('Food');

    var food_a = document.getElementById('food_a');
    var food_aa = document.getElementById('food_aa');

    var food_b = document.getElementById('food_b');
    var food_bb = document.getElementById('food_bb');

    var food_c = document.getElementById('food_c');
    var food_cc = document.getElementById('food_cc');

    var food_d = document.getElementById('food_d');
    var food_dd = document.getElementById('food_dd');

    var food_e = document.getElementById('food_e');
    var food_ee = document.getElementById('food_ee');


    // 초기 설정: 첫 번째 음식 정보를 표시
    food_.classList.add('visiblea');
    food__.classList.add('visiblea');
    

    // 첫 번째 음식 항목 클릭 시
    food.addEventListener('click', function() {
        food_.classList.add('visiblea');

        food_a.classList.remove('visiblea');
        food_aa.classList.remove('visiblea');
        food_b.classList.remove('visiblea');
        food_bb.classList.remove('visiblea');
        food_c.classList.remove('visiblea');
        food_cc.classList.remove('visiblea');
        food_d.classList.remove('visiblea');
        food_dd.classList.remove('visiblea');
        food_e.classList.remove('visiblea');
        food_ee.classList.remove('visiblea');
    });
    first.addEventListener('click', function() {
        food_a.classList.add('visiblea');
        food_aa.classList.add('visiblea');

        food_.classList.remove('visiblea');
        food__.classList.remove('visiblea');
        food_b.classList.remove('visiblea');
        food_bb.classList.remove('visiblea');
        food_c.classList.remove('visiblea');
        food_cc.classList.remove('visiblea');
        food_d.classList.remove('visiblea');
        food_dd.classList.remove('visiblea');
        food_e.classList.remove('visiblea');
        food_ee.classList.remove('visiblea');
    });

    // 두 번째 음식 항목 클릭 시
    second.addEventListener('click', function() {
        food_b.classList.add('visiblea');
        food_bb.classList.add('visiblea');

        food_.classList.remove('visiblea');
        food__.classList.remove('visiblea');
        food_a.classList.remove('visiblea');
        food_aa.classList.remove('visiblea');
        food_c.classList.remove('visiblea');
        food_cc.classList.remove('visiblea');
        food_d.classList.remove('visiblea');
        food_dd.classList.remove('visiblea');
        food_e.classList.remove('visiblea');
        food_ee.classList.remove('visiblea');

    });
    third.addEventListener('click', function() {
        food_c.classList.add('visiblea');
        food_cc.classList.add('visiblea');

        food_.classList.remove('visiblea');
        food__.classList.remove('visiblea');
        food_a.classList.remove('visiblea');
        food_aa.classList.remove('visiblea');
        food_b.classList.remove('visiblea');
        food_bb.classList.remove('visiblea');
        food_d.classList.remove('visiblea');
        food_dd.classList.remove('visiblea');
        food_e.classList.remove('visiblea');
        food_ee.classList.remove('visiblea');
    });
    fourth.addEventListener('click', function() {
        food_d.classList.add('visiblea');
        food_dd.classList.add('visiblea');

        food_.classList.remove('visiblea');
        food__.classList.remove('visiblea');
        food_a.classList.remove('visiblea');
        food_aa.classList.remove('visiblea');
        food_b.classList.remove('visiblea');
        food_bb.classList.remove('visiblea');
        food_c.classList.remove('visiblea');
        food_cc.classList.remove('visiblea');
        food_e.classList.remove('visiblea');
        food_ee.classList.remove('visiblea');
    });

    fifth.addEventListener('click', function() {
        food_e.classList.add('visiblea');
        food_ee.classList.add('visiblea');
        
        food_.classList.remove('visiblea');
        food__.classList.remove('visiblea');
        food_a.classList.remove('visiblea');
        food_aa.classList.remove('visiblea');
        food_b.classList.remove('visiblea');
        food_bb.classList.remove('visiblea');
        food_c.classList.remove('visiblea');
        food_cc.classList.remove('visiblea');
        food_d.classList.remove('visiblea');
        food_dd.classList.remove('visiblea');
    });
});