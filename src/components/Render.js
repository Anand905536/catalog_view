import React, { useState, useEffect, useRef } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Img1 from './assets/image1.jpg'
import Img2 from './assets/image2.jpg'
import Img3 from './assets/image3.jpg'
import Img4 from './assets/image4.jpg'
import Img5 from './assets/image5.jpg'
import Img6 from './assets/image6.jpg'
import './render.css'


const ImageCarousel = () => {
    const [images, setImages] = useState([
        {
            src: Img1,
            heading: "Water Side Villas",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius qui laborum recusandae, non dolore, nihil iusto cumque necessitatibus deleniti ea architecto enim ipsa modi sequi repudiandae, perspiciatis iste tempore molestias aliquid alias. Repellat in doloremque, culpa rerum minus et, architecto quam pariatur doloribus at dolores, recusandae dolorem quae. Perspiciatis et ex quaerat esse dolorum laborum. Laborum quia dolore optio dolorem repellendus, illum non dignissimos voluptatibus praesentium explicabo autem magni molestias odit quos in cumque beatae suscipit amet nostrum nobis inventore ab illo consectetur? Impedit voluptatibus tempore quos provident? Laudantium eos amet tempora ullam exercitationem soluta quam vel, maiores quia?",
            alt: "Image 1"
        },
        {
            src: Img2,
            heading: "Maldives Hut",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius qui laborum recusandae, non dolore, nihil iusto cumque necessitatibus deleniti ea architecto enim ipsa modi sequi repudiandae, perspiciatis iste tempore molestias aliquid alias. Repellat in doloremque, culpa rerum minus et, architecto quam pariatur doloribus at dolores, recusandae dolorem quae. Perspiciatis et ex quaerat esse dolorum laborum. Laborum quia dolore optio dolorem repellendus, illum non dignissimos voluptatibus praesentium explicabo autem magni molestias odit quos in cumque beatae suscipit amet nostrum nobis inventore ab illo consectetur? Impedit voluptatibus tempore quos provident? Laudantium eos amet tempora ullam exercitationem soluta quam vel, maiores quia?",
            alt: "Image 2"
        },
        {
            src: Img3,
            heading: "Waterway's Side",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius qui laborum recusandae, non dolore, nihil iusto cumque necessitatibus deleniti ea architecto enim ipsa modi sequi repudiandae, perspiciatis iste tempore molestias aliquid alias. Repellat in doloremque, culpa rerum minus et, architecto quam pariatur doloribus at dolores, recusandae dolorem quae. Perspiciatis et ex quaerat esse dolorum laborum. Laborum quia dolore optio dolorem repellendus, illum non dignissimos voluptatibus praesentium explicabo autem magni molestias odit quos in cumque beatae suscipit amet nostrum nobis inventore ab illo consectetur? Impedit voluptatibus tempore quos provident? Laudantium eos amet tempora ullam exercitationem soluta quam vel, maiores quia?",
            alt: "Image 3"
        },
        {
            src: Img5,
            heading: "Roadside",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius qui laborum recusandae, non dolore, nihil iusto cumque necessitatibus deleniti ea architecto enim ipsa modi sequi repudiandae, perspiciatis iste tempore molestias aliquid alias. Repellat in doloremque, culpa rerum minus et, architecto quam pariatur doloribus at dolores, recusandae dolorem quae. Perspiciatis et ex quaerat esse dolorum laborum. Laborum quia dolore optio dolorem repellendus, illum non dignissimos voluptatibus praesentium explicabo autem magni molestias odit quos in cumque beatae suscipit amet nostrum nobis inventore ab illo consectetur? Impedit voluptatibus tempore quos provident? Laudantium eos amet tempora ullam exercitationem soluta quam vel, maiores quia?",
            alt: "Image 3"
        },
        {
            src: Img6,
            heading: "Near Black hole",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius qui laborum recusandae, non dolore, nihil iusto cumque necessitatibus deleniti ea architecto enim ipsa modi sequi repudiandae, perspiciatis iste tempore molestias aliquid alias. Repellat in doloremque, culpa rerum minus et, architecto quam pariatur doloribus at dolores, recusandae dolorem quae. Perspiciatis et ex quaerat esse dolorum laborum. Laborum quia dolore optio dolorem repellendus, illum non dignissimos voluptatibus praesentium explicabo autem magni molestias odit quos in cumque beatae suscipit amet nostrum nobis inventore ab illo consectetur? Impedit voluptatibus tempore quos provident? Laudantium eos amet tempora ullam exercitationem soluta quam vel, maiores quia?",
            alt: "Image 3"
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const intervalRef = useRef(null);



    //   for previous
    const handlePrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };


    //   for next
    const handleNext = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    //   on image click
    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        setIsPlaying(false);
    };




    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                handleNext();
            }, 3000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPlaying, currentIndex]);


    //   play/pause button
    const handlePlayPauseClick = () => {
        setIsPlaying(!isPlaying);
    };



    const renderThumbnail = (image, index) => {
        const thumbnailClassName =
            currentIndex === index ? "thumbnail_selected" : "thumbnail";
        return (
            <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={thumbnailClassName}
                onClick={() => handleThumbnailClick(index)}
            />
        );
    };

    return (
        <>
            {/* main image and thier content */}
            <div className="main-image">
                <img className="image" src={images[currentIndex].src} alt={images[currentIndex].alt} />
                <div className="image_detail">
                    <h2 className="heading">{images[currentIndex].heading}</h2>
                    <div className="caption">{images[currentIndex].caption}</div>
                </div>
            </div>



            {/* footer side  */}
            <div className="footer">
                <ArrowLeftIcon sx={{fontSize:'60px',marginTop:'15px'}} className="back" onClick={handlePrevious} />
                <div className="thumbnails">{images.map(renderThumbnail)}</div>
                <ArrowRightIcon sx={{fontSize:'60px',marginTop:'15px'}} className="forward" onClick={handleNext} />
                <div className="controls">
                    {
                        isPlaying ? <PauseCircleIcon sx={{fontSize:'60px',marginTop:'15px',marginLeft:'200px'}} onClick={handlePlayPauseClick} />
                         : <PlayCircleIcon sx={{fontSize:'60px',marginTop:'15px',marginLeft:'200px'}} onClick={handlePlayPauseClick} />
                    }
                </div>
            </div>
        </>
    );
};

export default ImageCarousel;
