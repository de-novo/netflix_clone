import { useState, useEffect } from "react";

// 약간의 fake 를 통한 슬라이드 구현
// 장점? html (DOM)에 비교적 적은 요소들
// 다른 슬라이드들 20개 슬라이드일시 앞뒤로 3배 60개 요소
// 페이크를쓰면 viewCount 의 *3+2 개
// 단점 스테이트가 바뀌어 렌더링이됨 (다른 슬라이드들도 똑같을듯)

// 슬라이드들의 커스텀이 비교적 쉬울수있음
// setting 으로 props로 넘겨주면 container slider item 까지 css 스타일링가능

//아직 구현안된것 dot
//터치 드래그

function useSlide(target = ["리스트를 입력해주세요", "리스트를 입력해주세요", "리스트를 입력해주세요"], viewCount = 1, passNum = 1, delay = 500) {
    const [index, setIndex] = useState(0);
    const [dot, setDot] = useState();
    const movieCount = target.length;
    // viewCount가 너무 커서 리스트 짤림 방지를 위해 3번이 아닌 5번
    const [list,setList] = useState([]);
    const pageNum = movieCount % passNum === 0 ? movieCount / passNum : Math.ceil( movieCount / passNum) ;
    // viewCount 갯수의 3배 +2 개 -이유는 넘겼을때 양옆짤림방지 (패딩있을때)
    const [nowlist, setNowlist] = useState(list.slice(movieCount * 2 - viewCount - 1 + index, movieCount * 2 + viewCount * 2 + index + 1)); //1안
    // console.log(nowlist);

    useEffect(() => {
        setList([...target, ...target, ...target, ...target, ...target])
    }, [target])
    //버튼 핸들러 - ClassName 을 뱉어줌
    const [buttonHandle, setButtonHandle] = useState(0);
    const [className, setClassName] = useState("current");

    // next 버튼을 누르면 1 prev버튼 -1

    useEffect(() => {
        if (buttonHandle === 1) {
            return setClassName("active-next");
        } else if (buttonHandle === -1) {
            return setClassName("active-prev");
        }
        return setClassName("current");
    }, [buttonHandle]);

    useEffect(() => {
        let dotlist = [];
        // let nowPageIndex = index > movieCount ? 0 : index / passNum;
        let nowPageIndex = index > movieCount ? 0 : index / passNum;
        // let nowPageIndex = index / passNum;
        console.log('nowPageIndex',nowPageIndex,'movieCount',movieCount);
        console.log('index',index);
        for (let i = 0; i < pageNum; i++) {
            if (index >= 0) {
                if (i === nowPageIndex) {
                    dotlist.push("●");
                } else {
                    dotlist.push("○");
                }
            }
            if (index < 0) {
                if (i === pageNum + nowPageIndex) {
                    dotlist.push("●");
                } else {
                    dotlist.push("○");
                }
            }
        }
        setDot(dotlist);
        const item = list.slice(movieCount * 2 - viewCount - 1 + index, movieCount * 2 + viewCount * 2 + index + 1);
        // console.log("item:", item);
        // console.log(index);
        return setNowlist(item);
    }, [index,list,movieCount,passNum,viewCount,pageNum]);

    if (!Array.isArray(target)) {
        return;
    }

    if (typeof viewCount !== "number") {
        return;
    }

    
    // const next = () => {
    //     if (index >= movieCount) {
    //         // console.log(index) //확인용
    //         return setIndex(index + passNum - movieCount);
    //     } else {
    //         // console.log(index) //확인용
    //         return setIndex(index + passNum);
    //     }
    // };
    
    // 
    const next = () => {
        if (index+passNum >= movieCount) {
            // console.log(index) //확인용
            return setIndex(0);
        } else {
            // console.log(index) //확인용
            return setIndex(index + passNum);
        }
    };


    // const prev = () => {
    //     if (-1 * index >= movieCount) {
    //         // console.log(index) //확인용
    //         return setIndex(index - passNum + movieCount);
    //     } else {
    //         // console.log(index) //확인용
    //         return setIndex(index - passNum);
    //     }
    // };
    const prev = () => {
        if (-1 * index+passNum >= movieCount) {
            // console.log(index) //확인용
            return setIndex(0);
        } else {
            // console.log(index) //확인용
            return setIndex(index - passNum);
        }
    };

    const nextButton = () => {
        setButtonHandle(1);
        setTimeout(() => {
            setButtonHandle(0);
            next();
        }, delay);
    };
    const prevButton = () => {
        setButtonHandle(-1);
        setTimeout(() => {
            setButtonHandle(0);
            prev();
        }, delay);
    };

    return {
        nowlist,
        dot,
        center: viewCount,
        className: className,
        nextButton,
        prevButton,
    };
}

export default useSlide;
