import styled, { css } from 'styled-components'
import { media } from 'components/breakpoints'

interface ITypograhpy {
	bold?: boolean;
	center?: boolean;
	uppercase?: boolean;
}

export const H1 = styled.h1<ITypograhpy>`
	font-size: 2.6rem;
	font-weight: regular;
	line-height: 35px;
	font-family: 'Montserrat', sans-serif;

	${media.xs`
		line-height: 50px;
		font-size: 3.4rem;
	`}
	${media.sm`
		font-size: 3.5rem;
		line-height: 70px;
	`}
	${media.md`
		font-size: 4.6rem;
	`}
	${media.lg`
		font-size: 5.6rem;
	`}
	${media.xl`
		font-size: 7rem;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const H2 = styled.h2<ITypograhpy>`
	font-size: 2.8rem;
	font-weight: regular;
	line-height: 35px;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
	padding: 0;
	letter-spacing: 0.1em;

	${media.xs`
		font-size: 3.5rem;
		line-height: 45px;
	`}
	${media.sm`
		font-size: 4rem;
	`}
	${media.md`
		font-size: 4.5rem;
	`}
	${media.lg`
		font-size: 5rem;
	`}
	${media.xl`
		font-size: 6.5rem;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const H3 = styled.h3<ITypograhpy>`
	font-size: 2rem;
	font-weight: 300;
	line-height: 25px;
	letter-spacing: 2px;
	font-family: 'Montserrat', sans-serif;
	letter-spacing: 0.1em;
	${media.xs`
		font-size: 2.2rem;
		line-height: 35px;
	`}
	${media.sm`
		font-size: 2.6rem;
	`}
	${media.md`
		font-size: 3rem;
	`}
	${media.lg`
		font-size: 3.5rem;
	`}
	${media.xl`
		font-size: 4rem;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const H4 = styled.h4<ITypograhpy>`
	font-size: 1.8rem;
	line-height: 30px;
	letter-spacing: 0.1em;
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	${media.sm`
		font-size: 2rem;
	`}
	${media.md`
		font-size: 2.2rem;
	`}
	${media.lg`
		font-size: 2.2rem;
	`}
	${media.xl`
		font-size: 3.6rem;
		line-height: 40px;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const P1 = styled.p<ITypograhpy>`
	font-size: 1.4rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: light;
	padding: 0;
	margin: 0;
	${media.xs`
		font-size: 1.6rem;
	`}
	${media.sm`
		font-size: 1.8rem;
	`}
	${media.md`
		font-size: 2rem;
	`}
	${media.lg`
		font-size: 2.2rem;
	`}
	${media.xl`
		font-size: 2.8rem;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const P2 = styled.p<ITypograhpy>`
	font-size: 1.6rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: regular;
	line-height: 20px;
	padding: 0;
	margin: 0;
	${media.sm`
		font-size: 1.8rem;
	`}
	${media.md`
		font-size: 2rem;
		line-height: 25px;
	`}
	${media.xl`
		font-size: 2.6rem;
		line-height: 35px;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const P3 = styled.p<ITypograhpy>`
	font-size: 1.5rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: reglar;
	padding: 0;
	margin: 0;

	${media.sm`
		font-size: 1.6rem;
	`}
	${media.md`
		font-size: 1.8rem;
		line-height: 25px;
	`}
	${media.xl`
		font-size: 3rem;
		line-height: 38px;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.bold && css`
		font-weight: 600;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const P4 = styled.p<ITypograhpy>`
	font-size: 1.4rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: regular;
	margin: 0;
	padding: 0;
	
	${media.sm`
		font-size: 1.5rem;
	`}
	${media.md`
		font-size: 1.6rem;
		line-height: 20px;
	`}
	${media.xl`
		font-size: 2.2rem;
		line-height: 25px;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const P5 = styled.p<ITypograhpy>`
	font-size: 1.2rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: regular;
	${media.xs`
	`}
	${media.sm`
		font-size: 1.2rem;
	`}
	${media.md`
		font-size: 1.4rem;
	`}
	${media.xl`
		font-size: 1.8rem;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

// Block Typography
export const P2Block = styled.div<ITypograhpy>`
	font-size: 1.6rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: regular;
	line-height: 20px;
	padding: 0;
	margin: 0;
	${media.sm`
		font-size: 1.8rem;
	`}
	${media.md`
		font-size: 2rem;
		line-height: 25px;
	`}
	${media.xl`
		font-size: 2.6rem;
		line-height: 35px;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => css`
		color: ${props.color}
	`}
`

export const P4Block = styled.div<ITypograhpy>`
	font-size: 1.4rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: regular;
	line-height: 18px;
	margin: 0;
	padding: 0;
	
	${media.sm`
		font-size: 1.5rem;
		line-height: 20px;
	`}
	${media.md`
		font-size: 1.6rem;
	`}
	${media.xl`
		font-size: 2.2rem;
		line-height: 30px;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.center && css`
		text-align: center;
	`}
	${props => css`
		color: ${props.color}
	`}
`