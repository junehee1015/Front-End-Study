'use strict'

const imgs = [
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/12/03/41/background-1587514_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_960_720.jpg'
]

const selectImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgimg = document.createElement('img');
bgimg.src = selectImg;
bgimg.classList.add('bgimg');

document.body.appendChild(bgimg);
