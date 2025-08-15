import { css } from "@emotion/react"
import { Avatar, Button, Flex } from "antd"
import { useAnimate, motion } from "motion/react"
import { useState } from "react"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import LandingTestimoniAnimation from "../animation/LandingTestimoniAnimation";

const TestimoniCard = ({width, img, username, testimoni}) => {
  return (
    <div css={css`width: ${width}px; box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.1); padding: 17px 23px; border-radius: 7px;`}>
      <Flex align="center" gap={12} css={css`width: max-content;`}>
        <Avatar size={53} src={img} />
        <h3 css={css`font-size: 17px; font-weight: bold; color: var(--text-color);`}>{username}</h3>
      </Flex>
      <p css={css`margin-top: 14px; font-size: 15px; color: var(--text-color);`}>
        {testimoni}
      </p>
    </div>
  )
}

const LandingTestimoni = () => {
  const [gap, setGap] = useState(0)
  const [gap2, setGap2] = useState(0)
  const [gap3, setGap3] = useState(0)
  const [scope, animate] = useAnimate()
  const [scope2, animate2] = useAnimate()
  const [scope3, animate3] = useAnimate()

  // number of boxs must be odd
  const group = [
    [
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
        username: 'Lawrance',
        testimoni: 'Sistem bookingnya mudah digunakan, saya bisa pesan lapangan kapan saja tanpa ribet.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
        username: 'Amanda',
        testimoni: 'Tampilan websitenya rapi, proses booking cepat dan konfirmasinya langsung muncul.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
        username: 'Rafi',
        testimoni: 'Saya suka fitur jadwal real-time, jadi bisa langsung lihat slot kosong yang tersedia.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=4',
        username: 'Cynthia',
        testimoni: 'Pembayaran gampang banget, bisa pakai e-wallet jadi tidak perlu bawa uang cash.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=5',
        username: 'Budi',
        testimoni: 'Lapangan bersih dan terawat, booking online sangat membantu menghindari antrian.'
      },
    ],
    [
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=6',
        username: 'Dewi',
        testimoni: 'Konfirmasi booking cepat, cocok untuk yang suka main futsal dadakan.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=7',
        username: 'Andi',
        testimoni: 'Saya bisa pesan lapangan malam-malam tanpa harus telpon pengelola, sangat praktis!'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=8',
        username: 'Rina',
        testimoni: 'Informasi lapangan jelas, harga transparan, dan proses bookingnya lancar.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=9',
        username: 'Kevin',
        testimoni: 'Akses websitenya cepat, walaupun di HP tetap nyaman digunakan.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=10',
        username: 'Sinta',
        testimoni: 'Saya suka fitur reminder, jadi tidak lupa dengan jadwal main futsal.'
      },
    ],
    [
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=11',
        username: 'Rio',
        testimoni: 'Booking lapangan jadi lebih mudah, tidak perlu datang langsung hanya untuk pesan.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=12',
        username: 'Melisa',
        testimoni: 'Sangat membantu untuk booking di jam sibuk, karena bisa dilakukan dari rumah.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=13',
        username: 'Dimas',
        testimoni: 'Lapangan nyaman, adminnya responsif, dan sistem bookingnya keren.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=14',
        username: 'Putri',
        testimoni: 'Fitur cek ketersediaan lapangan real-time sangat memudahkan untuk atur jadwal.'
      },
      {
        img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=15',
        username: 'Fajar',
        testimoni: 'Web booking ini bikin hidup lebih mudah, apalagi buat yang sering main futsal rutin.'
      }
    ],
  ]
  const testimoniWidth = 343
  const testimoniGap = 30
  const rightPoint = 100 // starting from let edge of 3rd group
  const leftPoint = -100 // starting from let edge of 1st group
  const groupWidth = (testimoniWidth * group[0].length) + (testimoniGap * (group[0].length - 1)) // counted based on number of testimoni in each group

  const containerStyle = css`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media(min-width: 1300px) {
      -webkit-mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
      );
      mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
    }
  `

  const innerStyle = css`
    display: flex;
    gap: ${testimoniGap}px;
    width: max-content;
  `

  // multiple should be positive integer
  const generateNewNextGapMin = (myGap, siblingGap, multiple) => {
    let newGap
    if(myGap >= 0) {
      newGap = siblingGap - ((groupWidth + testimoniGap - testimoniWidth - testimoniGap) - ((groupWidth + testimoniGap) * multiple))
    } else {
      newGap = siblingGap - ((groupWidth + testimoniGap - testimoniWidth - testimoniGap) - ((groupWidth + testimoniGap)) * (multiple * -1))
    }
    return newGap
  }

  // multiple should be positive integer
  const generateNewNextGapPlus = (myGap, siblingGap, multiple) => {
    let newGap
    if(myGap >= 0) {
      newGap = siblingGap - ((groupWidth + testimoniGap - testimoniWidth - testimoniGap) + ((groupWidth + testimoniGap) * multiple))
    } else {
      newGap = siblingGap - ((groupWidth + testimoniGap - testimoniWidth - testimoniGap) + ((groupWidth + testimoniGap)) * (multiple * -1))
    }
    return newGap
  }

  // multiple should be positive integer
  const generateNewPrevGapMin = (myGap, siblingGap, multiple) => {
    const newGap = siblingGap + ((groupWidth + testimoniGap - testimoniWidth - testimoniGap) + (((groupWidth + testimoniGap) * multiple)))
    return newGap
  }

  // multiple should be positive integer
  const generateNewPrevGapPlus = (myGap, siblingGap, multiple) => {
    const newGap = siblingGap + ((groupWidth + testimoniGap - testimoniWidth - testimoniGap) - (((groupWidth + testimoniGap) * multiple)))
    return newGap
  }

  const handlePrev = () => {
    if(gap >= (rightPoint + ((groupWidth + testimoniGap) * 2))) {
      const newGap = generateNewNextGapMin(gap, gap2, 1)
      animate(scope.current, { x: newGap + 'px'}, { duration: 0})
      setGap(newGap)
    } else {
      const nextGap = gap + (testimoniWidth + testimoniGap)
      animate(scope.current, { x: nextGap + 'px' }, {ease: 'easeOut'})
      setGap(nextGap)
    } 
    
    if(gap2 >= (rightPoint + ((groupWidth + testimoniGap) * 1))) {
      const newGap = generateNewNextGapMin(gap2, gap3, 1)
      animate2(scope2.current, { x: newGap + 'px'}, { duration: 0})
      setGap2(newGap)
    } else {
      const nextGap = gap2 + (testimoniWidth + testimoniGap)
      animate2(scope2.current, { x: nextGap + 'px' }, {ease: 'easeOut'})
      setGap2(nextGap)
    }

    if(gap3 >= rightPoint) {
      const newGap = generateNewNextGapPlus(gap3, gap, 2)
      animate3(scope3.current, { x: newGap + 'px'}, { duration: 0})
      setGap3(newGap)
    } else {
      const nextGap = gap3 + (testimoniWidth + testimoniGap)
      animate3(scope3.current, { x: nextGap + 'px' }, {ease: 'easeOut'})
      setGap3(nextGap)
    }
  }

  const handleNext = () => {
    if(gap <= leftPoint) {
      const newGap = generateNewPrevGapMin(gap, gap3, 2)
      animate(scope.current, { x: newGap + 'px'}, { duration: 0})
      setGap(newGap)
    } else {
      const prevGap = gap - (testimoniWidth + testimoniGap)
      animate(scope.current, { x: prevGap + 'px' }, {ease: 'easeOut'})
      setGap(prevGap)
    } 
    
    if(gap2 <= (leftPoint - ( ((groupWidth + testimoniGap) * 1))) ) {
      const newGap = generateNewPrevGapPlus(gap2, gap, 1)
      animate2(scope2.current, { x: newGap + 'px'}, { duration: 0})
      setGap2(newGap)
    } else {
      const prevGap = gap2 - (testimoniWidth + testimoniGap)
      animate2(scope2.current, { x: prevGap + 'px' }, {ease: 'easeOut'})
      setGap2(prevGap)
    }

    if(gap3 <= (leftPoint - (((groupWidth + testimoniGap) * 2)))) {
      const newGap = generateNewPrevGapPlus(gap3, gap2, 1)
      animate3(scope3.current, { x: newGap + 'px'}, { duration: 0})
      setGap3(newGap)
    } else {
      const prevGap = gap3 - (testimoniWidth + testimoniGap)
      animate3(scope3.current, { x: prevGap + 'px' }, {ease: 'easeOut'})
      setGap3(prevGap)
    }
  }

  return (
    <section css={css`margin-top: 83px; overflow: hidden; @media(min-width: 1281px) {margin-right: 12px; margin-left: 12px;}`}>
      <LandingTestimoniAnimation marginView={250}>
        <Flex align="center" justify="space-between" css={css`max-width: 960px; margin: 0 auto; padding: 0 12px;`}>
          <h2 css={css`font-size: 24px; font-weight: bold; color: var(--text-color);`}>Testimoni</h2>
          <Flex gap={15} css={css`width: max-content;`}>
            <Button onClick={handlePrev} color="default" variant="outlined" size="default" type="primary" icon={<GrFormPrevious css={css`font-size: 32px; color: var(--text-color);`} />} css={css`width: 60px; border-radius: 80px;`} />
            <Button onClick={handleNext} size="default" type="primary" icon={<MdNavigateNext css={css`font-size: 32px;`} />} css={css`width: 60px; border-radius: 80px;`} />
          </Flex>
        </Flex>
        <motion.div 
          drag={"x"}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            const { offset, velocity } = info;
            const swipeThreshold = 50;
            const velocityThreshold = 500;
            if (Math.abs(offset.x) > swipeThreshold || Math.abs(velocity.x) > velocityThreshold) {
              if (offset.x > 0) {
                // Swiped right
                handlePrev()
              } else {
                // Swiped left  
                handleNext()
              }
            }
          }}
          dragElastic={0}
          dragMomentum={false}
          css={containerStyle}
        >
          <div css={css`display: flex; justify-content: center; gap: ${testimoniGap}px; width: max-content; padding-top: 40px; padding-bottom: 100px;`}>
            <div ref={scope} css={innerStyle}>
              {
                group[0].map((e, i) => (
                  <TestimoniCard key={i} width={testimoniWidth} username={e.username} img={e.img} testimoni={e.testimoni} />
                ))
              }
            </div>
            <div ref={scope2} css={innerStyle}>
              {
                group[1].map((e, i) => (
                  <TestimoniCard key={i} width={testimoniWidth} username={e.username} img={e.img} testimoni={e.testimoni} />
                ))
              }
            </div>
            <div ref={scope3} css={innerStyle}>
              {
                group[2].map((e, i) => (
                  <TestimoniCard key={i} width={testimoniWidth} username={e.username} img={e.img} testimoni={e.testimoni} />
                ))
              }
            </div>
          </div>
        </motion.div>
      </LandingTestimoniAnimation>
    </section>
  )
}

export default LandingTestimoni