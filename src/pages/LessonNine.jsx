import { useAnimate } from 'motion/react';
import React, { useEffect } from 'react';

const LessonNine = () => {
    const [scope, animate] = useAnimate();
    const handleClick = () =>{
      //  animate(scope.current, {rotate:45})
      animate([
        [scope.current, {rotate:45}],
        [scope.current, {opacity:0}],
        [scope.current, {rotate:45}],
        [scope.current, {opacity:1}],
        [scope.current, {rotate:90}],
        [scope.current, {x:200}],
        [scope.current, {x:-200}],
        [scope.current, {x:0}],
      ])
    }

    useEffect(()=>{
          animate([
        [scope.current, {rotate:45}],
        [scope.current, {opacity:0}],
        [scope.current, {rotate:45}],
        [scope.current, {opacity:1}],
        [scope.current, {rotate:90}],
        [scope.current, {x:200}],
        [scope.current, {x:-200}],
        [scope.current, {x:0}],
      ])
    },[])

    return (
        <div className='size-[500px] border border-red-500 flex justify-center mx-auto items-center  '>
            <div className='size-44 bg-indigo-500 rounded flex justify-center items-center'
            ref={scope}
           onClick={handleClick}
            >

            </div>
        </div>
    );
};

export default LessonNine;