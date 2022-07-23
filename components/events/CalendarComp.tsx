import MaxWidth from '@components/layout/MaxWidth';
import { EventsProps } from '@interfaces/events/Events';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Carousel } from 'react-responsive-carousel';
import 'react-calendar/dist/Calendar.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventCard from './EventCard';

const CalendarComp = ({ events }: EventsProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const changeDate = (e: Date) => {
    setSelectedDate(e);
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const sameDay = eventDate.getDate() === selectedDate.getDate();
    const sameMonth = eventDate.getMonth() === selectedDate.getMonth();
    const sameYear = eventDate.getFullYear() === selectedDate.getFullYear();
    return sameDay && sameMonth && sameYear;
  });

  return (
    <MaxWidth>
      <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12 pt-16">
        <Calendar className=" " onChange={changeDate} value={selectedDate} />
        <div className="w-[360px]">
          {filteredEvents.length > 0 ? (
            <div className=" rounded-lg">
              <Carousel
                showStatus={false}
                showThumbs={false}
                autoPlay
                swipeable
                emulateTouch
                showIndicators
                infiniteLoop={true}
              >
                {filteredEvents.map(
                  ({ coverImage, cardDescription, name, location, date }) => (
                    <div
                      key={name + location + date}
                      className="flex justify-center py-3"
                    >
                      <EventCard
                        coverImage={coverImage}
                        cardDescription={cardDescription}
                        name={name}
                        location={location}
                        date={date}
                      />
                    </div>
                  )
                )}
              </Carousel>
            </div>
          ) : (
            <div className="max-w-xs overflow-hidden text-center">
              <div className="m-12 text-2xl text-gray-400 sm:text-4xl lg:text-4xl">
                {selectedDate.getTime() === new Date().getTime() ? (
                  <>No Events today.</>
                ) : (
                  <>No Events on selected date.</>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </MaxWidth>
  );
};

export default CalendarComp;
