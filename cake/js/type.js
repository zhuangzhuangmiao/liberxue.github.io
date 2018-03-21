/**
 * Created by justa on 2017/11/5.
 */
var strings = new Array( "我最爱的铲屎官，生日快乐！么么哒！","壮壮写下这些话,还不知道阿铲看到的时候会在哪里", "阿铲在壮壮心里会发光，还会放热，壮壮最喜欢阿铲了！","过去的两年里，" +
    "壮壮老是惹阿铲生气，阿铲也总是把壮壮弄哭",  "但谁也没有离开谁，时间久了更加觉得分不开了,阿铲成了壮壮的一部分。","曾经很长一段时间，壮壮都觉得我们俩是非常非常不合适的那一类了，两个人都倔，两个都不会" +
    "让步,","壮壮觉得阿铲的脾气太差太差，阿铲觉得壮壮脾气太倔太倔，","可是壮壮定义不了合适是什么，壮壮就只遇到了阿铲，然后只和阿铲在一起，没有谁可以拿来对比，不管怎么样都是最特别的那一个。","反正，我们就很合适很合适啦",
    "同时，壮壮也发现，阿铲身上有壮壮没有的美好，","阿铲勇敢，努力，热爱自己的热爱，","阿铲比壮壮会表达，比壮壮热情，总是主动亲壮壮，从来没有让壮壮吃醋","还有好多好多，这些事情壮壮不说阿铲也看得到，感觉说了一堆废话啦",
    "壮壮肝了一个页面给铲屎官，要是见到她，记得亲一口啦","最后","壮壮爱你，希望阿铲一直幸福快乐"); // This is multi words

var b = 0;
var c = 0;
var isTyping = true;
var i = 0;
var typingSpeed = 200;
var deleteSpeed = 100;
var waitTime = 600;
setTimeout("typing()", waitTime);
var _deleting ;
var _typing;

function typing() {

    document.getElementById("pra").innerHTML = strings[i].substring(c, b);

    if (b == strings[i].length){
       setTimeout("b=0, c=strings[i].length, isTyping=true", waitTime);
    }
    else {
        if (c != 0) {
            c--;
            if (c == 0) {
                i++;
                if (i == strings.length) {
                    document.getElementById("pra").innerHTML = strings[i-1];
                }
            }
        }
        else {

            var isTyping=false;
            b++;
        }
    }

    if (isTyping == false) {
        _typing = setTimeout("typing()", typingSpeed);
    }
    else {
        _deleting = setTimeout("typing()", deleteSpeed);
    }
}