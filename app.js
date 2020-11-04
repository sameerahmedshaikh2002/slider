let plus = 0;
let images = [
    "image/images (2).jpeg",
    "image/IMG-20200120-WA0004.jpg",
    "image/Screenshot_2019-11-18-21-23-38-1357532062_EDIT_1.png",
    "image/Screenshot_2019-12-06-08-12-56-0688396880.png",
    "image/vlcsnap-2020-06-19-23h34m40s131.png",
    "image/vlcsnap-2020-10-25-21h35m54s899.png",
    "image/2_pic.png",
    "image/3_pic.png",
    "image/4_pic.png",
    "image/5_pic.png",
    "image/BeautyPlus_20191124183129381_save.jpg",
    "image/BeautyPlus_20191124183332407_save.jpg",
    "image/BeautyPlus_20191125195200305_save.jpg",
    "image/BeautyPlus_20200111145429752_save.jpg",
    "image/BeautyPlus_20200111145447978_save.jpg",
    "image/BeautyPlus_20200111145456134_save.jpg",
    "image/IMG-20200120-WA0004.jpg",
    "image/IMG_20191101_142909_effect.jpg",
    "image/IMG_20191101_193651_effect.jpg",
    "image/IMG_20191101_193757_effect.jpg",
    "image/IMG_20191101_193833_effect.jpg",
    "image/IMG_20191101_193841_effect.jpg",
    "image/IMG_20191102_093707_effect.jpg",
    "image/IMG_20191102_141607_effect_LL.jpg",
    "image/IMG_20191102_141619_effect_LL.jpg",
    "image/IMG_20191102_142214_effect.jpg",
];
function next() {
        let img = document.getElementById("IMG");
        img.setAttribute("height",'500px')
        img.setAttribute("width",'500px')
        img.setAttribute('src',images[plus++])
           if (plus === 26)  {
               plus = 0
           }
}
function back() {
    let img = document.getElementById("IMG");
    img.setAttribute('src',images[plus--])
    if (plus === 0)  {
        plus = 26
    }
}

