import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface CustomCalendarProps {
  onSelectDateTime: (date: Date, time: string) => void;
  selectedDate?: Date;
  selectedTime?: string;
}

export default function CustomCalendar({ 
  onSelectDateTime, 
  selectedDate, 
  selectedTime 
}: CustomCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  
  const allAvailableTimes = [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM",
    "5:00 PM",
    "7:00 PM",
    "9:00 PM"
  ];

  useEffect(() => {
    if (selectedDate) {
      fetchBookedSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchBookedSlots = async (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];

    try {
      const { data, error } = await supabase.functions.invoke("get-booked-slots", {
        body: { date: dateStr },
      });

      if (error) {
        console.error("Error fetching booked slots via function:", error);
        return;
      }

      const slots = (data?.slots ?? []) as string[];
      setBookedSlots(new Set(slots));
    } catch (error) {
      console.error("Error fetching booked slots:", error);
    }
  };

  const availableTimes = allAvailableTimes.filter(time => !bookedSlots.has(time));

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today; // Only disable past dates
  };

  const handleDateClick = (day: number) => {
    if (isDateDisabled(day)) return;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (selectedTime) {
      onSelectDateTime(date, selectedTime);
    } else {
      onSelectDateTime(date, "");
    }
  };

  const handleTimeClick = (time: string) => {
    if (selectedDate) {
      onSelectDateTime(selectedDate, time);
    }
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Button variant="outline" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="text-lg font-semibold">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const disabled = isDateDisabled(day);
            const selected = isDateSelected(day);
            
            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                disabled={disabled}
                className={cn(
                  "p-2 text-sm rounded-md transition-colors",
                  disabled && "opacity-40 cursor-not-allowed",
                  !disabled && !selected && "hover:bg-accent",
                  selected && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {day}
              </button>
            );
          })}
        </div>
      </Card>

      {selectedDate && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Select a Time</h3>
          {availableTimes.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-lg font-medium mb-2">All slots are booked for this day</p>
              <p className="text-sm">Please select a different date</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availableTimes.map(time => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => handleTimeClick(time)}
                  className="w-full"
                >
                  {time}
                </Button>
              ))}
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
