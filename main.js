// Thay đổi nội dung búc thư ở đây
var letterContent =
    "Chúc cậu tất cả những gì tốt đẹp nhất trong năm nay. Những dự định của cậu đều hoàn thành và chúc người trong lòng cậu thương cũng sẽ yêu thương cậu, nắm lấy tay cậu đi qua mọi khó khăn trong cuộc sống này!!!";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
        }, durationWrite * index);
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
    }
});
