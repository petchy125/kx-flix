"use client";

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation'
import { getSearchedResult, getShow } from '@/lib/fetcher';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { auth,signOut } from '@/lib/firebase';
// import logo from '../logo.svg';
// import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import Collections from '@/components/collections';
export function BrowseContainer({ slides }) {

  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  // const { auth,signOut } = useContext(FirebaseContext);
  const user = auth.currentUser || {};
  const history = useRouter();
  // const allShows = await getShow('tv');
  // const searchedResults = await getSearchedResult(searchParams?.search ?? '');
  // const randomShow = getRandomShow(allShows.netflix);

  // const collections = [
  //   { title: 'Trending', shows: allShows.trending },
  //   { title: 'Top Rated', shows: allShows.topRated },
  //   { title: 'Comedy', shows: allShows.comedy },
  //   { title: 'Romance', shows: allShows.romance },
  //   { title: 'Documentary', shows: allShows.docs },
  // ];

  useEffect(
    () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    },
    [profile.displayName]
  );
  useEffect(
    () => {
      setSlideRows(slides[category]);
    },
    [slides, category]
  );
  useEffect(
    () => {
      const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
      const results = fuse.search(searchTerm).map(({ item }) => item);
      if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
        setSlideRows(results);
      } else {
        setSlideRows(slides[category]);
      }
    },
    [searchTerm]
  );
  return profile.displayName ? (
    <>
      {loading ? <Loading src={'1'} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={'/images/logo.svg'} alt="Netflix" />
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => history.push('/series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => history.push('/film')}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={'1'} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={'1'} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {
                    // signOut();
                    history.push(ROUTES.HOME);
                    }}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map(item => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
       {/* {searchedResults.length < 1 && null}
        <Collections
          collections={collections}
          searchedResults={searchedResults}
        /> */}
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
