class ReportsController < ApplicationController
    def generate
      user = User.find(params[:user_id])
      report_type = params[:report_type]
      reports = generate_reports(user, report_type)
      render json: reports
    end
  
    private
  
    def generate_reports(user, report_type)
      case report_type
      when 'daily'
        daily_report(user)
      when 'weekly'
        weekly_report(user)
      when 'monthly'
        monthly_report(user)
      when 'yearly'
        yearly_report(user)
      else
        []
      end
    end
  
    def daily_report(user)
      user.website_usages
          .group("DATE(created_at)")
          .select("DATE(created_at) as date, SUM(time_spent) as total_duration")
          .map { |record| { date: record.date, total_duration: record.total_duration } }
    end
  
    def weekly_report(user)
      user.website_usages
          .group("DATE_TRUNC('week', created_at)")
          .select("DATE_TRUNC('week', created_at) as week, SUM(time_spent) as total_duration")
          .map { |record| { week: record.week.strftime('%Y-%m-%d'), total_duration: record.total_duration } }
    end
  
    def monthly_report(user)
      user.website_usages
          .group("DATE_TRUNC('month', created_at)")
          .select("DATE_TRUNC('month', created_at) as month, SUM(time_spent) as total_duration")
          .map { |record| { month: record.month.strftime('%Y-%m'), total_duration: record.total_duration } }
    end
  
    def yearly_report(user)
      user.website_usages
          .group("DATE_TRUNC('year', created_at)")
          .select("DATE_TRUNC('year', created_at) as year, SUM(time_spent) as total_duration")
          .map { |record| { year: record.year.strftime('%Y'), total_duration: record.total_duration } }
    end
  end
  