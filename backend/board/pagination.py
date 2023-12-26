from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from collections import OrderedDict


class AnnouncementPageNumberPagenation(PageNumberPagination):
    page_size = 5
    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data),
            ('pageCnt', self.page.paginator.num_pages),
            ('curPage', self.page.number),
            ('pageSize', self.page_size),
        ]))


class PostPageNumberPagenation(PageNumberPagination):
    page_size = 5
    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data),
            ('pageCnt', self.page.paginator.num_pages),
            ('curPage', self.page.number),
            ('pageSize', self.page_size),
        ]))