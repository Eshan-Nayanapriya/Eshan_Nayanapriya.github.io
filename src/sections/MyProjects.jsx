import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { PROJECTS } from '../utils/data';
import { div } from 'framer-motion/client';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollBtns = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

  return (
    <section id='projects' className='bg-background mt-14'>
        <div className='container mx-auto px-8 md:px-10 py-10'>
            <div className='w-full lg:w-[60vw] mx-auto'>
                <h4 className='section-title'>Recent Projects</h4>

                <p className='text-sm text-center mt-4 leading-6'>
                    From concept to deployment, these projects showcase my technical expertise.
                    I focus on creating responsive, user-friendly, and visually appealing web applications.
                </p>
            </div>

            <div className='relative'>
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex pt-14 pb-8'>
                        {PROJECTS.map((project) => (
                            <div
                                key={project.id}
                                className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%]'
                                >
                                    <ProjectCard
                                        key={project.id}
                                        title={project.title}
                                        imgUrl={project.image}
                                        tags={project.tags}
                                        />
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MyProjects