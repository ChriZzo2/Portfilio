import {motion} from "framer-motion";


type stairProps = {
    initial: { top: string }
    animate: { top: string }
    exit: { top: Array<string> }
}

const stairAnimation: stairProps = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }

}

const referseIndex = (index: number) => {
    const totalSteps = 6
    return totalSteps - index
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (<motion.div
                        key={index}
                        variants={stairAnimation}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: referseIndex(index)*0.04,
                        }}
                        className='h-full w-full bg-white relative'
                    />
                )
            })}
        </>
    );
};

export default Stairs;