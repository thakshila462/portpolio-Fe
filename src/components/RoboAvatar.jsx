import React, { useState, useEffect, useRef } from 'react';

function RoboAvatar() {
    const avatarRef = useRef(null);
    const [eyeTransform, setEyeTransform] = useState('translate(0, 0)');
    const [bodyTransform, setBodyTransform] = useState('rotateX(0deg) rotateY(0deg)');

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!avatarRef.current) return;

            const rect = avatarRef.current.getBoundingClientRect();
            const avatarCenterX = rect.left + rect.width / 2;
            const avatarCenterY = rect.top + rect.height / 2;

            const deltaX = e.clientX - avatarCenterX;
            const deltaY = e.clientY - avatarCenterY;

            // Eyes movement (Pupils translation)
            const moveX = Math.max(-8, Math.min(8, deltaX / 20));
            const moveY = Math.max(-8, Math.min(8, deltaY / 20));
            setEyeTransform(`translate(${moveX}px, ${moveY}px)`);

            // 3D Motion Tilt Angle
            const rotateX = Math.max(-20, Math.min(20, -deltaY / 15));
            const rotateY = Math.max(-20, Math.min(20, deltaX / 15));
            setBodyTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        };

        const handleMouseLeave = () => {
            setEyeTransform('translate(0px, 0px)');
            setBodyTransform('rotateX(0deg) rotateY(0deg)');
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={avatarRef}
            className="robo-3d-container"
            style={{ transform: bodyTransform }}
        >
            {/* Robot Head */}
            <div className="robo-head">
                <div className="ear ear-left"></div>
                <div className="ear ear-right"></div>

                {/* Dark Blue Face Screen */}
                <div className="robo-screen">
                    <div className="eyes-wrapper">
                        <div className="glow-eye">
                            <div className="eye-pupil" style={{ transform: eyeTransform }}></div>
                        </div>
                        <div className="glow-eye">
                            <div className="eye-pupil" style={{ transform: eyeTransform }}></div>
                        </div>
                    </div>
                    {/* Cute Cyan Smile */}
                    <div className="robo-smile"></div>
                </div>
            </div>

            {/* Neck Ring */}
            <div className="robo-neck-ring"></div>

            {/* Chubby White Body & Cute Arms */}
            <div className="robo-body">
                <div className="robo-arm arm-l"></div>
                <div className="robo-arm arm-r"></div>
            </div>

            {/* Cute Short Legs */}
            <div className="robo-legs-container">
                <div className="robo-leg"></div>
                <div className="robo-leg"></div>
            </div>
        </div>
    );
}

export default RoboAvatar;