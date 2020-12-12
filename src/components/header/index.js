import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
	Background,
	Profile,
	Dropdown,
	Container,
	Logo,
	Picture,
	Group,
	ButtonLink,
	Feature,
	FeatureCallout,
	Text,
	Link,
	Search,
	SearchIcon,
	SearchInput,
	PlayButton
}	from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallout = function HeaderFeatureCallout({ children, ...restProps }) {
	return <FeatureCallout {...restProps}>{children}</FeatureCallout>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
	return <Picture {...restProps} src={`/images/users/${src}.png`} />;
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps}) {
	const [searchActive, setSearchActive] = useState(false);
	return (
		<Search {...restProps}>
			<SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
				<img src="/images/icons/search.png" alt="Search" />
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search films and series"
				active={searchActive}
			/>
		</Search>
	);
}

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderFrameGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	)
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return (
		<ButtonLink {...restProps}>{children}</ButtonLink>
	);
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return (
		<Dropdown {...restProps}>{children}</Dropdown>
	);
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return (
		<PlayButton {...restProps}>{children}</PlayButton>
	);
}
