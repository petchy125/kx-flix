'use client';

import Image from 'next/image';
import _truncate from 'lodash.truncate';
import _shuffle from 'lodash.shuffle';
import { useState } from 'react';

import Card from '../card';
import { Show } from '@/type/type';
import { getSafeImageUrl } from '@/lib/util';
// import ShowModal from './show-modal';

interface Collection {
  title: string;
  shows: Show[];
}

interface CollectionsProps {
  collections: Collection[];
  searchedResults: Show[];
}

const TRUNCATE_OPTIONS = { length: 149 };

export default function Collections({
  collections,
  searchedResults,
}: CollectionsProps) {
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedShow, setSelectedShow] = useState<Show>({} as Show);

  if (searchedResults.length > 0) {
    return (
      <Card.Group>
        <Card>
          <Card.Entities className="flex-wrap justify-center gap-y-12">
            {searchedResults.map((show) => {
              const src = getSafeImageUrl(show.backdrop_path);
              return (
                <Card.Item
                  key={show.id}
                >
                  {/* <Image
                    width={305}
                    height={200}
                    src={src}
                  /> */}
                  <Card.Meta>
                    <Card.SubTitle>{show.title ?? show.name}</Card.SubTitle>
                    <Card.Text>
                      {_truncate(show.overview ?? '', TRUNCATE_OPTIONS)}
                    </Card.Text>
                  </Card.Meta>
                </Card.Item>
              );
            })}
          </Card.Entities>
        </Card>
      </Card.Group>
    );
  }

  return (
    <Card.Group>
      {collections.map((collection) => (
        <Card key={collection.title}>
          <Card.Title>{collection.title}</Card.Title>
          <Card.Entities>
            {/* temporarily cut off shows */}
            {collection.shows.slice(0, 5).map((show) => {
              const src = getSafeImageUrl(show.backdrop_path);
              return (
                <Card.Item
                  onClick={() => {
                    setToggleModal(true);
                    setSelectedShow(show);
                  }}
                  className="max-w-[305px] w-full"
                  data-testid="item"
                  key={show.id}
                >
                  {/* <Image
                    width={305}
                    height={200}
                    loader={src}
                    src={src}
                  /> */}
                  <Card.Meta>
                    <Card.SubTitle>{show.title ?? show.name}</Card.SubTitle>
                    <Card.Text>
                      {_truncate(show.overview ?? '', TRUNCATE_OPTIONS)}
                    </Card.Text>
                  </Card.Meta>
                </Card.Item>
              );
            })}
          </Card.Entities>
        </Card>
      ))}
      {/* <ShowModal
        key={selectedShow.id}
        show={selectedShow}
        toggle={toggleModal}
        toggleHandler={setToggleModal}
      /> */}
    </Card.Group>
  );
}
