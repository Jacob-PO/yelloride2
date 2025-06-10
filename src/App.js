import React, { useState, useEffect } from 'react';
import { MapPin, Users, Luggage, Calendar, Clock, CreditCard, Check, ChevronRight, ChevronLeft, Plane, Car, Phone, Mail, AlertCircle, X } from 'lucide-react';

// 실제 엑셀 데이터 기반 경로 정보
const routeData = {
  "NY": [
    {
      "departure": "NY 자메이카",
      "arrival": "NY 존에프케네디 공항 - JFK airport",
      "reservationFee": 20,
      "localPaymentFee": 35,
      "departureIsAirport": false,
      "arrivalIsAirport": true
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 맨하탄 미드타운 - Manhattan Midtown",
      "reservationFee": 20,
      "localPaymentFee": 75,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 맨하탄 다운타운/업타운 - Manhattan Downtown/Uptown",
      "reservationFee": 20,
      "localPaymentFee": 80,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 브루클린 - Brooklyn",
      "reservationFee": 20,
      "localPaymentFee": 55,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 라과디아 공항 - LGA Airport",
      "reservationFee": 20,
      "localPaymentFee": 45,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 시카커스 - Secaucus",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 라과디아 공항 호텔 - LGA airport hotel",
      "reservationFee": 20,
      "localPaymentFee": 45,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 존에프케네디 공항 호텔 - JFK airport hotel",
      "reservationFee": 20,
      "localPaymentFee": 40,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 뉴와크 공항 - EWR airport",
      "reservationFee": 20,
      "localPaymentFee": 150,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 롱시티/루스벨트아일랜드 - Long Island City/Roosevelt lsland",
      "reservationFee": 20,
      "localPaymentFee": 55,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 우드/서니사이드 - Woodside/Sunnyside",
      "reservationFee": 20,
      "localPaymentFee": 50,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 잭슨하이츠/아스토리아 - Jackson Heights/Astoria",
      "reservationFee": 20,
      "localPaymentFee": 50,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 엘머스트/포레스트힐 - Elmhurst/Foresthill",
      "reservationFee": 20,
      "localPaymentFee": 50,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 플러싱 - Flushing",
      "reservationFee": 20,
      "localPaymentFee": 40,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 유니언데일 - Uniondale",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY UBS 아레나 - UBS Arena",
      "reservationFee": 20,
      "localPaymentFee": 45,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 자메이카 - NY Jamaica",
      "reservationFee": 20,
      "localPaymentFee": 35,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 베이사이드/프레시메도우 - Bayside/Fresh Meadows",
      "reservationFee": 20,
      "localPaymentFee": 40,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 화이트 플레인스 - White Plains",
      "reservationFee": 20,
      "localPaymentFee": 100,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 그레이트넥/리틀넥 - Great Neck/Little Neck",
      "reservationFee": 20,
      "localPaymentFee": 45,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 브롱스 - Bronx",
      "reservationFee": 20,
      "localPaymentFee": 90,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 용커스/라이 - Yonkers/Rye",
      "reservationFee": 20,
      "localPaymentFee": 85,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 태리타운 - Tarrytown",
      "reservationFee": 20,
      "localPaymentFee": 110,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 시오셋/웨스트버리 - Syosset/Westbury",
      "reservationFee": 20,
      "localPaymentFee": 75,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 스토니 브룩 - Stony Brook",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 스테이튼 아일랜드 - Staten Island",
      "reservationFee": 20,
      "localPaymentFee": 85,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 가든 시티/로슬린 - Garden City/Roslyn",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 아이슬립 - Islip",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 타판 - Tappan",
      "reservationFee": 20,
      "localPaymentFee": 135,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 시라큐즈 - Syracuse",
      "reservationFee": 40,
      "localPaymentFee": 625,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 포킵시 - Poughkeepesie",
      "reservationFee": 30,
      "localPaymentFee": 230,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 나약 - Nyack",
      "reservationFee": 20,
      "localPaymentFee": 135,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 이타카 - Ithaca",
      "reservationFee": 40,
      "localPaymentFee": 610,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 팰리세이즈 파크/레오니아 - Palisades Park/Leonia",
      "reservationFee": 20,
      "localPaymentFee": 115,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 에지워터/포트리 - Edgewater/Fort Lee",
      "reservationFee": 20,
      "localPaymentFee": 115,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 클리프사이드파크/리지필드 - Cliffside Park/Ridgefield",
      "reservationFee": 20,
      "localPaymentFee": 115,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 호보큰/저지시티 - Hoboken/Jersey City",
      "reservationFee": 20,
      "localPaymentFee": 125,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 위호큰/웨스트뉴욕 - Weehawken/West Newyork",
      "reservationFee": 20,
      "localPaymentFee": 125,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 유니언 시티/노스버겐 - Union City/North Bergen",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 린허스트/크레스킬 - Lyndhurst/Cresskill",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 잉글우드/리치필드파크 - Englewood/Ridgefield Park",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 해컨색/리틀페리/모나치 - Hackensack/Little Ferry/Monache",
      "reservationFee": 20,
      "localPaymentFee": 115,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 러더포드/테나플라이 - Rutherford/Tenafly",
      "reservationFee": 20,
      "localPaymentFee": 125,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 티넥 - Teaneck",
      "reservationFee": 20,
      "localPaymentFee": 110,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 뉴왁/엘리자베스/리지우드 - Newark/Elizabeth/Ridgewood",
      "reservationFee": 20,
      "localPaymentFee": 135,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 파라무스/버겐필드 - Paramus/Bergenfield",
      "reservationFee": 20,
      "localPaymentFee": 125,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 피스카타웨이 - Piscataway",
      "reservationFee": 20,
      "localPaymentFee": 180,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NY 알바니 - Albany",
      "reservationFee": 40,
      "localPaymentFee": 450,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 아틀란틱 시티 - Atlantic City",
      "reservationFee": 40,
      "localPaymentFee": 380,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 체리힐 - Cherry Hill",
      "reservationFee": 40,
      "localPaymentFee": 330,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 에디슨/모리스 타운/파시패니 - Edison/Morristown/Parsippany",
      "reservationFee": 20,
      "localPaymentFee": 170,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 프린스턴/트렌턴 - Princeton/Trenton",
      "reservationFee": 30,
      "localPaymentFee": 220,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 밀번 - Milburn",
      "reservationFee": 20,
      "localPaymentFee": 145,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "NJ 뉴브런즈윅/하이랜드파크 - New Brunswick/Highland Park",
      "reservationFee": 20,
      "localPaymentFee": 180,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "CT 그린위치 - Greenwich",
      "reservationFee": 20,
      "localPaymentFee": 110,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "CT 하트포드/모히간선 - Hartford/Mohegan Sun",
      "reservationFee": 30,
      "localPaymentFee": 310,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "CT 밀포드/뉴해븐 - Milford/New Haven",
      "reservationFee": 30,
      "localPaymentFee": 220,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "CT 윈저/심즈버리 - Windsor/Simsbury",
      "reservationFee": 40,
      "localPaymentFee": 320,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "CT 스탬포드 - Stamford",
      "reservationFee": 20,
      "localPaymentFee": 150,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "PA 포코노 - Pocono",
      "reservationFee": 30,
      "localPaymentFee": 290,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "PA 필라델피아 - Philadelphia",
      "reservationFee": 40,
      "localPaymentFee": 330,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "MD 발티모어 - Baltimore",
      "reservationFee": 40,
      "localPaymentFee": 570,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "MS 앰허스트 - Amherst",
      "reservationFee": 40,
      "localPaymentFee": 410,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "워싱턴 D.C - Washington DC",
      "reservationFee": 40,
      "localPaymentFee": 610,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "VA 버지니아/버지니아비치 - Virginia/Virginia Beach",
      "reservationFee": 40,
      "localPaymentFee": 795,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "RI 프로비던스 - Providence",
      "reservationFee": 40,
      "localPaymentFee": 550,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 존에프케네디 공항 - JFK airport",
      "arrival": "MS 보스턴 - Boston",
      "reservationFee": 40,
      "localPaymentFee": 600,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 맨하탄 미드타운 - Manhattan Midtown",
      "reservationFee": 20,
      "localPaymentFee": 65,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 맨하탄 다운타운/업타운 - Manhattan Downtown/Uptown",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 브루클린 - Brooklyn",
      "reservationFee": 20,
      "localPaymentFee": 50,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 존에프케네디 공항 - JFK Airport",
      "reservationFee": 20,
      "localPaymentFee": 45,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 뉴와크 공항 - EWR airport",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 롱시티/루스벨트아일랜드 - longIsland City/Roosevelt lsland",
      "reservationFee": 20,
      "localPaymentFee": 30,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 엘머스트/포레스트힐 - Elmhurst/Foresthill",
      "reservationFee": 20,
      "localPaymentFee": 30,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 잭슨하이츠/아스토리아 - Jackson Heights/Astoria",
      "reservationFee": 20,
      "localPaymentFee": 30,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 우드/서니사이드 - Woodside/Sunnyside",
      "reservationFee": 20,
      "localPaymentFee": 40,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 플러싱 - Flushing",
      "reservationFee": 20,
      "localPaymentFee": 25,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 유니언데일 - Uniondale",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 베이사이드/프레시메도우 - Bayside/Fresh Meadows",
      "reservationFee": 20,
      "localPaymentFee": 30,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 그레이트넥/리틀넥 - Great Neck/Little Neck",
      "reservationFee": 20,
      "localPaymentFee": 35,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 브롱스 - Bronx",
      "reservationFee": 20,
      "localPaymentFee": 65,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 스토니 브룩 - Stony Brook",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 스테이튼 아일랜드 - Staten Island",
      "reservationFee": 20,
      "localPaymentFee": 75,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 가든 시티/로슬린 - Garden City/Roslyn",
      "reservationFee": 20,
      "localPaymentFee": 60,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 호보큰/저지시티 - Hoboken/Jersey City",
      "reservationFee": 20,
      "localPaymentFee": 100,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 위호큰/웨스트뉴욕 - Weehawken/West Newyork",
      "reservationFee": 20,
      "localPaymentFee": 100,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 에지워터/포트리 - Edgewater/Fort Lee",
      "reservationFee": 20,
      "localPaymentFee": 95,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 팰리세이즈 파크/레오니아 - Palisades Park/Leonia",
      "reservationFee": 20,
      "localPaymentFee": 90,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 유니언 시티/노스버겐 - Union City/North Bergen",
      "reservationFee": 20,
      "localPaymentFee": 100,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 잉글우드/리치필드파크 - Englewood/Ridgefield Park",
      "reservationFee": 20,
      "localPaymentFee": 100,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 뉴왁/엘리자베스/리지우드 - Newark/Elizabeth/Ridgewood",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 파라무스 - Paramus",
      "reservationFee": 20,
      "localPaymentFee": 115,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 린허스트/크레스킬 - Lyndhurst/Cresskill",
      "reservationFee": 20,
      "localPaymentFee": 110,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 러더포드/테나플라이 - Rutherford/Tenafly",
      "reservationFee": 20,
      "localPaymentFee": 115,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 피스카타웨이 - Piscataway",
      "reservationFee": 20,
      "localPaymentFee": 165,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NY 알바니 - Albany",
      "reservationFee": 40,
      "localPaymentFee": 380,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 아틀란틱 시티 - Atlantic City",
      "reservationFee": 40,
      "localPaymentFee": 380,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 밀번 - Milburn",
      "reservationFee": 20,
      "localPaymentFee": 140,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 에디슨/모리스 타운/파시패니 - Edison/Morristown/Parsippany",
      "reservationFee": 20,
      "localPaymentFee": 150,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 프린스턴/트렌턴 - Princeton/Trenton",
      "reservationFee": 30,
      "localPaymentFee": 200,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 체리힐 - Cherry Hill",
      "reservationFee": 40,
      "localPaymentFee": 315,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "NJ 뉴브런즈윅/하이랜드파크 - New Brunswick/Highland Park",
      "reservationFee": 20,
      "localPaymentFee": 165,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "CT 하트포드/모히간선 - Hartford/Mohegan Sun",
      "reservationFee": 30,
      "localPaymentFee": 270,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "CT 스탬포드 - Stamford",
      "reservationFee": 20,
      "localPaymentFee": 150,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "CT 그린위치 - Greenwich",
      "reservationFee": 20,
      "localPaymentFee": 90,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "CT 밀포드/뉴해븐 - Milford/New Haven",
      "reservationFee": 30,
      "localPaymentFee": 200,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "CT 윈저/심즈버리 - Windsor/Simsbury",
      "reservationFee": 30,
      "localPaymentFee": 275,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "PA 포코노 - Pocono",
      "reservationFee": 30,
      "localPaymentFee": 280,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "PA 필라델피아 - Philadelphia",
      "reservationFee": 40,
      "localPaymentFee": 335,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "MS 앰허스트 - Amherst",
      "reservationFee": 40,
      "localPaymentFee": 420,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "MD 발티모어 - Baltimore",
      "reservationFee": 40,
      "localPaymentFee": 595,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "MS 보스턴 - Boston",
      "reservationFee": 40,
      "localPaymentFee": 600,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "RI 프로비던스 - Providence",
      "reservationFee": 40,
      "localPaymentFee": 560,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "VA 버지니아/버지니아비치 - Virginia/Virginia Beach",
      "reservationFee": 40,
      "localPaymentFee": 795,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NY 라과디아 공항 - LGA airport",
      "arrival": "워싱턴 D.C - Washington DC",
      "reservationFee": 40,
      "localPaymentFee": 645,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    }
  ],
  "LA": [
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 맨하탄 미드타운 - Manhattan Midtown",
      "reservationFee": 20,
      "localPaymentFee": 100,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 맨하탄 다운타운/업타운 - Manhattan Downtown/Uptown",
      "reservationFee": 20,
      "localPaymentFee": 105,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 브루클린 - Brooklyn",
      "reservationFee": 20,
      "localPaymentFee": 140,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 존에프케네디 공항 - JFK airport NY",
      "reservationFee": 20,
      "localPaymentFee": 150,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 라과디아 공항 - LGA Airport",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": true
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 잭슨하이츠/아스토리아 - Jackson Heights/Astoria",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 엘머스트/포레스트힐 - Elmhurst/Foresthill",
      "reservationFee": 20,
      "localPaymentFee": 135,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 우드/서니사이드 - Woodside/Sunnyside",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 롱시티/루스벨트아일랜드 - longIsland City/Roosevelt lsland",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 유니언데일 - Uniondale",
      "reservationFee": 20,
      "localPaymentFee": 170,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 플러싱 - Flushing",
      "reservationFee": 20,
      "localPaymentFee": 135,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 베이사이드/프레시메도우 - Bayside/Fresh Meadows",
      "reservationFee": 20,
      "localPaymentFee": 140,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 그레이트넥/리틀넥 - Great Neck/Little Neck",
      "reservationFee": 20,
      "localPaymentFee": 150,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 브롱스 - Bronx",
      "reservationFee": 20,
      "localPaymentFee": 110,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 스토니 브룩 - Stony Brook",
      "reservationFee": 30,
      "localPaymentFee": 245,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 용커스/라이 - Yonkers/Rye",
      "reservationFee": 20,
      "localPaymentFee": 105,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 이타카 - Ithaca",
      "reservationFee": 40,
      "localPaymentFee": 625,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 클리프사이드파크/리지필드 - Cliffside Park/Ridgefield",
      "reservationFee": 20,
      "localPaymentFee": 60,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 유니언 시티/노스버겐 - Union City/North Bergen",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 팰리세이즈 파크/포트리 - Palisades Park/Fort Lee",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 에지워터/ 레오니아 - Edgewater/Leonia",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 위호큰/웨스트뉴욕 - Weehawken/West Newyork",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 호보큰/저지시티 - Hoboken/Jersey City",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 잉글우드/리치필드파크 - Englewood/Ridgefield Park",
      "reservationFee": 20,
      "localPaymentFee": 65,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NY 알바니 - Albany",
      "reservationFee": 40,
      "localPaymentFee": 400,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 러더포드/테나플라이 - Rutherford/Tenafly",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 티넥 - Teaneck",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 린허스트/크레스킬 - Lyndhurst/Cresskill",
      "reservationFee": 20,
      "localPaymentFee": 75,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 해컨색/리틀페리 - Hackensack/Little Ferry",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 뉴왁/엘리자베스/리지우드 - Newark/Elizabeth/Ridgewood",
      "reservationFee": 20,
      "localPaymentFee": 65,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 파라무스/버겐필드 - Paramus/Bergenfield",
      "reservationFee": 20,
      "localPaymentFee": 70,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 아틀란틱 시티 - Atlantic City",
      "reservationFee": 30,
      "localPaymentFee": 290,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 피스카타웨이 - Piscataway",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 체리힐 - Cherry Hill",
      "reservationFee": 30,
      "localPaymentFee": 260,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "PA 포코노 - Pocono",
      "reservationFee": 30,
      "localPaymentFee": 230,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 에디슨/모리스 타운/파시패니 - Edison/Morristown/Parsippany",
      "reservationFee": 20,
      "localPaymentFee": 140,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 프린스턴/트렌턴 - Princeton/Trenton",
      "reservationFee": 20,
      "localPaymentFee": 155,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 밀번 - Milburn",
      "reservationFee": 20,
      "localPaymentFee": 120,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "NJ 뉴브런즈윅/하이랜드파크 - New Brunswick/Highland Park",
      "reservationFee": 20,
      "localPaymentFee": 130,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "PA 필라델피아 - Philadelphia",
      "reservationFee": 40,
      "localPaymentFee": 335,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "MS 보스턴 - Boston",
      "reservationFee": 40,
      "localPaymentFee": 600,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "RI 프로비던스 - Providence",
      "reservationFee": 40,
      "localPaymentFee": 655,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "VA 버지니아/버지니아비치 - Virginia/Virginia Beach",
      "reservationFee": 40,
      "localPaymentFee": 795,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "워싱턴 D.C - Washington DC",
      "reservationFee": 40,
      "localPaymentFee": 540,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "MS 앰허스트 - Amherst",
      "reservationFee": 40,
      "localPaymentFee": 400,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    },
    {
      "departure": "NJ 뉴와크 공항 - EWR Airport",
      "arrival": "MD 발티모어 - Baltimore",
      "reservationFee": 40,
      "localPaymentFee": 595,
      "departureIsAirport": true,
      "arrivalIsAirport": false
    }
  ]
};

const YelloRide = () => {
  const [step, setStep] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [route, setRoute] = useState({
    departure: '',
    arrival: '',
    passengers: 1,
    luggage: 0,
    basePrice: 0,
    additionalFees: 0
  });
  const [returnRoute, setReturnRoute] = useState({
    departure: '',
    arrival: '',
    passengers: 1,
    luggage: 0,
    basePrice: 0,
    additionalFees: 0
  });
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    kakaoId: ''
  });
  const [airportInfo, setAirportInfo] = useState({
    pickupDate: '',
    arrivalTime: '',
    flightNumber: '',
    detailedAddress: ''
  });
  const [returnAirportInfo, setReturnAirportInfo] = useState({
    pickupDate: '',
    arrivalTime: '',
    flightNumber: '',
    detailedAddress: ''
  });
  const [options, setOptions] = useState({
    simCard: false,
    carSeat: false
  });
  const [paymentMethod, setPaymentMethod] = useState('deposit');
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvv: ''
  });
  const [agreements, setAgreements] = useState({
    email: false,
    terms: false
  });

  // 가격 계산 함수
  const calculateAdditionalFees = (passengers, luggage) => {
    let fees = 0;
    if (passengers === 5) fees += 5;
    if (passengers === 6) fees += 10;
    if (luggage >= 3) {
      fees += 5 + (luggage - 3) * 5;
    }
    return fees;
  };

  // 총 가격 계산
  const calculateTotalPrice = () => {
    const oneWayBase = route.basePrice || 0;
    const oneWayAdditional = calculateAdditionalFees(route.passengers, route.luggage);
    
    let total = oneWayBase + oneWayAdditional;
    
    if (isRoundTrip) {
      const returnBase = returnRoute.basePrice || 0;
      const returnAdditional = calculateAdditionalFees(returnRoute.passengers, returnRoute.luggage);
      const roundTripTotal = (oneWayBase + oneWayAdditional + returnBase + returnAdditional) * 0.9; // 10% 할인
      total = roundTripTotal;
    }
    
    if (options.simCard) total += 32;
    
    if (paymentMethod === 'full') {
      total = total * 1.2; // 20% 수수료
    }
    
    return Math.round(total);
  };

  // 예약금 계산
  const calculateDepositAmount = () => {
    return isRoundTrip ? 30 : 20;
  };

  // 경로 가격 가져오기
  const getRoutePrice = (region, departure, arrival) => {
    const routes = routeData[region] || [];
    const route = routes.find(r => r.departure === departure && r.arrival === arrival);
    return route ? route.localPaymentFee : 0;
  };

  // 공항 체크
  const isAirportRoute = (region, departure, arrival) => {
    const routes = routeData[region] || [];
    const route = routes.find(r => r.departure === departure && r.arrival === arrival);
    return route ? (route.isDepartureAirport || route.isArrivalAirport) : false;
  };

  // 유니크한 출발지/도착지 가져오기
  const getUniquePlaces = (region, type) => {
    const routes = routeData[region] || [];
    if (type === 'departure') {
      return [...new Set(routes.map(r => r.departure))];
    } else {
      return [...new Set(routes.map(r => r.arrival))];
    }
  };

  // 다음 단계로
  const handleNext = () => {
    setStep(step + 1);
  };

  // 이전 단계로
  const handlePrev = () => {
    setStep(step - 1);
  };

  // 스텝별 진행률
  const getProgress = () => {
    return (step / 8) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">
      {/* 헤더 */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-yellow-500">Yello</span>Ride
            </h1>
            <div className="text-sm text-gray-600">
              Step {step} of 8
            </div>
          </div>
          {/* 진행바 */}
          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 ease-out"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          
          {/* Step 1: 지역 및 서비스 선택 */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">어디에서 이용하시나요?</h2>
                <p className="text-gray-600">서비스 지역과 이용하실 서비스를 선택해주세요</p>
              </div>
              
              {/* 지역 선택 */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedRegion('NY')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedRegion === 'NY'
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-gray-200 hover:border-yellow-300'
                  }`}
                >
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <h3 className="text-xl font-semibold">뉴욕</h3>
                  <p className="text-sm text-gray-600 mt-1">New York</p>
                </button>
                
                <button
                  onClick={() => setSelectedRegion('LA')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedRegion === 'LA'
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-gray-200 hover:border-yellow-300'
                  }`}
                >
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <h3 className="text-xl font-semibold">로스앤젤레스</h3>
                  <p className="text-sm text-gray-600 mt-1">Los Angeles</p>
                </button>
              </div>

              {/* 서비스 선택 */}
              {selectedRegion && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-lg font-semibold text-gray-700">서비스를 선택하세요</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setServiceType('taxi')}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        serviceType === 'taxi'
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <Car className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                      <h3 className="text-xl font-semibold">택시 예약</h3>
                      <p className="text-sm text-gray-600 mt-1">출발지와 목적지 지정</p>
                    </button>
                    
                    <button
                      disabled
                      className="p-6 rounded-xl border-2 border-gray-200 opacity-50 cursor-not-allowed"
                    >
                      <Clock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <h3 className="text-xl font-semibold text-gray-400">차량 대절</h3>
                      <p className="text-sm text-gray-500 mt-1">준비중</p>
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={handleNext}
                disabled={!selectedRegion || !serviceType}
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  selectedRegion && serviceType
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                다음 단계로
              </button>
            </div>
          )}

          {/* Step 2: 출발지/도착지 선택 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">어디로 가시나요?</h2>
                <p className="text-gray-600">출발지와 도착지를 선택해주세요</p>
              </div>

              {/* 왕복 선택 */}
              <div className="flex items-center justify-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRoundTrip}
                    onChange={(e) => setIsRoundTrip(e.target.checked)}
                    className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500"
                  />
                  <span className="ml-2 text-lg font-medium">왕복 예약 (10% 할인)</span>
                </label>
              </div>

              {/* 편도 경로 */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                    {isRoundTrip ? '가는 길' : '경로 선택'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">출발지</label>
                      <select
                        value={route.departure}
                        onChange={(e) => {
                          const newDeparture = e.target.value;
                          const price = getRoutePrice(selectedRegion, newDeparture, route.arrival);
                          setRoute({ ...route, departure: newDeparture, basePrice: price });
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">선택하세요</option>
                        {getUniquePlaces(selectedRegion, 'departure').map((place) => (
                          <option key={place} value={place}>{place}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">도착지</label>
                      <select
                        value={route.arrival}
                        onChange={(e) => {
                          const newArrival = e.target.value;
                          const price = getRoutePrice(selectedRegion, route.departure, newArrival);
                          setRoute({ ...route, arrival: newArrival, basePrice: price });
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        disabled={!route.departure}
                      >
                        <option value="">선택하세요</option>
                        {route.departure && routeData[selectedRegion]
                          .filter(r => r.departure === route.departure)
                          .map((r) => (
                            <option key={r.arrival} value={r.arrival}>{r.arrival}</option>
                          ))}
                      </select>
                    </div>

                    {route.basePrice > 0 && (
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          기본 요금: <span className="font-semibold">${route.basePrice}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* 왕복 경로 */}
                {isRoundTrip && (
                  <div className="bg-gray-50 p-6 rounded-xl animate-fadeIn">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                      오는 길
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">출발지</label>
                        <select
                          value={returnRoute.departure}
                          onChange={(e) => {
                            const newDeparture = e.target.value;
                            const price = getRoutePrice(selectedRegion, newDeparture, returnRoute.arrival);
                            setReturnRoute({ ...returnRoute, departure: newDeparture, basePrice: price });
                          }}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                          <option value="">선택하세요</option>
                          {getUniquePlaces(selectedRegion, 'departure').map((place) => (
                            <option key={place} value={place}>{place}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">도착지</label>
                        <select
                          value={returnRoute.arrival}
                          onChange={(e) => {
                            const newArrival = e.target.value;
                            const price = getRoutePrice(selectedRegion, returnRoute.departure, newArrival);
                            setReturnRoute({ ...returnRoute, arrival: newArrival, basePrice: price });
                          }}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          disabled={!returnRoute.departure}
                        >
                          <option value="">선택하세요</option>
                          {returnRoute.departure && routeData[selectedRegion]
                            .filter(r => r.departure === returnRoute.departure)
                            .map((r) => (
                              <option key={r.arrival} value={r.arrival}>{r.arrival}</option>
                            ))}
                        </select>
                      </div>

                      {returnRoute.basePrice > 0 && (
                        <div className="bg-yellow-100 p-3 rounded-lg">
                          <p className="text-sm text-yellow-800">
                            기본 요금: <span className="font-semibold">${returnRoute.basePrice}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all"
                >
                  이전
                </button>
                <button
                  onClick={handleNext}
                  disabled={!route.departure || !route.arrival || (isRoundTrip && (!returnRoute.departure || !returnRoute.arrival))}
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all ${
                    route.departure && route.arrival && (!isRoundTrip || (returnRoute.departure && returnRoute.arrival))
                      ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  다음 단계로
                </button>
              </div>
            </div>
          )}

          {/* Step 3: 인원/짐 선택 */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">인원과 짐 개수</h2>
                <p className="text-gray-600">탑승 인원과 짐의 개수를 선택해주세요</p>
              </div>

              {/* 차량 배정 안내 */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  고객님 선택에 따라 차량이 배정됩니다
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>승용차</strong>: 1-3인, 캐리어 1-3개</li>
                  <li>• <strong>SUV</strong>: 1-3인, 캐리어 3-4개</li>
                  <li>• <strong>미니밴</strong>: 1-6인, 캐리어 5-10개</li>
                </ul>
                <div className="mt-3 text-xs text-blue-700 space-y-1">
                  <p>* 캐리어는 기내용, 수화물 사이즈 상관없이 1개</p>
                  <p>* 3단 이민가방/대형 유모차/골프가방은 2개로 선택</p>
                  <p>* 기내용 캐리어 사이즈(20인치) 미만의 핸드백/백팩/쇼핑백 등 무료</p>
                  {selectedRegion === 'LA' && (
                    <p className="font-semibold text-red-600">* LA지역 예약시 4인 이상은 반드시 짐갯수 5개 임의 선택필수</p>
                  )}
                </div>
              </div>

              {/* 편도 인원/짐 */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                    {isRoundTrip ? '가는 길' : '인원 및 짐 선택'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        탑승 인원
                      </label>
                      <div className="flex items-center justify-between bg-white rounded-lg border border-gray-300 p-3">
                        <button
                          onClick={() => setRoute({ ...route, passengers: Math.max(1, route.passengers - 1) })}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-xl font-semibold">{route.passengers}명</span>
                        <button
                          onClick={() => setRoute({ ...route, passengers: Math.min(6, route.passengers + 1) })}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      {route.passengers >= 5 && (
                        <p className="text-sm text-red-600 mt-2">
                          추가 요금: +${route.passengers === 5 ? '5' : '10'}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                        <Luggage className="w-4 h-4 mr-2" />
                        짐 개수
                      </label>
                      <div className="flex items-center justify-between bg-white rounded-lg border border-gray-300 p-3">
                        <button
                          onClick={() => setRoute({ ...route, luggage: Math.max(0, route.luggage - 1) })}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-xl font-semibold">{route.luggage}개</span>
                        <button
                          onClick={() => setRoute({ ...route, luggage: Math.min(10, route.luggage + 1) })}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      {route.luggage >= 3 && (
                        <p className="text-sm text-red-600 mt-2">
                          추가 요금: +${5 + (route.luggage - 3) * 5}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 왕복 인원/짐 */}
                {isRoundTrip && (
                  <div className="bg-gray-50 p-6 rounded-xl animate-fadeIn">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                      오는 길
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          탑승 인원
                        </label>
                        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-300 p-3">
                          <button
                            onClick={() => setReturnRoute({ ...returnRoute, passengers: Math.max(1, returnRoute.passengers - 1) })}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-xl font-semibold">{returnRoute.passengers}명</span>
                          <button
                            onClick={() => setReturnRoute({ ...returnRoute, passengers: Math.min(6, returnRoute.passengers + 1) })}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        {returnRoute.passengers >= 5 && (
                          <p className="text-sm text-red-600 mt-2">
                            추가 요금: +${returnRoute.passengers === 5 ? '5' : '10'}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                          <Luggage className="w-4 h-4 mr-2" />
                          짐 개수
                        </label>
                        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-300 p-3">
                          <button
                            onClick={() => setReturnRoute({ ...returnRoute, luggage: Math.max(0, returnRoute.luggage - 1) })}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-xl font-semibold">{returnRoute.luggage}개</span>
                          <button
                            onClick={() => setReturnRoute({ ...returnRoute, luggage: Math.min(10, returnRoute.luggage + 1) })}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        {returnRoute.luggage >= 3 && (
                          <p className="text-sm text-red-600 mt-2">
                            추가 요금: +${5 + (returnRoute.luggage - 3) * 5}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all"
                >
                  이전
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 py-4 rounded-xl font-semibold bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg transition-all"
                >
                  다음 단계로
                </button>
              </div>
            </div>
          )}

          {/* Step 4: 탑승자 정보 */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">예약자 정보</h2>
                <p className="text-gray-600">정확한 연락을 위해 정보를 입력해주세요</p>
              </div>

              {/* 안내사항 */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  중요 안내사항
                </h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• 요청하신 픽업 시간전에는 미리 연락드리지 않습니다</li>
                  <li>• 당일 약속시간이 되면 도착후 기사님이 개별 연락드립니다</li>
                  <li>• 미국번호 없을시 카톡 연결된 한국번호 작성</li>
                  <li>• <strong>이메일 및 카톡 대화명이 아닌 ID를 작성</strong> (예: kim@gmail.com(X) kim85(O))</li>
                  <li>• 픽업당일 카톡 조회 후 연락드리니 <strong>검색허용 필수</strong></li>
                </ul>
              </div>

              {/* 입력 폼 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 (한글) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    전화번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                    placeholder="010-1234-5678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    카카오톡 ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={userInfo.kakaoId}
                    onChange={(e) => setUserInfo({ ...userInfo, kakaoId: e.target.value })}
                    placeholder="kakao123 (이메일X, 대화명X)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    카카오톡 검색이 안되어 못모시는 경우 회사책임 없으니 꼭 확인해 주세요
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all"
                >
                  이전
                </button>
                <button
                  onClick={handleNext}
                  disabled={!userInfo.name || !userInfo.phone || !userInfo.kakaoId}
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all ${
                    userInfo.name && userInfo.phone && userInfo.kakaoId
                      ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  다음 단계로
                </button>
              </div>
            </div>
          )}

          {/* Step 5: 공항 추가정보 (조건부) */}
          {step === 5 && (
            <div className="space-y-6">
              {isAirportRoute(selectedRegion, route.departure, route.arrival) || 
               (isRoundTrip && isAirportRoute(selectedRegion, returnRoute.departure, returnRoute.arrival)) ? (
                <>
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">픽업 정보</h2>
                    <p className="text-gray-600">공항 픽업을 위한 추가 정보를 입력해주세요</p>
                  </div>

                  {/* 안내사항 */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <Plane className="w-5 h-5 mr-2" />
                      공항 픽업 안내
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 공항 픽업의 경우 비행편명을 조회하여 실제 비행기 도착시간부터 무료대기</li>
                      <li>• <strong>국제선: 1시간 30분</strong>, <strong>국내선: 1시간</strong> 무료대기</li>
                      <li>• 이후 30분당 $15 추가됩니다</li>
                      <li>• <strong className="text-red-600">주의! 24시간 형식 사용</strong> (밤 9시 55분 = 21:55)</li>
                      <li>• 탑승 4시간 전의 긴급 예약일 경우 배차 가능 차량 여부에 따라 대기 시간 발생</li>
                    </ul>
                  </div>

                  {/* 편도 공항 정보 */}
                  {isAirportRoute(selectedRegion, route.departure, route.arrival) && (
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                        {isRoundTrip ? '가는 길 정보' : '픽업 정보'}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            픽업 요청날짜 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            value={airportInfo.pickupDate}
                            onChange={(e) => setAirportInfo({ ...airportInfo, pickupDate: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            비행기 도착시간 (24시간) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="time"
                            value={airportInfo.arrivalTime}
                            onChange={(e) => setAirportInfo({ ...airportInfo, arrivalTime: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            공항/편명 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={airportInfo.flightNumber}
                            onChange={(e) => setAirportInfo({ ...airportInfo, flightNumber: e.target.value })}
                            placeholder="KE081"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            목적지 상세 주소
                          </label>
                          <input
                            type="text"
                            value={airportInfo.detailedAddress}
                            onChange={(e) => setAirportInfo({ ...airportInfo, detailedAddress: e.target.value })}
                            placeholder="호텔명 또는 상세주소"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 왕복 공항 정보 */}
                  {isRoundTrip && isAirportRoute(selectedRegion, returnRoute.departure, returnRoute.arrival) && (
                    <div className="bg-gray-50 p-6 rounded-xl animate-fadeIn">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                        오는 길 정보
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            픽업 요청날짜 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            value={returnAirportInfo.pickupDate}
                            onChange={(e) => setReturnAirportInfo({ ...returnAirportInfo, pickupDate: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            비행기 도착시간 (24시간) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="time"
                            value={returnAirportInfo.arrivalTime}
                            onChange={(e) => setReturnAirportInfo({ ...returnAirportInfo, arrivalTime: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            공항/편명 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={returnAirportInfo.flightNumber}
                            onChange={(e) => setReturnAirportInfo({ ...returnAirportInfo, flightNumber: e.target.value })}
                            placeholder="KE082"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            목적지 상세 주소
                          </label>
                          <input
                            type="text"
                            value={returnAirportInfo.detailedAddress}
                            onChange={(e) => setReturnAirportInfo({ ...returnAirportInfo, detailedAddress: e.target.value })}
                            placeholder="호텔명 또는 상세주소"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={handlePrev}
                      className="flex-1 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all"
                    >
                      이전
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={
                        (isAirportRoute(selectedRegion, route.departure, route.arrival) && 
                         (!airportInfo.pickupDate || !airportInfo.arrivalTime || !airportInfo.flightNumber)) ||
                        (isRoundTrip && isAirportRoute(selectedRegion, returnRoute.departure, returnRoute.arrival) &&
                         (!returnAirportInfo.pickupDate || !returnAirportInfo.arrivalTime || !returnAirportInfo.flightNumber))
                      }
                      className={`flex-1 py-4 rounded-xl font-semibold transition-all ${
                        ((!isAirportRoute(selectedRegion, route.departure, route.arrival) || 
                          (airportInfo.pickupDate && airportInfo.arrivalTime && airportInfo.flightNumber)) &&
                         (!isRoundTrip || !isAirportRoute(selectedRegion, returnRoute.departure, returnRoute.arrival) ||
                          (returnAirportInfo.pickupDate && returnAirportInfo.arrivalTime && returnAirportInfo.flightNumber)))
                          ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      다음 단계로
                    </button>
                  </div>
                </>
              ) : (
                // 공항이 아닌 경우 자동으로 다음 단계로
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">공항 픽업이 아니므로 추가 정보가 필요하지 않습니다.</p>
                  {setTimeout(() => setStep(6), 1000)}
                </div>
              )}
            </div>
          )}

          {/* Step 6: 옵션 선택 */}
          {step === 6 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">추가 옵션</h2>
                <p className="text-gray-600">필요하신 옵션을 선택해주세요</p>
              </div>

              <div className="space-y-4">
                {/* 유심 옵션 */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.simCard}
                      onChange={(e) => setOptions({ ...options, simCard: e.target.checked })}
                      className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500 mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <h4 className="font-semibold text-lg mb-1">
                        유심 추가 <span className="text-yellow-500">+$32</span>
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">개통하여 택시에서 전달해 드립니다</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• 미국전역 사용 / 국제전화 무제한</li>
                        <li>• 데이터 무제한 (12GB LTE 이후 2/3G 무제한)</li>
                        <li>• 첫 택시탑승일 수령</li>
                      </ul>
                      <div className="mt-3 p-3 bg-white rounded-lg">
                        <p className="text-xs font-semibold text-gray-700 mb-1">사용가능 기종</p>
                        <p className="text-xs text-gray-600">아이폰 8 이상, 삼성 갤럭시S/노트/Z플립/Z폴드</p>
                        <p className="text-xs font-semibold text-gray-700 mt-2 mb-1">사용불가 기종</p>
                        <p className="text-xs text-gray-600">삼성 갤럭시A/J, LG 전기종, 샤오미 등 해외브랜드</p>
                      </div>
                    </div>
                  </label>
                </div>

                {/* 카시트 옵션 */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.carSeat}
                      onChange={(e) => setOptions({ ...options, carSeat: e.target.checked })}
                      className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500 mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <h4 className="font-semibold text-lg mb-1">
                        카시트 신청 <span className="text-red-500">현장결제 +$10</span>
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">차량에 미리 준비됩니다</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• 한 차량당 1개까지만 가능</li>
                        <li>• 비용은 택시요금에 포함되지 않으니 기사님께 따로 지불</li>
                        <li>• <span className="text-red-600">뉴저지 출발 구간 이동은 카시트 추가 불가</span></li>
                        <li>• 왕복 예약시 자동으로 왕복 모두 현장결제금 $10 추가</li>
                      </ul>
                      <div className="mt-3 p-3 bg-white rounded-lg">
                        <p className="text-xs font-semibold text-gray-700 mb-1">카시트 종류</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 영유아: 1세 미만 (LA지역만 가능)</li>
                          <li>• 일반: 1-6세 미만</li>
                          <li>• 부스터: 6세 이상</li>
                        </ul>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all"
                >
                  이전
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 py-4 rounded-xl font-semibold bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg transition-all"
                >
                  다음 단계로
                </button>
              </div>
            </div>
          )}

          {/* Step 7: 결제 */}
          {step === 7 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">결제하기</h2>
                <p className="text-gray-600">결제 방법을 선택하고 정보를 입력해주세요</p>
              </div>

              {/* 요금 요약 */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">요금 상세</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">기본 요금</span>
                    <span className="font-medium">
                      ${route.basePrice + (isRoundTrip ? returnRoute.basePrice : 0)}
                    </span>
                  </div>
                  {(calculateAdditionalFees(route.passengers, route.luggage) > 0 || 
                    (isRoundTrip && calculateAdditionalFees(returnRoute.passengers, returnRoute.luggage) > 0)) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">추가 요금 (인원/짐)</span>
                      <span className="font-medium">
                        +${calculateAdditionalFees(route.passengers, route.luggage) + 
                           (isRoundTrip ? calculateAdditionalFees(returnRoute.passengers, returnRoute.luggage) : 0)}
                      </span>
                    </div>
                  )}
                  {isRoundTrip && (
                    <div className="flex justify-between text-green-600">
                      <span>왕복 할인 (10%)</span>
                      <span className="font-medium">
                        -${Math.round((route.basePrice + returnRoute.basePrice + 
                          calculateAdditionalFees(route.passengers, route.luggage) + 
                          calculateAdditionalFees(returnRoute.passengers, returnRoute.luggage)) * 0.1)}
                      </span>
                    </div>
                  )}
                  {options.simCard && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">유심</span>
                      <span className="font-medium">+$32</span>
                    </div>
                  )}
                  {options.carSeat && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">카시트 (현장결제)</span>
                      <span className="font-medium text-red-600">
                        +${isRoundTrip ? 20 : 10} (현장)
                      </span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>총 요금</span>
                      <span className="text-yellow-600">${calculateTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 결제 방법 선택 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">결제 방법</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'deposit'
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-gray-200 hover:border-yellow-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="deposit"
                      checked={paymentMethod === 'deposit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="hidden"
                    />
                    <div>
                      <h4 className="font-semibold mb-1">예약금 결제</h4>
                      <p className="text-sm text-gray-600">
                        예약금 ${calculateDepositAmount()} + 나머지 현장결제
                      </p>
                      <p className="text-xs text-green-600 mt-1">수수료 없음</p>
                    </div>
                  </label>

                  <label className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'full'
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-gray-200 hover:border-yellow-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="full"
                      checked={paymentMethod === 'full'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="hidden"
                    />
                    <div>
                      <h4 className="font-semibold mb-1">일시불 결제</h4>
                      <p className="text-sm text-gray-600">
                        전체 금액 결제
                      </p>
                      <p className="text-xs text-red-600 mt-1">20% 수수료 부과</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* 결제 정보 입력 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Billing Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 (한글) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={billingInfo.name}
                    onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    value={billingInfo.company}
                    onChange={(e) => setBillingInfo({ ...billingInfo, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={billingInfo.email}
                    onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    예약 확정서를 받으실 정확한 이메일 주소를 작성해 주세요. 
                    daum/hanmail.net/yahoo 계정은 이메일 전송이 불가할 수 있으니 유의해 주세요
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.email}
                      onChange={(e) => setAgreements({ ...agreements, email: e.target.checked })}
                      className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500 mt-0.5"
                    />
                    <span className="ml-2 text-sm">
                      <span className="font-medium">이용 동의서</span>: 고객님이 기재하신 정보대로 예약이 진행되며, 
                      예약직후 이메일로 받으시는 중요 안내문과 예약 확정내역을 꼼꼼히 확인해 주세요. 
                      이메일을 확인하지 않아 발생되는 일은 옐로라이드에서 책임이 없습니다.
                    </span>
                  </label>
                </div>
              </div>

              {/* 카드 정보 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Your Order Detail</h3>
                <p className="text-sm text-gray-600">
                  Pay securely by Credit or Debit Card through Authorize.net Secure Servers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={cardInfo.number}
                      onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry (MM/YY) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={cardInfo.expiry}
                      onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                      placeholder="MM/YY"
                      maxLength="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={cardInfo.cvv}
                      onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                      placeholder="CVV"
                      maxLength="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.terms}
                      onChange={(e) => setAgreements({ ...agreements, terms: e.target.checked })}
                      className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500 mt-0.5"
                    />
                    <span className="ml-2 text-sm">
                      <span className="font-medium">옐로라이드 이용약관에 동의합니다.</span> 
                      <br />
                      <span className="text-xs text-gray-600">
                        [중요사항] 발송되는 예약확정 이메일을 확인하고 서비스를 이용하시기 바랍니다. 
                        이메일을 확인하지 않아 발생하는 일은 본 회사는 책임이 없습니다.
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              {/* 최종 결제 금액 */}
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">결제 금액</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {paymentMethod === 'deposit' 
                        ? `예약금 ${calculateDepositAmount()} (나머지 현장결제)`
                        : `일시불 ${calculateTotalPrice()} (수수료 포함)`}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">
                    ${paymentMethod === 'deposit' ? calculateDepositAmount() : calculateTotalPrice()}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all"
                >
                  이전
                </button>
                <button
                  onClick={handleNext}
                  disabled={
                    !billingInfo.name || !billingInfo.email || 
                    !cardInfo.number || !cardInfo.expiry || !cardInfo.cvv ||
                    !agreements.email || !agreements.terms
                  }
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all ${
                    billingInfo.name && billingInfo.email && 
                    cardInfo.number && cardInfo.expiry && cardInfo.cvv &&
                    agreements.email && agreements.terms
                      ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  결제하기
                </button>
              </div>
            </div>
          )}

          {/* Step 8: 예약 완료 */}
          {step === 8 && (
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">예약이 완료되었습니다!</h2>
                <p className="text-gray-600">예약번호: YR{Date.now().toString().slice(-8)}</p>
              </div>

              {/* 예약 정보 요약 */}
              <div className="bg-gray-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">예약 정보</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">경로 정보</h4>
                    <div className="text-sm space-y-1">
                      <p>• {route.departure} → {route.arrival}</p>
                      {isRoundTrip && (
                        <p>• {returnRoute.departure} → {returnRoute.arrival}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">예약자 정보</h4>
                    <div className="text-sm space-y-1">
                      <p>• 이름: {userInfo.name}</p>
                      <p>• 전화번호: {userInfo.phone}</p>
                      <p>• 카카오톡 ID: {userInfo.kakaoId}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">결제 정보</h4>
                    <div className="text-sm space-y-1">
                      <p>• 총 요금: ${calculateTotalPrice()}</p>
                      <p>• 결제 방법: {paymentMethod === 'deposit' ? '예약금 결제' : '일시불 결제'}</p>
                      <p>• 결제 금액: ${paymentMethod === 'deposit' ? calculateDepositAmount() : calculateTotalPrice()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 안내사항 */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
                <h4 className="font-semibold text-yellow-900 mb-3">중요 안내사항</h4>
                <ul className="text-sm text-yellow-800 space-y-2 text-left">
                  <li>• 예약 확정 이메일이 {billingInfo.email}로 발송되었습니다.</li>
                  <li>• 이메일을 꼭 확인하시고 예약 내용을 다시 한번 확인해주세요.</li>
                  <li>• 픽업 당일 기사님이 카카오톡으로 연락드립니다.</li>
                  <li>• 변경 또는 취소는 옐로라이드 고객센터로 문의해주세요.</li>
                </ul>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition-all shadow-lg"
              >
                새로운 예약하기
              </button>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default YelloRide;
