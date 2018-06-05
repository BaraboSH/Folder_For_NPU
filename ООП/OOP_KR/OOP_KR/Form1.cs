using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace OOP_KR
{
    public partial class Form1 : Form
    {
        public Graphics graph;
        public Pen pen;
        double angle;
        Line line1 = new Line();
        public Form1()
        {
            InitializeComponent();
            graph = pictureBox1.CreateGraphics();
            pen = new Pen(Color.Blue)
            {
                Width = 3
            };
        }

        private void button1_Click(object sender, EventArgs e)
        {
              if(Angle.Text == "") {
                angle = 0;
              }
              else {
                angle = double.Parse(Angle.Text);
              }
            Point end = line1.GetCoordsOfEnd(line1.dotStart, line1.length, angle);
            graph.DrawLine(pen,line1.GetPointStart(),end);
            line1.dotStart = new Dot(end.X,end.Y);
        }
    }
    public class Dot
    {
       public Dot(double x, double y) 
        {
            xCoord = x;
            yCoord = y;
        }
       private double xCoord, yCoord;
       public double X { get { return xCoord; } set { xCoord = value; } }
       public double Y { get { return yCoord; } set { yCoord = value; } }
    }
    interface IGetLengthInterface
    {
       Point GetCoordsOfEnd(Dot dotStart,double length, double angle);
    }
    class Line:IGetLengthInterface
    {
       public Point GetCoordsOfEnd(Dot dotStart, double length, double angle) 
       {
            double xEnd = dotStart.X + length * Math.Cos(angle * (Math.PI / 180.0));
            double yEnd = dotStart.Y + length * Math.Sin(angle * (Math.PI / 180.0));
            return new Point((int)xEnd,(int)yEnd);
       }
     
        public Line() 
        {
            dotStart = new Dot(0,0);
            length = 50;
        }
        public Line(double x,double y,double len) 
        {
            dotStart = new Dot(x, y);
            length = len;
        }
        public Line(Dot dot,double len)
        {
            dotStart = dot;
            length = len;
        }
        public double length;
        public Dot dotStart;
        public Point GetPointStart() 
        {
            return new Point((int)dotStart.X, (int)dotStart.Y);
        }
    }
}
