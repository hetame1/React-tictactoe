import classNames from 'classnames/bind'
import Section from '../shared/Section'
import { parseISO, format } from 'date-fns'

import { ko } from 'date-fns/locale'

import styles from './Intro.module.scss'
import Text from '../shared/Text'

const cx = classNames.bind(styles)

interface IntroProps {
  groomName: string
  brideName: string
  locationName: string
  date: string
  message: string
}

const Intro = ({
  groomName,
  brideName,
  locationName,
  date,
  message,
}: IntroProps) => {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-persons')}>
        <span>{groomName}</span>
        <IconHeart className={cx('ico-heart')} />
        <span>{brideName}</span>
      </div>

      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{locationName}</span>
      </div>

      <IconFlower className={cx('ico-flower')} />

      {/* <div dangerouslySetInnerHTML={{ __html: message }}></div> */}
      <Text>{message}</Text>
    </Section>
  )
}

export default Intro

const IconHeart = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="24"
      version="1.1"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
          fill="#c0392b"
        />
      </g>
    </svg>
  )
}

const IconFlower = ({ className }: { className: string }) => {
  return (
    <svg
      enableBackground="new 0 0 64 64"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
      className={className}
    >
      <path
        d="M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7  c0-3.9-2.4-7.4-6.7-7.4l0,0c-4.3,0-5.8,3.4-5.8,3.4C30.6,9,29.1,8,29.1,8z"
        fill="#E64C3C"
      />
      <path
        d="  M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7c0-3.9-2.4-7.4-6.7-7.4l0,0  c-4.3,0-5.8,3.4-5.8,3.4"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1  h12c1,0,1.9-1.1,2.1-2.1l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="#8C623B"
      />
      <path
        d="  M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1h12c1,0,1.9-1.1,2.1-2.1  l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="39"
        x2="25"
        y1="47"
        y2="47"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="32.3"
        x2="32.3"
        y1="32.2"
        y2="39.3"
      />
      <path
        d="  M27.9,31.5c0,0,2.2,0.8,4.4,0.8s4.4-0.6,4.4-0.6"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7  c4,0.1,6.4-0.2,8.2-1.3C51.2,33.2,52.3,29,52.8,26.3z"
        fill="#7ABE90"
      />
      <path
        d="M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="#7ABE90"
      />
      <path
        d="  M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7c4,0.1,6.4-0.2,8.2-1.3  C51.2,33.2,52.3,29,52.8,26.3z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="  M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  )
}
