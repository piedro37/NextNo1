
import React from 'react'
import Link from "next/link"
import styled from 'styled-components'

const StyledLink = styled.a`
  &:hover {
    text-decoration: underline
  }
`

export const MyLink = ({href, text}) => {
    return (
        <StyledLink>
            <Link href={href}>
                <a>{text}</a>
            </Link>
        </StyledLink>
    )
}

export default MyLink
