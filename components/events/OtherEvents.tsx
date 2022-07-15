// type
import { EventsProps } from '@interfaces/events/Events';

// library
import { Fragment } from 'react';

// code
import MaxWidth from '@components/layout/MaxWidth';
import EventCard from '@components/events/EventCard';

const OtherEvents = ({ events }: EventsProps) => {
  return (
    <MaxWidth>
      <div className="mt-40 flex flex-wrap justify-center gap-10">
        {events.map(
          ({ coverImage, cardDescription, name, location, date }, index) => (
            <Fragment key={index}>
              <EventCard
                coverImage={coverImage}
                cardDescription={cardDescription}
                name={name}
                location={location}
                date={date}
              />
            </Fragment>
          )
        )}
      </div >
    </MaxWidth>
  );
};

export default OtherEvents;
