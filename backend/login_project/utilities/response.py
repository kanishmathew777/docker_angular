from django.http import JsonResponse


def error_response(message, status, error=None, request=None, meta=None):
    response = dict()
    response['status'] = 'ERROR'
    response['error'] = error
    response['detail'] = message

    return JsonResponse(response, status=status)


def success_response(data, status, request=None, meta=None):
    response = dict()
    response['data'] = data
    response['meta'] = meta

    return JsonResponse(response, status=status)