import React from 'react';
import { 
  ReactiveBase, 
  NumberBox, 
  DateRange, 
  RangeSlider, 
  ResultCard 
} from '@appbaseio/reactivesearch'; 
import './App.css';

export default() => (
  <div className="container">
    <ReactiveBase
      app="React100Airbeds"
      credentials="2sw2k10ab:4b72e0d3-2bad-4e77-85a5-e6c5357c9d27"
      theme={{
        primaryColor: '#FF3A4E'
      }}
    >
      <nav className="nav">
        <div className="title">AirShips
        </div>
        {/* <DataSearch
            componentId="search"
            dataField="name"
            placeholder="Search housings..."
            iconPosition="left"
        /> */}
      </nav>
      <div className="left-col">
        <DateRange
          dataField="date_from"
          componentId="DateRangeSensor"
          title="When"
          numberOfMonths={2}
          queryFormat="basic_date"
          initialMonth={new Date('05-12-2019')}
         />

         <NumberBox 
           componentId="GuestSensor"
           dataField="accommodates"
           title="Guests"
           defaultSelected={2}
           labelPosition="right"
           data={{
             start: 1,
             end: 16,
           }}
         />

         <RangeSlider 
           componentId="PriceSensor"
           dataField="price"
           title="Price Range"
           range={{
             start: 10,
             end: 250
           }}
           rangeLabels={{
             start: '$10',
             end: '$250'
           }}
           defaultSelected={{
             start: 10,
             end: 250
           }}
           stepValue={10}
           react={{
             and: ["DateRangeSensor"]
           }}
         />
      </div>

      <ResultCard 
        className="right-col"
        componentId="SearchResults"
        dataField="name"
        size={12}
        onData={data => ({
          image: data.image,
          title: data.name,
          description: (
            <div>
              <div className="price">{data.price}</div>
              <p className="info">{data.room_type} · {data.accommodates} guests</p>
            </div>
          ),
          url: data.listing_url,
        })}
        pagination
        react={{
          and: ['GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
        }}
        innerClass={{
          resultStats: 'result-stats',
          list: 'list',
          listItem: 'list-item',
          image: 'image',
        }}
      />
    </ReactiveBase>
  </div>
);
