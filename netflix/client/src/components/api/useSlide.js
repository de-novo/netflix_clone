import React, { useState, useEffect } from "react";


// 약간의 fake 를 통한 슬라이드 구현 



function useSlide(movieList = ["리스트를 입력해주세요", "리스트를 입력해주세요", "리스트를 입력해주세요"], viewCount = 1) {
    const [index, setIndex] = useState(0);
    const movieCount = movieList.length;
    const list = [...movieList, ...movieList, ...movieList, ...movieList, ...movieList]; // 1안
    // const list = [ ...movieList,...movieList, ...movieList];  // 2안

    const [nowlist, setNowlist] = useState(list.slice(movieCount * 2 - viewCount-1 + index, movieCount * 2 + viewCount * 2 + index+1)); //1안
    // const [nowlist, setNowlist] = useState(list.slice(movieCount - viewCount + index, movieCount + viewCount * 2 + index+1)); //2안
    // console.log(nowlist);

    const [buttonHandle,setButtonHandle] = useState(0);
    const [className,setClassName] = useState('now');


    useEffect(() => {
        if(buttonHandle===1){
           return setClassName('active-next');
        }else if(buttonHandle===-1){
           return setClassName('active-before');
        }
        return setClassName('now')
        
    }, [buttonHandle])


    useEffect(() => {
        const item = list.slice(movieCount * 2 - viewCount-1 + index, movieCount * 2 + viewCount * 2 + index+1);
        console.log("item:", item);
        return setNowlist(item);
    }, [index]);

    if (!Array.isArray(movieList)) {
        return;
    }

    if (typeof viewCount !== "number") {
        return;
    }

    const next = () => {
        if (index >= movieCount) {
            // console.log(index) //확인용
            return setIndex(index + viewCount - movieCount);
        } else {
            // console.log(index) //확인용
            return setIndex(index + viewCount);
        }
    };
    const before = () => {
    
        if (-1*index >= movieCount) {
            // console.log(index) //확인용
            return setIndex(index - viewCount + movieCount);
        } else {
            // console.log(index) //확인용
            return setIndex(index - viewCount);
        }
    };





    const nextButton=()=>{
        setButtonHandle(1)
        setTimeout(() => {
            setButtonHandle(0)
            next()
        }, 500);
    }
    const beforeButton=()=>{
        setButtonHandle(-1)
        setTimeout(() => {
            setButtonHandle(0)
            before()
        }, 500);
    }






    return {
        nowlist,
        next: next,
        before: before,
        center: viewCount,
        className:className,
        nextButton,
        beforeButton
    };
}

export default useSlide;
