import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaTwitch,  FaGoodreads, FaYoutube, FaInstagram } from 'react-icons/fa'
import { SiLetterboxd } from 'react-icons/si'

import * as config from 'lib/config'
import styles from './styles.module.css'

interface Props {

}

export const SocialLinks = (props: Props) => {
  return (
    <>
      {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

    </>
  )
}
