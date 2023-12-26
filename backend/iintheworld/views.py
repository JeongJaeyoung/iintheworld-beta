# 한국은행, FRED에서 데이터 가져오기
import requests
from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_bok_data(request):
    # https://ecos.bok.or.kr/api/#/DevGuide/StatisticalCodeSearch : 통계코드 조회
    #
    # 주기(cycle) : A(연), S(반년), Q(분기), M(월), SM(반월), D(일)
    # 검색일자(period) : 2015(연), 2015Q1(분기), 201501(월), 20150101(일)
    #
    # ex0) https://ecos.bok.or.kr/api/StatisticSearch/{api-key}/json/kr/0/99999/{code1 : 대분류}}/{cycle : 주기}/{periodStart}/{periodEnd}/{code2 : 소분류}}
    # ex1) https://ecos.bok.or.kr/api/StatisticSearch/{api-key}/json/kr/0/99999/722Y001/M/199505/202305/0101000
    # ex2) https://ecos.bok.or.kr/api/StatisticSearch/{api-key}/json/kr/0/99999/200Y002/Q/2000Q1/2023Q4/10111cd/

    # if request.user :
    #     bok_api_key = request.user.bok_api_key
    api_key = settings.BOK_API_KEY
    code0 = request.GET.get('code0', None)
    cycle = request.GET.get('cycle', None)
    period_start = request.GET.get('periodStart', None)
    period_end = request.GET.get('periodEnd', None)
    code1 = request.GET.get('code1', None)
    code2 = request.GET.get('code2', '')

    url = f'https://ecos.bok.or.kr/api/StatisticSearch/{api_key}/json/kr/0/99999/{code0}/{cycle}/{period_start}/{period_end}/{code1}/{code2}'
    response = requests.get(url)
    if response.status_code == 200:
        json_response = response.json()
        return Response(data=json_response)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_fred_data(request):
    #https://fred.stlouisfed.org/docs/api/fred/series_observations.html
    series_id = request.GET.get('code', None)
    frequency = request.GET.get('frequency', None)
    api_key = settings.FRED_API_KEY
    url = f"https://api.stlouisfed.org/fred/series/observations?series_id={series_id}&frequency={frequency}&api_key={api_key}&file_type=json"

    try:
        response = requests.get(url)
        if response.status_code == 200:
            json_response = response.json()
            return Response(json_response, status=status.HTTP_200_OK)
        else:
            return Response({'error':'fred에서 데이터 가져오기 실패'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as e:
        return Response({'error': e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)