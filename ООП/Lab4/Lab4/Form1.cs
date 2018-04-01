using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Lab4
{
    public partial class Form1 : Form
    {
        public Graphics graph;
        public Pen pen1;
        public Brush brush1;
        double alpha = 0;
        double mx1 = 3;
        double my1 = 5;
        double x01 = 250;
        double y01 = 200;
        double A = 50;
        double a = 1;
        double B = 5;
        double b = 1;
        double s = 1;
        double change=0;
        FunctionLissaz L;
        double x = 0;
        double y = 0;
        public Form1()
        {
            InitializeComponent();
            graph = pictureBoxMain.CreateGraphics();
            pen1 = new Pen(Color.Red);
            pen1.Width = 5;
            brush1 = new SolidBrush(Color.Blue);
            L = new FunctionLissaz();
            trackBarX.Value = (int)mx1;
            trackBarY.Value = (int)my1;
            comboBox1.Items.AddRange(new object[]
            {
                "-30","-20","-10","0","+10","+20","+30"
            });
            comboBox1.SelectedIndex = 3;
            buttonTimer.Text = "Начать движение";
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void pictureBoxMain_Click(object sender, EventArgs e)
        {

        }

        private void buttonGraph_Click(object sender, EventArgs e)
        {
                graph.Clear(pictureBoxMain.BackColor);
                L.Draw(graph, pen1, 0.0, 43.0, 1.0, mx1, my1, x01, y01, alpha,A,a,s,B,b);
          
        }

        private void buttonTimer_Click(object sender, EventArgs e)
        {
            timer1.Enabled = !timer1.Enabled;
            buttonTimer.Text = timer1.Enabled ? "Остановить движение" : "Начать движение";
        }

        private void trackBarX_Scroll(object sender, EventArgs e)
        {
            mx1 = trackBarX.Value;
            buttonGraph_Click(this, null);
        }

        private void trackBarY_Scroll(object sender, EventArgs e)
        {
            my1 = trackBarY.Value;
            buttonGraph_Click(this, null);
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            string s = comboBox1.Items[comboBox1.SelectedIndex].ToString();
            alpha = Convert.ToDouble(s) * Math.PI / 180;
            buttonGraph_Click(this, null);
        }
        private void comboBox1_TextChanged(object sender,EventArgs e)
        {
            try
            {
                string s = comboBox1.Text;
                alpha = Convert.ToDouble(s) * Math.PI / 180;
                buttonGraph_Click(this, null);
            }
            catch(Exception e2) { };
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            graph.Clear(pictureBoxMain.BackColor);
            buttonGraph_Click(this, null);
            change += 1;
            if (change > 42)
                change = 0;
            x = L.X(A, a, change, s);
            y = L.Y(B,b,change);
            G2P t = new G2P(x, y);
            t = t.Affine(mx1, my1, x01, y01, alpha);
            graph.FillEllipse(brush1, (int)t.x - 10, (int)t.y - 10, 20, 20);
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void textBoxA_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void buttonwrite_Click(object sender, EventArgs e)
        {
            A = double.Parse(dataGridView1[0,0].Value.ToString());
            a = double.Parse(dataGridView1[1,0].Value.ToString());
            B = double.Parse(dataGridView1[2,0].Value.ToString());
            b = double.Parse(dataGridView1[3, 0].Value.ToString());
            s = double.Parse(dataGridView1[4, 0].Value.ToString());
            buttonGraph_Click(this, null);
        }

        private void comboBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == 13)
                comboBox1_TextChanged(this, e);

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void DataGridView1_CellContentClick_1(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
    struct G2P
    {
        public double x, y;
        public G2P(double x1,double y1)
        {
            x = x1;
            y = y1;
        }
        public G2P Affine(double mx1,double my1,double x01,double y01,double alpha)
        {
            double x2 = x * mx1;
            double y2 = y * my1;
            double xa = x2 * Math.Cos(alpha) + y2 * Math.Sin(alpha);
            double ya = x2 * -Math.Sin(alpha) + y2 * Math.Cos(alpha);
            return new G2P(xa + x01, ya + y01);
        }
    }
    class FunctionLissaz
    {
        public double X(double A,double a,double t, double s)
        {
            return A * Math.Sin(a * t + s);
        }
        public double Y(double B,double b,double t)
        {
            return B * Math.Sin(b*t);
        }
        public G2P P(double A,double a,double s,double B,double b,double x )
        {
            return new G2P(X(A,a,x,s), Y(B,b,x));
        }
        public void Draw(Graphics g1,Pen p1,double x_beg,double x_end,double x_step,double mx1,double my1,double x01,double y01,double alpha, double A, double a, double s, double B, double b)
        {
            if(x_beg<=x_end&&x_step>0)
            {
                G2P t = new G2P(0, 0);
                G2P t0 = new G2P(0,0);
                Pen p2 = (Pen)p1.Clone();
                p2.Width = 5;
                for(double i=x_beg;i<x_end;i+=x_step)
                {
                    t = P(A,a,s,B,b,i).Affine(mx1, my1, x01, y01, alpha);
                    g1.DrawEllipse(p2, (int)t.x - 5, (int)t.y - 5, 10, 10);
                    if (i > 0)
                        g1.DrawLine(p2, (float)t0.x, (float)t0.y, (float)t.x, (float)t.y);
                    t0 = t;
                }

            }
        }
    }
}
