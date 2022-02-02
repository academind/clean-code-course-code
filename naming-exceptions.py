from datetime import datetime

class DateUtil:
    @staticmethod
    def get_formatted_daily):
        date_today = datetime.now()
        formatted_date = date_today.strftime('%Y-%m-%d')
        return formatted_date


print(DateUtil.get_formatted_daily())
