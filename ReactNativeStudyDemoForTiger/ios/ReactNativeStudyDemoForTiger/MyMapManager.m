//
//  MyMapManager.m
//  ReactNativeStudyDemoForTiger
//
//  Created by 郭虎 on 16/10/11.
//  Copyright © 2016年 Facebook. All rights reserved.
//



#import "MyMapManager.h"
#import <MapKit/MapKit.h>
#import "RCTViewManager.h"
#import "RCTConvert.h"
#import "RCTMap.h"

@implementation RCTConvert(CoreLocation)

RCT_CONVERTER(CLLocationDegrees, CLLocationDegrees, doubleValue);
RCT_CONVERTER(CLLocationDistance, CLLocationDistance, doubleValue);

+ (CLLocationCoordinate2D)CLLocationCoordinate2D:(id)json
{
  json = [self NSDictionary:json];
  return (CLLocationCoordinate2D){
    [self CLLocationDegrees:json[@"latitude"]],
    [self CLLocationDegrees:json[@"longitude"]]
  };
}

@end

@implementation RCTConvert(MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json
{
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json
{
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}
@end

@interface MyMapManager() <MKMapViewDelegate>
@end
@implementation MyMapManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RCTMap){
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)


- (UIView *)view{
  RCTMap *map =  [[RCTMap alloc] init];
  map.delegate = self;
  return map;
}

- (void)mapView:(RCTMap *)mapView regionDidChangeAnimated:(BOOL)animated{
  if (!mapView.onChange) {
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  mapView.onChange(@{
                     @"region": @{
                         @"latitude": @(region.center.latitude),
                         @"longitude": @(region.center.longitude),
                         @"latitudeDelta": @(region.span.latitudeDelta),
                         @"longitudeDelta": @(region.span.longitudeDelta),
                         }
                     });
}


@end

